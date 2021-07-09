/** @jsxImportSource theme-ui */
import { Box, Heading } from 'theme-ui'

const LeftColumn = ({ heading, title, page }) => {
    return (
        <Box
            px={[4, 4, 6]}
            py={[5, 5, null]}
            sx={{
                textAlign: ['left', 'left', 'right'],
                flex: [null, null, 1],
                width: ['100%', null],
                display: 'flex',
                flexDirection: 'column',
                alignItems: !page ? ['flex-start', 'flex-start', 'flex-end'] : null,
                justifyContent: page ? null : 'center',
                borderRight: [0, 0, `1px solid`],
            }}
        >
            {heading && (
                <Heading
                    // as={headerSize || 'h2'}
                    as={'h2'}
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
            )}
            {title && (
                <Heading
                    as='h3'
                    sx={{
                        textTransform: 'uppercase',
                        fontSize: 0,
                        mt: [0, 0, 0],
                        ml: ['auto', 'auto', null],
                    }}
                >
                    {title}
                </Heading>
            )}
        </Box>
    )
}
export default LeftColumn
