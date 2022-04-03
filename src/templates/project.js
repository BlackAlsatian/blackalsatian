/** @jsxImportSource theme-ui */
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import parse from 'html-react-parser'
import { useContext, useLayoutEffect } from 'react'
import PagesNav from '../components/pagesNav'
import { PageStyleContext } from '../components/pageStyleProvider'
import SEO from '../components/seo'
import ProjectContent from '../components/template/portfolio/projectContent'
import ProjectHeader from '../components/template/portfolio/projectHeader'

const ProjectTemplate = ({ data: { previous, portfolio, next } }) => {
    const { setPageStyle } = useContext(PageStyleContext)
    const pageStyle = 'black'
    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle])

    const seoImgSrc = getSrc(portfolio.featuredImage?.node?.og)
    return (
        <>
            <SEO
                title={portfolio.title}
                description={portfolio.seo.metaDesc}
                url={portfolio.uri}
                featuredImage={seoImgSrc && seoImgSrc}
                datePublished={portfolio.dateGmt}
                dateModified={portfolio.modifiedGmt}
            />
            <ProjectHeader project={portfolio} />

            <ProjectContent project={portfolio} />
            <section sx={{ variant: 'sections.noypadding' }}>
                <PagesNav
                    previousPagePath={previous && previous.uri}
                    nextPagePath={next && next.uri}
                    previousName={previous && parse(previous.title)}
                    nextName={next && parse(next.title)}
                    backgroundColor='white'
                    color='#111827'
                    swipeColor='#111827'
                />
            </section>
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
            dateGmt
            modifiedGmt
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
            uri
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
