/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui'

const Fax = ({ color, width, height }) => {
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
            <path d='M9 20L4 16L9 12V15H22V17H9V20ZM15 12V9H2V7H15V4L20 8L15 12Z'></path>
        </Box>
    )
}
export default Fax
