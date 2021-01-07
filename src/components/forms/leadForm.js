/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Label, Input, Box, Button } from 'theme-ui'
import { Formik } from 'formik'
import * as Yup from 'yup'

const LeadFormSchema = Yup.object({
    leadname: Yup.string()
        .min(3, "That's quite a short name. At least 3 characters are required")
        .max(50, 'Wow, now that is quite a long name! This field only takes 50 characters')
        .required('Oops! You missed this field.'),
    email: Yup.string()
        .email("Hmm, there's something strange about this email address.")
        .max(80, "Wow, now that's a long email address! This field only accepts 80 characters.")
        .required('Oops! You missed this field.'),
})

const LeadForm = ({ buttonBackground, btnColor, formStyle, buttonName }) => {
    return (
        <Formik
            initialValues={{
                leadname: '',
                email: '',
            }}
            validationSchema={LeadFormSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)
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
                            borderBottomColor: formik.errors.leadname ? 'yellow' : 'white',
                            // color: `${buttonBackground}`,
                            '&:focus': { color: 'black' },
                        }}
                        {...formik.getFieldProps('leadname')}
                    />
                    {formik.touched.leadname && formik.errors.leadname ? (
                        <div
                            sx={{
                                color: 'yellow',
                                fontSize: '0.75rem',
                                fontWeight: 200,
                                pb: 3,
                            }}
                        >
                            {formik.errors.leadname}
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
                            // color: `${buttonBackground}`,
                            '&:focus': { color: 'black' },
                        }}
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div
                            sx={{
                                color: 'yellow',
                                fontSize: '0.75rem',
                                fontWeight: 200,
                                pb: 3,
                            }}
                        >
                            {formik.errors.email}
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

export default LeadForm
