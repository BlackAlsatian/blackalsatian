/** @jsxImportSource theme-ui */
import { Link } from 'gatsby'
import { Label, Input, Box, Button, Spinner, Alert, Textarea } from 'theme-ui'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import { handleErrorColor, phoneRegExp, emailRegExp, sendGA, leadInfo } from '../components/helpers'

const GetForm = ({ option, buttonName, buttonUrl, backgroundColor, buttonBackground, formStyle, footerError }) => {
    if (option === 'contact') {
        option = 'enquiry'
    }
    const errorColor = handleErrorColor(backgroundColor)
    const [messageAlert, setMessageAlert] = useState(false)
    const [formSubmitting, setFormSubmitting] = useState(false)

    let btnColor = backgroundColor || 'white'
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
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
            page: leadInfo().pathUrl,
            traffic_source: leadInfo().referrerUrl,
            tags: option === 'lead' ? buttonUrl : option,
            website_id: `${process.env.GATSBY_BA_SITEID}`,
        },
    })

    const onSubmit = (data) => {
        // console.log(data)
        setFormSubmitting(true)
        axios({
            method: 'post',
            url: `${process.env.GATSBY_API_URL}`,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(data),
        }).then(
            (response) => {
                if (response.status === 201) {
                    setFormSubmitting(false)
                    setMessageAlert(true)
                    reset(getValues)
                    sendGA('generate_lead', option, data.tags)
                    setTimeout(() => {
                        setMessageAlert(false)
                    }, 2500)
                }
                // console.log(response)
            },
            (error) => {
                // console.log(error.response)
                console.log("There were errors. That's all I know.")
            },
        )
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
        <Box as='form' onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <Label htmlFor='name'>Name</Label>
            <Input
                id='name'
                name='name'
                type='text'
                mb={3}
                variant={formStyle}
                sx={{
                    borderBottomColor: errors.name ? `${errorColor}` + ' !important' : `${buttonBackground}` || 'white',
                    color: `${buttonBackground}`,
                    '&:focus, &:not(:focus)': { color: 'black' },
                    variant: footerError && footerError.errors,
                }}
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
                        color: `${errorColor}`,
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
                htmlFor='lastname'
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
                id='lastname'
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
                autocomplete='off'
            />

            {(option === 'quote' || option === 'enquiry') && (
                <>
                    {/* number */}
                    <Label htmlFor='number'>Number</Label>
                    <Input
                        id='number'
                        name='number'
                        type='tel'
                        mb={3}
                        variant={formStyle}
                        sx={{
                            borderBottomColor: errors.number
                                ? `${errorColor}` + ' !important'
                                : `${buttonBackground}` || 'white',
                            color: `${buttonBackground}`,
                            '&:focus, &:not(:focus)': { color: 'black' },
                            variant: footerError && footerError.errors,
                        }}
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
                                color: `${errorColor}`,
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
            <Label htmlFor='email'>Email</Label>
            <Input
                id='email'
                type='email'
                name='email'
                mb={3}
                variant={formStyle}
                sx={{
                    borderBottomColor: errors.email
                        ? `${errorColor}` + ' !important'
                        : `${buttonBackground}` || 'white',
                    color: `${buttonBackground}`,
                    '&:focus, &:not(:focus)': { color: 'black' },
                    variant: footerError && footerError.errors,
                }}
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
                        color: `${errorColor}`,
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
                    <Label htmlFor='message'>Message</Label>
                    <Textarea
                        id='message'
                        name='message'
                        rows='4'
                        mb={3}
                        variant={formStyle}
                        sx={{
                            borderBottomColor: errors.message
                                ? `${errorColor}` + ' !important'
                                : `${buttonBackground}` || 'white',
                            color: `${buttonBackground}`,
                            '&:focus, &:not(:focus)': { color: 'black', backgroundColor: 'white' },
                            variant: footerError && footerError.errors,
                        }}
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
                                color: `${errorColor}`,
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
                        <Label htmlFor='subscribe'>
                            <Box
                                as='input'
                                type='checkbox'
                                id='subscribe'
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
                                    borderColor: 'black',
                                    display: 'inline-block',
                                    ':checked': {
                                        bg: 'transparent',
                                        border: 'none',
                                        position: 'relative',
                                    },
                                    ':after': {
                                        content: "'✓'",
                                        transform: 'scale(2)',
                                        color: 'black',
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
                            <span sx={{ fontSize: '0.75rem', paddingLeft: '0.3rem' }}>
                                Yes, I understand that by signing up for this guide, Black Alsatian saves this
                                information for the sole purpose of contacting me. I have read and understood the{' '}
                                <Link
                                    to='/terms-of-use/'
                                    title='Black Alsatian Terms of Use'
                                    sx={{ color: `${buttonBackground}`, '&:hover': { textDecoration: 'none' } }}
                                >
                                    Terms of Use
                                </Link>{' '}
                                and{' '}
                                <Link
                                    to='/privacy-policy/'
                                    title='Black Alsatian Privacy Policy'
                                    sx={{ color: `${buttonBackground}`, '&:hover': { textDecoration: 'none' } }}
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
                                color: `${errorColor}`,
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
                        <Label htmlFor='privacy_policy'>
                            <Box
                                as='input'
                                type='checkbox'
                                id='privacy_policy'
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
                                    borderColor: buttonBackground,
                                    display: 'inline-block',
                                    ':checked': {
                                        bg: 'transparent',
                                        border: 'none',
                                        position: 'relative',
                                    },
                                    ':after': {
                                        content: "'✓'",
                                        transform: 'scale(2)',
                                        color: buttonBackground,
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
                            <span sx={{ fontSize: '0.75rem', paddingLeft: '0.3rem' }}>
                                Yes, I understand that Black Alsatian saves this information for the sole purpose of
                                contacting me regarding my query. I have read and understood the{' '}
                                <Link
                                    to='/terms-of-use/'
                                    title='Black Alsatian Terms of Use'
                                    sx={{ color: `${buttonBackground}`, '&:hover': { textDecoration: 'none' } }}
                                >
                                    Terms of Use
                                </Link>{' '}
                                and{' '}
                                <Link
                                    to='/privacy-policy/'
                                    title='Black Alsatian Privacy Policy'
                                    sx={{ color: `${buttonBackground}`, '&:hover': { textDecoration: 'none' } }}
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
                                color: `${errorColor}`,
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

            {/* success alert */}
            {messageAlert && (
                <Alert
                    sx={{
                        color: `${btnColor}`,
                        bg: `${buttonBackground}`,
                        my: 3,
                    }}
                >
                    Pleased to meet you! Chat soon.
                </Alert>
            )}

            {/* button */}
            {formSubmitting ? (
                <Spinner
                    sx={{
                        color: `${buttonBackground}`,
                    }}
                />
            ) : (
                <>
                    <Button
                        type='submit'
                        variant='simple'
                        ml='auto'
                        disabled={formSubmitting}
                        sx={{
                            backgroundColor: `${buttonBackground}`,
                            color: `${btnColor}`,
                            boxShadow: 'xl',
                            '&:hover': {
                                backgroundColor: `${buttonBackground}`,
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
