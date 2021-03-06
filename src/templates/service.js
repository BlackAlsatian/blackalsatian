/** @jsxImportSource theme-ui */
import { graphql } from 'gatsby'
import { GatsbyImage, getSrc } from 'gatsby-plugin-image'
import parse from 'html-react-parser'
import { useContext, useLayoutEffect } from 'react'
import { Box, Flex } from 'theme-ui'
import { removeTags } from '../components/helpers'
import PagesNav from '../components/pagesNav'
import { PageStyleContext } from '../components/pageStyleProvider'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'

const PageTemplate = ({ data: { previous, next, service } }) => {
    const { setPageStyle } = useContext(PageStyleContext)

    const pageStyle = 'altyellow'
    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle])
    const featuredImage = {
        fluid: service?.featuredImage?.node?.main?.childImageSharp?.gatsbyImageData,
        alt: service?.featuredImage?.node?.altText || '',
    }
    const seoImgSrc = getSrc(service?.featuredImage?.node?.og)
    const serviceExcerpt = removeTags(service?.excerpt)
    return (
        <>
            <SEO
                title={service?.title}
                description={service?.seo?.metaDesc}
                url={service?.uri}
                featuredImage={seoImgSrc && seoImgSrc}
                datePublished={service?.dateGmt}
                dateModified={service?.modifiedGmt}
            />
            <PageHeader title={parse(service?.title)} intro={parse(serviceExcerpt)} headerStyle={pageStyle} />
            <Box as='section' sx={{ backgroundColor: 'white', variant: 'sections.noypadding' }}>
                <Flex
                    sx={{
                        alignItems: [null, null, 'center'],
                        flexDirection: ['column', 'column', 'row'],
                        pt: [5, 5, 6],
                        px: 4,
                        pb: 4,
                    }}
                >
                    <Box sx={{ flex: 2, flexShrink: 'none' }}>
                        {featuredImage?.fluid && (
                            <GatsbyImage image={featuredImage.fluid} alt={featuredImage.alt || service?.title} />
                        )}
                    </Box>

                    <Box
                        py={4}
                        px={[0, 0, 6]}
                        sx={{ flex: 3, borderLeft: [null, null, '0.01rem solid black'], variant: 'layout' }}
                    >
                        {!!service?.content && (
                            <Flex
                                sx={{
                                    flexDirection: 'column',
                                }}
                            >
                                {parse(service?.content)}
                            </Flex>
                        )}
                    </Box>
                </Flex>
            </Box>
            <section
                sx={{
                    variant: 'sections.noypadding',
                }}
            >
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
            dateGmt
            modifiedGmt
            seo {
                metaDesc
            }
            ...ServiceMediaFragment
            uri
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
