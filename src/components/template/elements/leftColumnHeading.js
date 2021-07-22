/** @jsxImportSource theme-ui */
import { Heading } from 'theme-ui'

const LeftColumnHeading = ({ heading, headerSize }) => {
    return (
        <Heading
            as={headerSize || 'h2'}
            sx={{
                fontSize: [4, 3, 4, 5],
                fontWeight: ['bold', 'bold', 'thin', 'thin'],
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
