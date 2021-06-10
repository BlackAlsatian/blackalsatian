/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui'

const RightArrow = ({ color, width, height }) => {
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
            <path d='M8.46501 20.485L16.95 12L8.46501 3.515L7.05001 4.929L14.122 12L7.05001 19.071L8.46501 20.485Z'></path>
        </Box>
    )
}
export default RightArrow
