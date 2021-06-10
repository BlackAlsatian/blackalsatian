/** @jsxImportSource theme-ui */

import { Link } from 'gatsby'
import { Label, Input, Box, Button, Heading, Spinner, Alert } from 'theme-ui'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { emailRegExp, sendGA, leadInfo } from '../helpers'

const LeadForm = ({ buttonBackground, btnColor, formStyle, buttonName, errorColor }) => {
    const [messageAlert, setMessageAlert] = useState(false)
    const [formSubmitting, setFormSubmitting] = useState(false)

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
            email: '',
            status: 'lead',
            subscribe: false,
            mailer_sync: true,
            site: 'blackalsatian.co.za',
            page: leadInfo().pathUrl,
            traffic_source: leadInfo().referrerUrl,
            tags: 'lead',
        },
    })

    const onSubmit = (data) => {
        console.log(data)
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
                    sendGA('lead')
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
    return (
        <Box as='form' onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor='name'>Name</Label>
            <Input
                id='name'
                name='name'
                type='text'
                mb={3}
                variant={formStyle}
                sx={{
                    borderBottomColor: errors.name ? `${errorColor}` : `${buttonBackground}` || 'white',
                    color: `${buttonBackground}`,
                    '&:focus': { color: 'black' },
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

            <Label htmlFor='email'>Email</Label>
            <Input
                id='email'
                name='email'
                type='email'
                mb={3}
                variant={formStyle}
                sx={{
                    borderBottomColor: errors.email ? `${errorColor}` : `${buttonBackground}` || 'white',
                    color: `${buttonBackground}`,
                    '&:focus': { color: 'black' },
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
            <Box mb={3}>
                <Heading
                    as='h4'
                    sx={{
                        fontWeight: 'medium',
                        pb: 2,
                    }}
                >
                    Yes, I'd like to receive emails from Black Alsatian
                </Heading>
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
                            required: "Without your permission, we won't be able to contact you. *sad face*",
                        })}
                    />
                    <span sx={{ fontSize: '0.75rem', paddingLeft: '0.3rem' }}>
                        We save the information you submit through this form for the sole purpose of contacting you. You
                        can read our{' '}
                        <Link
                            to='/privacy-policy/'
                            title='Black Alsatian Privacy Policy'
                            sx={{ color: 'black', '&:hover': { textDecoration: 'none' } }}
                        >
                            Privacy Policy
                        </Link>{' '}
                        and{' '}
                        <Link
                            to='/terms-of-use/'
                            title='Black Alsatian Terms of Use'
                            sx={{ color: 'black', '&:hover': { textDecoration: 'none' } }}
                        >
                            Terms of Use
                        </Link>{' '}
                        for more info.
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
            {formSubmitting ? (
                <Spinner
                    sx={{
                        color: `${buttonBackground}`,
                    }}
                />
            ) : (
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
            )}
        </Box>
    )
}

export default LeadForm
