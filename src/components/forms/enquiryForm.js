/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Label, Input, Textarea, Box, Button } from 'theme-ui'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { phoneRegExp } from '../helpers'

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
const EnquiryForm = ({ buttonBackground, btnColor, formStyle, buttonName, path }) => {
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
                email: '',
                message: '',
                status: 'Enquiry',
                subscribe: false,
                site: 'blackalsatian.co.za',
                page: '',
                source: '',
                notes: '',
            }}
            validationSchema={EnquiryFormSchema}
            onSubmit={(values, actions) => {
                console.log(values)
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    axios({
                        method: 'post',
                        url: `${process.env.GATSBY_API_URL}`,
                        headers: {
                            Accept: 'Application/json',
                            'Content-type': 'Application/json',
                        },
                        data: JSON.stringify(values),
                    }).then(
                        console.log(values),
                        (response) => {
                            console.log(values)
                            console.log(response)
                            // this.setState({
                            //   sentSuccessful: 'Thanks for the enquiry. Chat soon!',
                            // })
                        },
                        (error) => {
                            console.log(values)
                            console.log(error)
                        },
                    )
                    actions.setSubmitting(false)
                    actions.resetForm()
                }, 400)
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
                            borderBottomColor: formik.errors.name ? 'yellow' : `${buttonBackground}` || 'white',
                            color: `${buttonBackground}`,
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
                    <Label htmlFor='number'>Number</Label>
                    <Input
                        id='number'
                        name='number'
                        type='tel'
                        mb={3}
                        variant={formStyle}
                        sx={{
                            borderBottomColor: formik.errors.number ? 'yellow' : `${buttonBackground}` || 'white',
                            color: `${buttonBackground}`,
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
                            borderBottomColor: formik.errors.email ? 'yellow' : `${buttonBackground}` || 'white',
                            color: `${buttonBackground}`,
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
                            borderBottomColor: formik.errors.message ? 'yellow' : `${buttonBackground}` || 'white',
                            color: `${buttonBackground}`,
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
                </Box>
            )}
        </Formik>
    )
}

export default EnquiryForm
