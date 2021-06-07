/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Label, Input, Box, Button, Heading, Spinner, Alert } from 'theme-ui'
import { useState } from 'react'
import { Formik } from 'formik'
import { object, string, boolean } from 'yup'
import axios from 'axios'
import { sendGA, leadInfo } from '../helpers'

const Yup = { object, string, boolean }
const LeadFormSchema = Yup.object({
    name: Yup.string()
        .min(3, "That's quite a short name. At least 3 characters are required")
        .max(50, 'Wow, now that is quite a long name! This field only takes 50 characters')
        .required('Oops! You missed this field.'),
    email: Yup.string()
        .email("Hmm, there's something strange about this email address.")
        .max(80, "Wow, now that's a long email address! This field only accepts 80 characters.")
        .required('Oops! You missed this field.'),
    subscribe: Yup.boolean()
        .required()
        .oneOf([true], "Without your permission, we won't be able to contact you. *sad face*"),
})

const LeadForm = ({ buttonBackground, btnColor, formStyle, buttonName }) => {
    const [messageAlert, setMessageAlert] = useState(false)
    return (
        <Formik
            initialValues={{
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
            }}
            validationSchema={LeadFormSchema}
            onSubmit={(values, actions) => {
                // console.log(values)
                axios({
                    method: 'post',
                    url: `${process.env.GATSBY_API_URL}`,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    data: JSON.stringify(values),
                }).then(
                    (response) => {
                        if (response.status === 201) {
                            setMessageAlert(true)
                            actions.resetForm()
                            actions.setSubmitting(false)
                            sendGA('lead')
                            setTimeout(() => {
                                setMessageAlert(false)
                            }, 4000)
                        }
                        // console.log(response)
                    },
                    (error) => {
                        console.log(error.response)
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
                            borderBottomColor: formik.errors.name ? 'red' : 'white',
                            '&:focus': { color: 'black' },
                        }}
                        {...formik.getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div
                            sx={{
                                color: 'red',
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

                    <Label htmlFor='email'>Email</Label>
                    <Input
                        id='email'
                        name='email'
                        type='email'
                        mb={3}
                        variant={formStyle}
                        sx={{
                            borderBottomColor: formik.errors.email ? 'red' : 'white',
                            '&:focus': { color: 'black' },
                        }}
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div
                            sx={{
                                color: 'red',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                pb: 3,
                            }}
                        >
                            {formik.errors.email}
                        </div>
                    ) : null}
                    <Box {...formik.getFieldProps('subscribe')} mb={3}>
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
                                value={formik.values.subscribe}
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
                            />
                            <span sx={{ fontSize: '0.75rem', paddingLeft: '0.3rem' }}>
                                We save the information you submit through this form for the sole purpose of contacting
                                you. You can read our{' '}
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
                    {formik.touched.subscribe && formik.errors.subscribe ? (
                        <div
                            sx={{
                                color: 'red',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                pb: 3,
                            }}
                        >
                            {formik.errors.subscribe}
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

export default LeadForm
