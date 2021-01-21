/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import ProjectHeader from '../components/template/portfolio/projectHeader'
import ProjectContent from '../components/template/portfolio/projectContent'
import PagesNav from '../components/pagesNav'
import parse from 'html-react-parser'

const ProjectTemplate = ({ data: { previous, portfolio, next }, pageContext }) => {
    const pageStyle = pageContext.style
    return (
        <>
            <SEO
                title={portfolio.title}
                description={portfolio.seo.metaDesc}
                url={portfolio.uri}
                featuredImage={portfolio.featuredImage.node.og.childImageSharp.fluid.src}
            />
            <div
                sx={{
                    backgroundColor: 'black',
                }}
            >
                <ProjectHeader project={portfolio} />
                <ProjectContent project={portfolio} pageStyle={pageStyle} />
                <section sx={{ backgroundColor: 'black' }}>
                    <PagesNav
                        previousPagePath={previous && previous.uri}
                        nextPagePath={next && next.uri}
                        previousName={previous && parse(previous.title)}
                        nextName={next && parse(next.title)}
                        backgroundColor='black'
                        color='white'
                        swipeColor='#111827'
                    />
                </section>
            </div>
        </>
    )
}

export default ProjectTemplate

export const portfolioQuery = graphql`
    query PortfolioById(
        # these variables are passed in via createPage.pageContext in gatsby-node.js
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        # selecting the current post by id
        portfolio: wpPortfolio(id: { eq: $id }) {
            id
            title
            excerpt
            content
            seo {
                metaDesc
            }
            projectUrl
            projectYear
            tags {
                nodes {
                    id
                    name
                }
            }
            ...PortfolioFeaturedMediaFragment
        }

        # this gets us the previous post by id (if it exists)
        previous: wpPortfolio(id: { eq: $previousPostId }) {
            id
            uri
            title
        }

        # this gets us the next post by id (if it exists)
        next: wpPortfolio(id: { eq: $nextPostId }) {
            id
            uri
            title
        }
    }
`
