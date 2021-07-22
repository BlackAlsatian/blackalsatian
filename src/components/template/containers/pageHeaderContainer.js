/** @jsxImportSource theme-ui */
import { Container } from 'theme-ui'

const PageHeaderContainer = ({ children }) => {
    return (
        <Container
            px={4}
            pb={7}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'absolute',
                minHeight: '100vh',
            }}
        >
            {children}
        </Container>
    )
}

export default PageHeaderContainer
