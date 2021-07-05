/** @jsxImportSource theme-ui */
import { Flex, Spinner } from 'theme-ui'

const PlaceholderLoader = () => {
    return (
        <Flex
            sx={{
                height: '100%',
                minHeight: '100vh',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'offwhite',
                opacity: '0.8',
            }}
        >
            <Spinner
                sx={{
                    color: 'black',
                    backgroundColor: 'transparent',
                }}
            />
        </Flex>
    )
}

export default PlaceholderLoader
