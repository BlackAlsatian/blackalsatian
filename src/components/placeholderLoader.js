/** @jsx jsx */
import { jsx, Flex, Spinner } from 'theme-ui'

const PlaceholderLoader = () => {
    return (
        <Flex
            sx={{
                height: '100%',
                minHeight: '100vh',
                width: '100%',
                alignItems: 'center',
                justifycontent: 'center',
                backgroundColor: 'offwhite',
            }}
        >
            <Spinner
                sx={{
                    color: 'black',
                    boxShadow: 'xl',
                }}
            />
        </Flex>
    )
}

export default PlaceholderLoader
