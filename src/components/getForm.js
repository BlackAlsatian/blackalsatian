/* eslint-disable react/no-unknown-property */
/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/** @jsxImportSource theme-ui */
import axios from 'axios'
import { Link } from 'gatsby'
import { useEffect, useId, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, Flex, Input, Label, Spinner, Textarea } from 'theme-ui'
import Notification from './notification'

import { emailRegExp, getFormFeedbackPalette, leadInfo, phoneRegExp, sendGA } from '../components/helpers'

const GetForm = ({ option, buttonName, buttonUrl, backgroundColor, buttonBackground, formStyle }) => {
    if (option === 'contact') {
        option = 'enquiry'
    }
    const feedbackPalette = getFormFeedbackPalette({ surfaceColor: backgroundColor, actionColor: buttonBackground })
    const [formNotice, setFormNotice] = useState(null)
    const [formSubmitting, setFormSubmitting] = useState(false)
    const [inBrowser, setInBrowser] = useState(false)
    const noticeTimeoutRef = useRef(null)

    useEffect(() => setInBrowser(true), [])

    useEffect(() => {
        return () => {
            if (noticeTimeoutRef.current) {
                clearTimeout(noticeTimeoutRef.current)
            }
        }
    }, [])

    const resolvedActionColor = buttonBackground || feedbackPalette.actionColor
    const isUnderlineForm = formStyle === 'inputs.underline'
    const fieldTextColor = isUnderlineForm ? feedbackPalette.surfaceTextColor : 'black'
    const checkboxColor = isUnderlineForm ? feedbackPalette.surfaceTextColor : resolvedActionColor
    const btnColor = backgroundColor || feedbackPalette.actionTextColor
    const submitSuccessMessage =
        option === 'lead' ? 'Please keep an eye on your inbox.' : "I'll tell a human to contact you ASAP."
    const submitErrorMessage = 'Something went wrong while sending your message. Please try again in a moment.'

    const showNotice = (status, message, timeoutMs) => {
        if (noticeTimeoutRef.current) {
            clearTimeout(noticeTimeoutRef.current)
        }

        setFormNotice({ message, status })

        if (timeoutMs) {
            noticeTimeoutRef.current = setTimeout(() => {
                setFormNotice(null)
                noticeTimeoutRef.current = null
            }, timeoutMs)
        }
    }

    const getFieldStyles = (hasError, includeRestBackground = false) => ({
        borderBottomColor: hasError ? `${feedbackPalette.fieldErrorColor} !important` : resolvedActionColor || 'white',
        color: fieldTextColor,
        '&:focus': { color: 'black', backgroundColor: 'white' },
        '&:not(:focus)': {
            color: fieldTextColor,
            ...(includeRestBackground
                ? { backgroundColor: isUnderlineForm ? feedbackPalette.surfaceColor : 'white' }
                : {}),
        },
    })

    const formId = useId()
    const idFor = (suffix) => `${formId}-${suffix}`
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: 'all',
        defaultValues: {
            name: '',
            lastname: '',
            number: '',
            email: '',
            message: '',
            status: 'lead',
            subscribe: false,
            mailer_sync: option === 'lead' ? true : false,
            privacy_policy: option === 'lead' ? true : false,
            page: leadInfo(inBrowser).pathUrl,
            traffic_source: leadInfo(inBrowser).referrerUrl,
            tags: option === 'lead' ? buttonUrl : option,
            website_id: `${process.env.GATSBY_BA_SITEID}`,
        },
    })

    const onSubmit = async (data) => {
        setFormSubmitting(true)
        setFormNotice(null)

        if (data.lastname !== '') {
            setFormSubmitting(false)
            reset()
            showNotice('success', submitSuccessMessage, 2500)
            return
        }

        const apiUrl =
            process.env.NODE_ENV !== 'production' && process.env.GATSBY_API_URL
                ? process.env.GATSBY_API_URL
                : '/.netlify/functions/lead-proxy'

        try {
            const response = await axios({
                method: 'post',
                url: apiUrl,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify(data),
            })

            if (response.status === 201) {
                setFormSubmitting(false)
                reset()
                sendGA('generate_lead', option, data.tags, inBrowser)
                showNotice('success', submitSuccessMessage, 5000)
                return
            }

            setFormSubmitting(false)
            showNotice('error', submitErrorMessage, 6000)
        } catch {
            console.log("There were errors. That's all I know.")
            setFormSubmitting(false)
            showNotice('error', submitErrorMessage, 6000)
        }
    }
    if (option === 'btnonly') {
        if (buttonUrl.includes('#')) {
            return (
                <p>
                    <span>
                        <a
                            href={buttonUrl}
                            sx={{
                                variant: 'buttons.simple',
                                display: 'inline-block',
                                backgroundColor: `${buttonBackground}`,
                                // color: `${backgroundColor}` || 'white',
                                textDecoration: 'none',
                                boxShadow: 'xl',
                                '&:hover': {
                                    boxShadow: 'none',
                                },
                            }}
                        >
                            {buttonName}
                        </a>
                    </span>
                </p>
            )
        }
        // console.log(buttonBackground)
        return (
            <p>
                <span>
                    <Link
                        to={buttonUrl}
                        sx={{
                            variant: 'buttons.simple',
                            display: 'inline-block',
                            backgroundColor: `${buttonBackground}`,
                            // color: `${backgroundColor || 'white'}`,
                            textDecoration: 'none',
                            boxShadow: 'xl',
                            '&:hover': {
                                boxShadow: 'none',
                            },
                        }}
                    >
                        {buttonName}
                    </Link>
                </span>
            </p>
        )
    }
    return (
        <Box as='form' onSubmit={handleSubmit(onSubmit)} aria-busy={formSubmitting}>
            {/* name */}
            <Label htmlFor={idFor('name')}>Name</Label>
            <Input
                id={idFor('name')}
                name='name'
                type='text'
                mb={3}
                variant={formStyle}
                sx={getFieldStyles(errors.name)}
                aria-invalid={errors.name ? 'true' : 'false'}
                {...register('name', {
                    required: 'Oops! You missed this field.',
                    minLength: {
                        value: 3,
                        message: "That's quite a short name. At least 3 characters are required",
                    },
                    maxLength: {
                        value: 50,
                        message: 'Wow, now that is quite a long name! This field only takes 50 characters',
                    },
                })}
            />
            {errors.name && (
                <div
                    sx={{
                        color: feedbackPalette.fieldErrorColor,
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        pb: 3,
                    }}
                >
                    {errors.name.message}
                </div>
            )}

            {/* lastname  */}
            <Label
                htmlFor={idFor('lastname')}
                sx={{
                    opacity: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0,
                    zIndex: -1,
                }}
            >
                Lastname
            </Label>
            <Input
                id={idFor('lastname')}
                name='lastname'
                type='text'
                sx={{
                    opacity: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0,
                    zIndex: -1,
                }}
                autoComplete='off'
            />

            {(option === 'quote' || option === 'enquiry') && (
                <>
                    {/* number */}
                    <Label htmlFor={idFor('number')}>Number</Label>
                    <Input
                        id={idFor('number')}
                        name='number'
                        type='tel'
                        mb={3}
                        variant={formStyle}
                        sx={getFieldStyles(errors.number)}
                        aria-invalid={errors.number ? 'true' : 'false'}
                        {...register('number', {
                            required: 'Oops! You missed this field.',
                            minLength: {
                                value: 3,
                                message: 'Seems a bit short.',
                            },
                            pattern: {
                                value: phoneRegExp,
                                message: "Hmm, there's something not quite right with this number?",
                            },
                        })}
                    />
                    {errors.number && (
                        <div
                            sx={{
                                color: feedbackPalette.fieldErrorColor,
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                pb: 3,
                            }}
                        >
                            {errors.number.message}
                        </div>
                    )}
                </>
            )}

            {/* email */}
            <Label htmlFor={idFor('email')}>Email</Label>
            <Input
                id={idFor('email')}
                type='email'
                name='email'
                mb={3}
                variant={formStyle}
                sx={getFieldStyles(errors.email)}
                {...register('email', {
                    required: 'Oops! You missed this field.',
                    pattern: {
                        value: emailRegExp,
                        message: "Hmm, there's something strange about this email address.",
                    },
                    maxLength: {
                        value: 80,
                        message: "Wow, now that's a long email address! This field only accepts 80 characters.",
                    },
                })}
            />
            {errors.email && (
                <div
                    sx={{
                        color: feedbackPalette.fieldErrorColor,
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        pb: 3,
                    }}
                >
                    {errors.email.message}
                </div>
            )}

            {/* message */}
            {(option === 'quote' || option === 'enquiry') && (
                <>
                    <Label htmlFor={idFor('message')}>Message</Label>
                    <Textarea
                        id={idFor('message')}
                        name='message'
                        rows='4'
                        mb={3}
                        variant={formStyle}
                        sx={getFieldStyles(errors.message, true)}
                        aria-invalid={errors.message ? 'true' : 'false'}
                        {...register('message', {
                            required: 'How may we assist?',
                            minLength: {
                                value: 40,
                                message: 'Was that all? At least 40 characters are required.',
                            },
                        })}
                    />
                    {errors.message && (
                        <div
                            sx={{
                                color: feedbackPalette.fieldErrorColor,
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                pb: 3,
                            }}
                        >
                            {errors.message.message}
                        </div>
                    )}
                </>
            )}

            {/* checkbox or plain privacy policy */}
            {option === 'lead' ? (
                <>
                    <Box mb={3}>
                        <Label htmlFor={idFor('subscribe')}>
                            <Box
                                as='input'
                                type='checkbox'
                                id={idFor('subscribe')}
                                name='subscribe'
                                defaultChecked={false}
                                sx={{
                                    // mr: 3,
                                    mb: 3,
                                    cursor: 'pointer',
                                    WebkitAppearance: 'none',
                                    MozAppearance: 'none',
                                    appearance: 'none',
                                    outline: 0,
                                    height: 6,
                                    width: 6,
                                    minWidth: 6,
                                    border: '2px solid',
                                    borderColor: errors.subscribe ? feedbackPalette.fieldErrorColor : checkboxColor,
                                    display: 'inline-block',
                                    ':checked': {
                                        bg: 'transparent',
                                        border: 'none',
                                        position: 'relative',
                                    },
                                    ':after': {
                                        content: "'✓'",
                                        transform: 'scale(2)',
                                        color: errors.subscribe ? feedbackPalette.fieldErrorColor : checkboxColor,
                                        fontWeight: 'black',
                                        display: 'none',
                                        position: 'absolute',
                                        top: 0,
                                        left: '9px',
                                    },
                                    ':checked:after': {
                                        display: 'block',
                                    },
                                    ':focus': {
                                        boxShadow: 'xs',
                                    },
                                }}
                                aria-invalid={errors.subscribe ? 'true' : 'false'}
                                {...register('subscribe', {
                                    required: "Without your consent, we won't be able to contact you. *sad face*",
                                })}
                            />
                            <span sx={{ fontSize: '0.75rem', paddingLeft: '0.8rem' }}>
                                Yes, I understand Black Alsatian saves the information I'm submitting for the sole
                                purpose of contacting me. I have read and understood the{' '}
                                <Link
                                    to='/terms-of-use/'
                                    title='Black Alsatian Terms of Use'
                                    sx={{ color: resolvedActionColor, '&:hover': { textDecoration: 'none' } }}
                                >
                                    Terms of Use
                                </Link>{' '}
                                and{' '}
                                <Link
                                    to='/privacy-policy/'
                                    title='Black Alsatian Privacy Policy'
                                    sx={{ color: resolvedActionColor, '&:hover': { textDecoration: 'none' } }}
                                >
                                    Privacy Policy
                                </Link>
                                .
                            </span>
                        </Label>
                    </Box>
                    {errors.subscribe && (
                        <div
                            sx={{
                                color: feedbackPalette.fieldErrorColor,
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                pb: 3,
                            }}
                        >
                            {errors.subscribe.message}
                        </div>
                    )}
                </>
            ) : (
                <>
                    <Box mb={3}>
                        <Label htmlFor={idFor('privacy_policy')}>
                            <Box
                                as='input'
                                type='checkbox'
                                id={idFor('privacy_policy')}
                                name='privacy_policy'
                                defaultChecked={false}
                                sx={{
                                    // mr: 3,
                                    mb: 3,
                                    cursor: 'pointer',
                                    WebkitAppearance: 'none',
                                    MozAppearance: 'none',
                                    appearance: 'none',
                                    outline: 0,
                                    height: 6,
                                    width: 6,
                                    minWidth: 6,
                                    border: '2px solid',
                                    borderColor: errors.privacy_policy
                                        ? feedbackPalette.fieldErrorColor
                                        : checkboxColor,
                                    display: 'inline-block',
                                    ':checked': {
                                        bg: 'transparent',
                                        border: 'none',
                                        position: 'relative',
                                    },
                                    ':after': {
                                        content: "'✓'",
                                        transform: 'scale(2)',
                                        color: errors.privacy_policy ? feedbackPalette.fieldErrorColor : checkboxColor,
                                        fontWeight: 'black',
                                        display: 'none',
                                        position: 'absolute',
                                        top: 0,
                                        left: '9px',
                                    },
                                    ':checked:after': {
                                        display: 'block',
                                    },
                                    ':focus': {
                                        boxShadow: 'xs',
                                    },
                                }}
                                aria-invalid={errors.privacy_policy ? 'true' : 'false'}
                                {...register('privacy_policy', {
                                    required: "Without your consent, we won't be able to contact you. *sad face*",
                                })}
                            />
                            <span sx={{ fontSize: '0.75rem', paddingLeft: '0.8rem' }}>
                                Yes, I understand that Black Alsatian saves this information for the sole purpose of
                                contacting me regarding my query. I have read and understood the{' '}
                                <Link
                                    to='/terms-of-use/'
                                    title='Black Alsatian Terms of Use'
                                    sx={{ color: resolvedActionColor, '&:hover': { textDecoration: 'none' } }}
                                >
                                    Terms of Use
                                </Link>{' '}
                                and{' '}
                                <Link
                                    to='/privacy-policy/'
                                    title='Black Alsatian Privacy Policy'
                                    sx={{ color: resolvedActionColor, '&:hover': { textDecoration: 'none' } }}
                                >
                                    Privacy Policy
                                </Link>
                                .
                            </span>
                        </Label>
                    </Box>
                    {errors.privacy_policy && (
                        <div
                            sx={{
                                color: feedbackPalette.fieldErrorColor,
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                pb: 3,
                            }}
                        >
                            {errors.privacy_policy.message}
                        </div>
                    )}
                </>
            )}

            <Notification
                color={
                    formNotice?.status === 'error'
                        ? feedbackPalette.errorAlertTextColor
                        : feedbackPalette.successAlertTextColor
                }
                bgColor={
                    formNotice?.status === 'error' ? feedbackPalette.errorAlertColor : feedbackPalette.successAlertColor
                }
                message={formNotice?.message}
                showAlert={!!formNotice}
                status={formNotice?.status}
                title={formNotice?.status === 'error' ? 'Please Try Again' : 'Got It!'}
            />

            {/* button */}
            {formSubmitting ? (
                <Flex
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        color: resolvedActionColor,
                        fontSize: 0,
                        fontWeight: 'bold',
                        gap: 2,
                    }}
                    role='status'
                    aria-live='polite'
                >
                    <Spinner
                        sx={{
                            color: resolvedActionColor,
                        }}
                    />
                    <Box as='span'>Sending...</Box>
                </Flex>
            ) : (
                <>
                    <Button
                        type='submit'
                        variant='simple'
                        ml='auto'
                        disabled={formSubmitting}
                        sx={{
                            backgroundColor: resolvedActionColor,
                            color: btnColor,
                            boxShadow: 'xl',
                            '&:hover': {
                                backgroundColor: resolvedActionColor,
                                boxShadow: 'none',
                            },
                        }}
                    >
                        {buttonName || 'Fetch!'}
                    </Button>
                </>
            )}
        </Box>
    )
}
export default GetForm
