/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'

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
            {/* <AniLink
                paintDrip
                duration={0.5}
                hex='#ebc8de'
                to='/'
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}
            > */}
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
            {/* </AniLink> */}
        </section>
    )
}

export default PageHeader
