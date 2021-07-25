/** @jsxImportSource theme-ui */
import { Heading } from 'theme-ui'

const LeftColumnHeading = ({ heading, headerSize }) => {
    return (
        <Heading
            as={headerSize || 'h2'}
            sx={{
                fontSize: 5,
                fontWeight: ['black', 'black', 'thin', 'thin'],
                lineHeight: 'none',
                mb: 4,
                letterSpacing: 'tighter',
            }}
        >
            {heading}
        </Heading>
    )
}

export default LeftColumnHeading
