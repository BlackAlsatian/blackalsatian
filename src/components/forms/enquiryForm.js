/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Label, Input, Textarea, Box, Button, Spinner, Alert } from 'theme-ui'
import { useState } from 'react'
import { Formik } from 'formik'
import { object, string } from 'yup'
import axios from 'axios'
import { phoneRegExp, sendGA, leadInfo } from '../helpers'

const Yup = { object, string }
const EnquiryFormSchema = Yup.object({
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
})
const EnquiryForm = ({ buttonBackground, btnColor, formStyle, buttonName, errorColor }) => {
    const [messageAlert, setMessageAlert] = useState(false)
    return (
        <Formik
            initialValues={{
                name: '',
                lastname: '',
                number: '',
                email: '',
                message: '',
                status: 'lead',
                site: 'blackalsatian.co.za',
                page: leadInfo().pathUrl,
                traffic_source: leadInfo().referrerUrl,
                tags: 'enquiry',
            }}
            validationSchema={EnquiryFormSchema}
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
                            sendGA('enquiry')
                            setTimeout(() => {
                                setMessageAlert(false)
                            }, 4000)
                        }
                        // console.log(response)
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
                            borderBottomColor: formik.errors.name ? `${errorColor}` : `${buttonBackground}` || 'white',
                            color: `${buttonBackground}`,
                            '&:focus': { color: 'black' },
                        }}
                        {...formik.getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div
                            sx={{
                                color: `${errorColor}`,
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
                            borderBottomColor: formik.errors.number
                                ? `${errorColor}`
                                : `${buttonBackground}` || 'white',
                            color: `${buttonBackground}`,
                            '&:focus': { color: 'black' },
                        }}
                        {...formik.getFieldProps('number')}
                    />
                    {formik.touched.number && formik.errors.number ? (
                        <div
                            sx={{
                                color: `${errorColor}`,
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
                            borderBottomColor: formik.errors.email ? `${errorColor}` : `${buttonBackground}` || 'white',
                            color: `${buttonBackground}`,
                            '&:focus': { color: 'black' },
                        }}
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div
                            sx={{
                                color: `${errorColor}`,
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
                            borderBottomColor: formik.errors.message
                                ? `${errorColor}`
                                : `${buttonBackground}` || 'white',
                            color: `${buttonBackground}`,
                            '&:focus': { color: 'black' },
                        }}
                        {...formik.getFieldProps('message')}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <div
                            sx={{
                                color: `${errorColor}`,
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                pb: 3,
                            }}
                        >
                            {formik.errors.message}
                        </div>
                    ) : null}
                    <div sx={{ fontSize: '0.75rem', paddingBottom: 3 }}>
                        We save the information you submit through this form for the sole purpose of contacting you
                        regarding your query. You can read our{' '}
                        <Link
                            to='/privacy-policy/'
                            title='Black Alsatian Privacy Policy'
                            sx={{ '&:hover': { textDecoration: 'none' } }}
                        >
                            Privacy Policy
                        </Link>{' '}
                        and{' '}
                        <Link
                            to='/terms-of-use/'
                            title='Black Alsatian Terms of Use'
                            sx={{ '&:hover': { textDecoration: 'none' } }}
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

export default EnquiryForm
