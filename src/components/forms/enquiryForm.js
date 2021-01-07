/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Label, Input, Textarea, Box, Button } from 'theme-ui'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { phoneRegExp } from '../helpers'

const EnquiryFormSchema = Yup.object({
    leadname: Yup.string()
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
    comment: Yup.string().min(40, 'Was that all? At least 40 characters are required.').required('How may we assist?'),
})

const EnquiryForm = ({ buttonBackground, btnColor, formStyle, buttonName }) => {
    return (
        <Formik
            initialValues={{
                leadname: '',
                number: '',
                email: '',
                comment: '',
            }}
            validationSchema={EnquiryFormSchema}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                    actions.resetForm()
                }, 400)
            }}
        >
            {(formik) => (
                <Box as='form' onSubmit={formik.handleSubmit}>
                    <Label htmlFor='leadname'>Name</Label>
                    <Input
                        id='leadname'
                        name='leadname'
                        type='text'
                        mb={3}
                        variant={formStyle}
                        sx={{
                            borderBottomColor: formik.errors.leadname ? 'yellow' : `${buttonBackground}` || 'white',
                            color: `${buttonBackground}`,
                            '&:focus': { color: 'black' },
                        }}
                        {...formik.getFieldProps('leadname')}
                    />
                    {formik.touched.leadname && formik.errors.leadname ? (
                        <div
                            sx={{
                                color: 'yellow',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                pb: 3,
                            }}
                        >
                            {formik.errors.leadname}
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
                    <Label htmlFor='comment'>Comment</Label>
                    <Textarea
                        id='comment'
                        name='comment'
                        rows='4'
                        mb={3}
                        variant={formStyle}
                        sx={{
                            borderBottomColor: formik.errors.comment ? 'yellow' : `${buttonBackground}` || 'white',
                            color: `${buttonBackground}`,
                            '&:focus': { color: 'black' },
                        }}
                        {...formik.getFieldProps('comment')}
                    />
                    {formik.touched.comment && formik.errors.comment ? (
                        <div
                            sx={{
                                color: 'yellow',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                pb: 3,
                            }}
                        >
                            {formik.errors.comment}
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
