/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui'

const UpArrow = ({ color, width, height }) => {
    return (
        <Box
            as='svg'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 24 24'
            sx={{
                fill: `${color}`,
            }}
        >
            <path d='M20.485 15.535L12 7.05L3.51499 15.535L4.92899 16.95L12 9.878L19.071 16.95L20.485 15.535Z'></path>
        </Box>
    )
}
export default UpArrow
