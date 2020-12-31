/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Label, Input, Textarea, Box, Button } from 'theme-ui'

function EnquiryForm({
    buttonBackground,
    btnColor,
    formStyle,
    buttonName,
    // borderColor,
}) {
    return (
        <Box as='form' onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor='name'>Name</Label>
            <Input
                type='text'
                name='name'
                mb={3}
                variant={formStyle}
                sx={{ borderBottomColor: `${buttonBackground}` || 'white' }}
            />
            <Label type='tel' htmlFor='number'>
                Number
            </Label>
            <Input
                name='number'
                mb={3}
                variant={formStyle}
                sx={{ borderBottomColor: `${buttonBackground}` || 'white' }}
            />
            <Label htmlFor='email'>Email</Label>
            <Input
                type='email'
                name='email'
                mb={3}
                variant={formStyle}
                sx={{ borderBottomColor: `${buttonBackground}` || 'white' }}
            />
            <Label htmlFor='comment'>Comment</Label>
            <Textarea
                name='comment'
                rows='4'
                mb={3}
                variant={formStyle}
                sx={{ borderBottomColor: `${buttonBackground}` || 'white' }}
            />
            <Button
                variant='simple'
                ml='auto'
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
    )
}

export default EnquiryForm
