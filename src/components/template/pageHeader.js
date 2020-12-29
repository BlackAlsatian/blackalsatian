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
                        fontSize: [7, 10],
                        letterSpacing: 'tighter',
                    }}
                >
                    {title}
                </Heading>
                {intro && <div sx={{ fontSize: [3, 4], my: 1 }}>{intro}</div>}
            </Container>
        </section>
    )
}

export default PageHeader
