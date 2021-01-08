/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'

function PageHeader({ title, intro, backgroundColor, color }) {
    return (
        <section
            sx={{
                display: 'flex',
                alignItems: 'center',
                color: `${color}`,
                backgroundColor: `${backgroundColor}`,
                minHeight: '100vh',
                pt: '25vh',
            }}
        >
            <Container p={4}>
                <Heading
                    as='h1'
                    sx={{
                        fontSize: [6, 7, 7, 10],
                        letterSpacing: 'tighter',
                        textShadow: '0 0 4rem rgba(0, 0, 0, 0.1)',
                    }}
                >
                    {title}
                </Heading>
                {intro && (
                    <div sx={{ fontSize: [3, 4], my: 1, textShadow: '0 0 3rem rgba(0, 0, 0, 0.3)' }}>{intro}</div>
                )}
            </Container>
        </section>
    )
}

export default PageHeader
