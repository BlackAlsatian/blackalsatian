/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
import { graphql } from 'gatsby'
// import Image from 'gatsby-image'
import parse from 'html-react-parser'
import ComponentParser from '../components/componentParser'
import Layout from '../components/template/layout'
import SEO from '../components/seo'

const PageTemplate = ({ data: { page } }) => {
    const MAX_LENGTH = 51
    return (
        <Layout>
            <SEO title={page.title} description={page.excerpt} />
            {!page.isFrontPage &&
            // !page.title.includes('About') &&
            !page.title.includes('Services') &&
            !page.title.includes('Portfolio') ? (
                <div
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                    }}
                >
                    <section
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'black',
                            backgroundColor: 'yellow',
                            minHeight: '60vh',
                            pt: '25vh',
                        }}
                    >
                        <Container p={4}>
                            <Heading
                                as='h1'
                                sx={{
                                    fontSize: [7, 10],
                                }}
                            >
                                {parse(page.title)}
                            </Heading>
                            <div sx={{ fontSize: [3, 4], my: 1 }}>
                                {/* {parse(page.excerpt)} */}
                                {parse(page.content.substring(0, MAX_LENGTH))}
                                {/* {page.excerpt} */}
                            </div>
                        </Container>
                    </section>
                    <section>
                        <Container p={4}>
                            <div
                                sx={{
                                    width: ['full', 'full', '8/12'],
                                    mx: 'auto',
                                }}
                            >
                                {parse(page.content)}
                            </div>
                        </Container>
                    </section>
                </div>
            ) : (
                <ComponentParser
                    blocks={page.blocks}
                    featuredImage={page.featuredImage}
                />
            )}
        </Layout>
    )
}

export default PageTemplate

export const pageQuery = graphql`
    query PageById(
        # these variables are passed in via createPage.pageContext in gatsby-node.js
        $id: String!
    ) {
        # selecting the current post by id
        page: wpPage(id: { eq: $id }) {
            id
            title
            content
            isFrontPage
            ...PageFeaturedMediaFragment
            blocks {
                ...CoreCoverblock
                ...BlackalsatianContentBlock
            }
        }
    }
`
