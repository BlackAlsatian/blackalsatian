/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui'

const RightColumn = ({ children }) => {
    return (
        <Box
            px={[4, 4, 6]}
            sx={{
                flex: [null, null, 3],
                width: ['100%', null],
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            {children}
        </Box>
    )
}

export default RightColumn
