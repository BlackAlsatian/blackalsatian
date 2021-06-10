/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui'

const Home = ({ color, width, height }) => {
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
            <path d='M19 22H5C4.44772 22 4 21.5523 4 21V11.414C4 11.1488 4.10545 10.8945 4.293 10.707L11.293 3.70698C11.4806 3.51921 11.7351 3.4137 12.0005 3.4137C12.2659 3.4137 12.5204 3.51921 12.708 3.70698L19.708 10.707C19.8957 10.8943 20.0009 11.1488 20 11.414V21C20 21.5523 19.5523 22 19 22ZM10 15H14V20H18V11.828L12 5.82798L6 11.828V20H10V15Z'></path>
        </Box>
    )
}
export default Home
