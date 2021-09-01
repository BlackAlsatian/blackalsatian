/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui'

const LeftColumnWrapper = ({ children, rightBorderColor, page }) => {
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
                borderRight: [0, 0, '1px solid'],
                borderColor: rightBorderColor ? rightBorderColor : 'black',
            }}
        >
            {children}
        </Box>
    )
}

export default LeftColumnWrapper
