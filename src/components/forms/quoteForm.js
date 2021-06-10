/** @jsxImportSource theme-ui */

import { Link } from 'gatsby'
import { Label, Input, Textarea, Box, Button, Spinner, Alert } from 'theme-ui'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { phoneRegExp, emailRegExp, sendGA, leadInfo } from '../helpers'

const QuoteForm = ({ buttonBackground, btnColor, formStyle, buttonName, errorColor }) => {
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
            number: '',
            message: '',
            status: 'lead',
            site: 'blackalsatian.co.za',
            page: leadInfo().pathUrl,
            traffic_source: leadInfo().referrerUrl,
            tags: 'quote',
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
                    sendGA('quote')
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

            <Label htmlFor='number'>Number</Label>
            <Input
                id='number'
                name='number'
                type='tel'
                mb={3}
                variant={formStyle}
                sx={{
                    borderBottomColor: errors.number ? `${errorColor}` : `${buttonBackground}` || 'white',
                    color: `${buttonBackground}`,
                    '&:focus': { color: 'black' },
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

            <Label htmlFor='email'>Email</Label>
            <Input
                id='email'
                type='email'
                name='email'
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

            <Label htmlFor='message'>Message</Label>
            <Textarea
                id='message'
                name='message'
                rows='4'
                mb={3}
                variant={formStyle}
                sx={{
                    borderBottomColor: errors.message ? `${errorColor}` : `${buttonBackground}` || 'white',
                    color: `${buttonBackground}`,
                    '&:focus': { color: 'black' },
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
            <div sx={{ fontSize: '0.75rem', paddingBottom: 3 }}>
                We save the information you submit through this form for the sole purpose of contacting you regarding
                your query. You can read our{' '}
                <Link
                    to='/privacy-policy/'
                    title='Black Alsatian Privacy Policy'
                    sx={{ color: 'white', '&:hover': { textDecoration: 'none' } }}
                >
                    Privacy Policy
                </Link>{' '}
                and{' '}
                <Link
                    to='/terms-of-use/'
                    title='Black Alsatian Terms of Use'
                    sx={{ color: 'white', '&:hover': { textDecoration: 'none' } }}
                >
                    Terms of Use
                </Link>{' '}
                for more info.
            </div>
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

export default QuoteForm
