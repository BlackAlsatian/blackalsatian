/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import parse from 'html-react-parser'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import PagesNav from '../components/pagesNav'

const PageTemplate = ({ data: { previous, next, service } }) => {
    const featuredImage = {
        fluid: service.featuredImage?.node?.localFile?.childImageSharp?.fluid,
        alt: service.featuredImage?.node?.alt || ``,
    }
    return (
        <>
            <SEO title={service.title} description={service.excerpt} />
            <PageHeader
                title={parse(service.title)}
                intro={parse(service.excerpt)}
                backgroundColor='yellow'
                color='black'
            />
            <section>
                <Flex
                    sx={{
                        alignItems: [null, null, 'center'],
                        flexDirection: ['column', 'column', 'row'],
                        pt: 6,
                        px: 4,
                        pb: 4,
                    }}
                >
                    <Box p={4} sx={{ flex: 2, borderRight: [null, null, '0.01rem solid black'] }}>
                        {featuredImage?.fluid && <Image fluid={featuredImage.fluid} alt={featuredImage.alt} />}
                    </Box>

                    <Box p={4} sx={{ flex: 3 }}>
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
