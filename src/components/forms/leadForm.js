/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Label, Input, Box, Button, Heading, Spinner, Alert } from 'theme-ui'
import { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const LeadFormSchema = Yup.object({
    name: Yup.string()
        .min(3, "That's quite a short name. At least 3 characters are required")
        .max(50, 'Wow, now that is quite a long name! This field only takes 50 characters')
        .required('Oops! You missed this field.'),
    email: Yup.string()
        .email("Hmm, there's something strange about this email address.")
        .max(80, "Wow, now that's a long email address! This field only accepts 80 characters.")
        .required('Oops! You missed this field.'),
})

const LeadForm = ({ buttonBackground, btnColor, formStyle, buttonName }) => {
    const [messageAlert, setMessageAlert] = useState(false)
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
                email: '',
                message: '',
                status: 'Lead',
                subscribe: true,
                site: 'blackalsatian.co.za',
                page: '',
                source: '',
                notes: '',
            }}
            validationSchema={LeadFormSchema}
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
                        if (response.status === 201) {
                            setMessageAlert(true)
                            actions.resetForm()
                            actions.setSubmitting(false)
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
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        id='email'
                        name='email'
                        type='email'
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
                    <Box {...formik.getFieldProps('subscribe')}>
                        <Heading
                            as='h4'
                            sx={{
                                fontWeight: 'medium',
                                pb: 2,
                            }}
                        >
                            Are you OK with us emailing you?
                        </Heading>
                        <Label htmlFor='subscribe'>
                            <Box
                                as='input'
                                type='checkbox'
                                id='subscribe'
                                name='subscribe'
                                defaultChecked={true}
                                sx={{
                                    mr: 3,
                                    mb: 3,
                                    cursor: 'pointer',
                                    WebkitAppearance: 'none',
                                    MozAppearance: 'none',
                                    appearance: 'none',
                                    outline: 0,
                                    height: 6,
                                    width: 6,
                                    border: '2px solid',
                                    borderColor: 'white',
                                    display: 'inline-block',
                                    ':checked': {
                                        bg: 'transparent',
                                        border: 'none',
                                        position: 'relative',
                                    },
                                    ':after': {
                                        content: "'✓'",
                                        transform: 'scale(2)',
                                        color: 'white',
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
                            Yes! I'd love to keep in touch with Black Alsatian.
                        </Label>
                    </Box>
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
                                boxShadow: 'xl',
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
