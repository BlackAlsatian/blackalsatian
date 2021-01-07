/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Label, Input, Box, Button, Heading } from 'theme-ui'
import { Formik } from 'formik'
import * as Yup from 'yup'

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
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
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
