/** @jsxImportSource theme-ui */
import { Container, Heading } from 'theme-ui'

const PageHeader = ({ title, intro, headerStyle }) => {
    return (
        <section
            sx={{
                py: 0,
                pt: ['35vh', '35vh', '40vh'],
                variant: 'sections.' + headerStyle + '.pageheader',
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
