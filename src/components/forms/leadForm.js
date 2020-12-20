/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Label, Input, Textarea, Box, Button } from 'theme-ui'

function EnquiryForm() {
    return (
        <Box as='form' onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor='name'>Name</Label>
            <Input
                type='text'
                name='name'
                mb={3}
                variant='inputs.underline'
                sx={{ borderBottomColor: 'white' }}
            />
            <Label htmlFor='email'>Email</Label>
            <Input
                type='email'
                name='email'
                mb={3}
                variant='inputs.underline'
                sx={{ borderBottomColor: 'white' }}
            />
            <Button
                variant='simple'
                ml='auto'
                sx={{ backgroundColor: 'white', color: 'black' }}
            >
                Fetch!
            </Button>
        </Box>
    )
}

export default EnquiryForm
