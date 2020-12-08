/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
// import Image from 'gatsby-image'
import parse from 'html-react-parser'
import ComponentParser from '../components/componentParser'
// import Bio from '../components/bio'
import Layout from '../components/template/layout'
import SEO from '../components/seo'

const PageTemplate = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO title={page.title} description={page.excerpt} />

      {/* <article
        className='site-page'
        itemScope
        itemType='http://schema.org/Article'
      > */}
      {/* <header>
        <h1 itemProp='headline'>{parse(page.title)}</h1>
      </header> */}
      {!page.isFrontPage &&
      !page.title.includes('About') &&
      !page.title.includes('Services') ? (
        <section itemProp='articleBody'>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              variant: 'blog.page',
            }}
          >
            <h1 itemProp='headline'>{parse(page.title)}</h1>
            {parse(page.content)}
          </div>
        </section>
      ) : (
        <ComponentParser
          blocks={page.blocks}
          featuredImage={page.featuredImage}
        />
      )}

      {/* {page.blocks &&
        page.blocks.name === page.blocks.innerBlocks &&
        page.blocks.map(({ name }) => (
          // <div>{name && name === 'core/cover' && originalContent}</div>
          <div>{name}</div>
        ))}
      {!!page.content &&
        !page.isFrontPage &&
        !page.title.includes('about') &&
          <section itemProp='articleBody'>
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                variant: 'blog.page',
              }}
            >
              {parse(page.content)}
            </div>
          </section>,
        } */}

      <hr />

      {/* <footer> */}
      {/* <Bio /> */}
      {/* </footer> */}
      {/* </article> */}
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
