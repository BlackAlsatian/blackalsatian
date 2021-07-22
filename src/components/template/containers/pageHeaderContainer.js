/** @jsxImportSource theme-ui */
import { Container } from 'theme-ui'

const PageHeaderContainer = ({ children }) => {
    return (
        <Container
            px={4}
            pb={[6, 8]}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'absolute',
                minHeight: '100vh',
            }}
            lang='en'
        >
            {children}
        </Container>
    )
}

export default PageHeaderContainer
