/** @jsxImportSource theme-ui */
import { Flex, Box } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getSrc } from 'gatsby-plugin-image'
import parse from 'html-react-parser'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import PagesNav from '../components/pagesNav'

const PageTemplate = ({ data: { previous, next, service } }) => {
    const pageStyle = 'altyellow'
    const featuredImage = {
        fluid: service.featuredImage?.node?.main?.childImageSharp?.gatsbyImageData,
        alt: service.featuredImage?.node?.altText || ``,
    }
    const seoImgSrc = getSrc(service.featuredImage?.node?.og)
    return (
        <>
            <SEO
                title={service.title}
                description={service.seo.metaDesc}
                url={service.uri}
                featuredImage={seoImgSrc && seoImgSrc}
            />
            <PageHeader title={parse(service.title)} intro={parse(service.excerpt)} headerStyle={pageStyle} />
            <section sx={{ backgroundColor: 'white' }}>
                <Flex
                    sx={{
                        alignItems: [null, null, 'center'],
                        flexDirection: ['column', 'column', 'row'],
                        pt: [5, 5, 6],
                        px: 4,
                        pb: 4,
                    }}
                >
                    <Box sx={{ flex: 2, borderRight: [null, null, '0.01rem solid black'] }}>
                        {featuredImage?.fluid && <GatsbyImage image={featuredImage.fluid} alt={featuredImage.alt} />}
                    </Box>

                    <Box py={4} px={[0, 0, 6]} sx={{ flex: 3, variant: 'layout' }}>
                        {!!service.content && (
                            <Flex
                                sx={{
                                    flexDirection: 'column',
                                }}
                            >
                                {parse(service.content)}
                            </Flex>
                        )}
                    </Box>
                </Flex>
            </section>
            <section>
                <PagesNav
                    previousPagePath={previous && previous.uri}
                    nextPagePath={next && next.uri}
                    previousName={previous && parse(previous.title)}
                    nextName={next && parse(next.title)}
                    backgroundColor='yellow'
                    color='black'
                    swipeColor='#f5df4d'
                />
            </section>
        </>
    )
}

export default PageTemplate

export const serviceQuery = graphql`
    query ServiceById(
        # these variables are passed in via createPage.pageContext in gatsby-node.js
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        # selecting the current post by id
        service: wpService(id: { eq: $id }) {
            id
            excerpt
            content
            title
            seo {
                metaDesc
            }
            ...ServiceMediaFragment
        }

        # this gets us the previous post by id (if it exists)
        previous: wpService(id: { eq: $previousPostId }) {
            uri
            title
        }

        # this gets us the next post by id (if it exists)
        next: wpService(id: { eq: $nextPostId }) {
            uri
            title
        }
    }
`
