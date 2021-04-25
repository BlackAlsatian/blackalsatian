/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Label, Input, Textarea, Box, Button, Spinner, Alert } from 'theme-ui'
import { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { phoneRegExp } from '../helpers'

const QuoteFormSchema = Yup.object({
    name: Yup.string()
        .min(3, "That's quite a short name. At least 3 characters are required")
        .max(50, 'Wow, now that is quite a long name! This field only takes 50 characters')
        .required('Oops! You missed this field.'),
    number: Yup.string()
        .matches(phoneRegExp, "Hmm, there's something not quite right with this number?")
        .min(10, 'Seems a bit short.')
        .required('Oops! You missed this field.'),
    email: Yup.string()
        .email("Hmm, there's something strange about this email address.")
        .max(80, "Wow, now that's a long email address! This field only accepts 80 characters.")
        .required('Oops! You missed this field.'),
    message: Yup.string().min(40, 'Was that all? At least 40 characters are required.').required('How may we assist?'),
    privacy_policy: Yup.boolean()
        .required()
        .oneOf([true], "Without your permission, we won't be able to contact you. *sad face*"),
})

const sendGA = () => {
    if (process.env.NODE_ENV !== 'production') {
        console.log('Development')
        console.log('GTag fired!')
    } else {
        // console.log('Production')
        if (typeof window !== 'undefined') {
            window.gtag('event', 'quote')
        }
    }
}

const QuoteForm = ({ buttonBackground, btnColor, formStyle, buttonName }) => {
    const [messageAlert, setMessageAlert] = useState(false)
    let referrerUrl = typeof window !== 'undefined' && window.location.origin
    let pathUrl = typeof window !== 'undefined' && window.location.pathname
    return (
        <Formik
            initialValues={{
                name: '',
                lastname: '',
                email: '',
                number: '',
                message: '',
                status: 'lead',
                privacy_policy: false,
                site: 'blackalsatian.co.za',
                page: pathUrl,
                traffic_source: referrerUrl,
                tags: 'quote',
            }}
            validationSchema={QuoteFormSchema}
            onSubmit={(values, actions) => {
                axios({
                    method: 'post',
                    url: `${process.env.GATSBY_API_URL}`,
                    headers: {
                        Accept: 'Application/json',
                        'Content-type': 'Application/json',
                    },
                    data: JSON.stringify(values),
                }).then(
                    (response) => {
                        // console.log(response)
                        if (response.status === 201) {
                            setMessageAlert(true)
                            actions.resetForm()
                            actions.setSubmitting(false)
                            sendGA()
                            setTimeout(() => {
                                setMessageAlert(false)
                            }, 4000)
                        }
                    },
                    (error) => {
                        console.log(error)
                    },
                )
            }}
        >
            {(formik) => (
                <Box as='form' onSubmit={formik.handleSubmit}>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                        id='name'
                        name='name'
                        type='text'
                        mb={3}
                        variant={formStyle}
                        sx={{
                            borderBottomColor: formik.errors.name ? 'yellow' : 'white',
                            '&:focus': { color: 'black' },
                        }}
                        {...formik.getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div
                            sx={{
                                color: 'yellow',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                pb: 3,
                            }}
                        >
                            {formik.errors.name}
                        </div>
                    ) : null}

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
                            borderBottomColor: formik.errors.number ? 'yellow' : 'white',
                            '&:focus': { color: 'black' },
                        }}
                        {...formik.getFieldProps('number')}
                    />
                    {formik.touched.number && formik.errors.number ? (
                        <div
                            sx={{
                                color: 'yellow',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                pb: 3,
                            }}
                        >
                            {formik.errors.number}
                        </div>
                    ) : null}

                    <Label htmlFor='email'>Email</Label>
                    <Input
                        id='email'
                        type='email'
                        name='email'
                        mb={3}
                        variant={formStyle}
                        sx={{
                            borderBottomColor: formik.errors.email ? 'yellow' : 'white',
                            '&:focus': { color: 'black' },
                        }}
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div
                            sx={{
                                color: 'yellow',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                pb: 3,
                            }}
                        >
                            {formik.errors.email}
                        </div>
                    ) : null}

                    <Label htmlFor='message'>Message</Label>
                    <Textarea
                        id='message'
                        name='message'
                        rows='4'
                        mb={3}
                        variant={formStyle}
                        sx={{
                            borderBottomColor: formik.errors.message ? 'yellow' : 'white',
                            '&:focus': { color: 'black' },
                        }}
                        {...formik.getFieldProps('message')}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <div
                            sx={{
                                color: 'yellow',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                pb: 3,
                            }}
                        >
                            {formik.errors.message}
                        </div>
                    ) : null}

                    <Label
                        htmlFor='privacy_policy'
                        mb={3}
                        sx={{
                            display: 'inline-flex',
                            cursor: 'pointer',
                            position: 'relative',
                        }}
                    >
                        <span>
                            <Input
                                id='privacy_policy'
                                type='checkbox'
                                name='privacy_policy'
                                sx={{
                                    height: '25px',
                                    width: '25px',
                                    display: 'block',
                                    appearance: 'none',
                                    border: '1px solid white',
                                    borderRadius: '4px',
                                    outline: 'none',
                                    transitionDuration: '0.3s',
                                    backgroundColor: 'blue',
                                    color: 'blue',
                                    cursor: 'pointer',
                                    '&:checked': {
                                        border: '2px solid white',
                                        backgroundColor: 'white',
                                    },
                                    '&:active': {
                                        border: '2px solid white',
                                    },
                                }}
                                {...formik.getFieldProps('privacy_policy')}
                            />
                        </span>
                        <span
                            sx={{
                                color: 'white',
                                padding: '0.25rem',
                                fontSize: '0.75rem',
                                '&::before': {
                                    content: '"✓"',
                                    color: 'blue',
                                    display: 'block',
                                    position: 'absolute',
                                    left: '0.5rem',
                                    top: '0.2rem',
                                    fontWeight: 'bold',
                                },
                            }}
                        ></span>
                        <span sx={{ fontSize: '0.75rem', paddingLeft: '0.3rem' }}>
                            We save the information you submit through this form for the sole purpose of contacting you
                            regarding your query. You can also read our{' '}
                            <Link
                                to='/privacy-policy/'
                                title='Black Alsatian Privacy Policy'
                                sx={{ color: 'white', '&:hover': { color: 'offWhite', textDecoration: 'none' } }}
                            >
                                Privacy Policy
                            </Link>{' '}
                            and{' '}
                            <Link
                                to='/terms-of-use/'
                                title='Black Alsatian Terms of Use'
                                sx={{ color: 'white', '&:hover': { color: 'offWhite', textDecoration: 'none' } }}
                            >
                                Terms of Use
                            </Link>{' '}
                            for more info.
                        </span>
                    </Label>

                    {formik.touched.privacy_policy && formik.errors.privacy_policy ? (
                        <div
                            sx={{
                                color: 'yellow',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                pb: 3,
                            }}
                        >
                            {formik.errors.privacy_policy}
                        </div>
                    ) : null}

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
                    {formik.isSubmitting ? (
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
                            disabled={formik.isSubmitting}
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
            )}
        </Formik>
    )
}

export default QuoteForm
