'use client'
/** @jsxImportSource theme-ui */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { graphql } from 'gatsby'
import { GatsbyImage, getSrc } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { useContext, useLayoutEffect } from 'react'
import { Box, Flex } from 'theme-ui'
import { removeTags } from '../components/helpers'
import Layout from '../components/layout'
import { PageStyleContext } from '../components/pageStyleProvider'
import PagesNav from '../components/pagesNav'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import safeParse from '../utils/safeParse'

const ServiceTemplate = ({ data: { previous, next, service } }) => {
    const { setPageStyle } = useContext(PageStyleContext)

    const pageStyle = 'altyellow'
    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle, setPageStyle])
    const featuredImage = {
        fluid: service?.featuredImage?.node?.main,
        alt: service?.featuredImage?.node?.altText || '',
    }

    const serviceExcerpt = removeTags(service?.excerpt)
    return (
        <Layout>
            <PageHeader title={safeParse(service?.title)} intro={safeParse(serviceExcerpt)} headerStyle={pageStyle} />
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
                                {safeParse(service?.content)}
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
                    previousName={previous && safeParse(previous.title)}
                    nextName={next && safeParse(next.title)}
                    backgroundColor='yellow'
                    color='black'
                    swipeColor='#f5df4d'
                />
            </section>
        </Layout>
    )
}

ServiceTemplate.propTypes = {
    data: PropTypes.object,
}

export default ServiceTemplate

export const Head = ({ data: { service } }) => {
    const seoImgSrc = getSrc(service?.featuredImage?.node?.main)
    return (
        <SEO
            title={service?.title}
            description={service?.seo?.metaDesc}
            url={service?.uri}
            featuredImage={seoImgSrc && seoImgSrc}
            datePublished={service?.dateGmt}
            dateModified={service?.modifiedGmt}
        />
    )
}
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
