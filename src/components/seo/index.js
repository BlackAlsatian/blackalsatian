import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import SchemaOrg from './schemaOrg'

const SEO = ({
    title,
    description,
    featuredImage,
    url,
    author,
    isBlogPost,
    datePublished,
    dateModified,
    isFrontPage,
}) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        siteUrl
                        image
                        author {
                            name
                            twitter
                            url
                        }
                        organization {
                            name
                            url
                            logo
                            email
                            telephone
                            pubLogo
                        }
                        twitter
                        socialUrls {
                            facebook
                            instagram
                            linkedin
                            twitter
                        }
                        shortTitle
                        pubLogo
                        pubIconLogo
                        lang
                        fbAppId
                    }
                }
            }
        `}
        render={({ site: { siteMetadata: seo } }) => {
            const metaDescription = isFrontPage ? seo.description : description || seo.description
            const pageTitle = title || seo.title
            const defaultTitle = seo.title
            const image = isFrontPage ? `${seo.siteUrl}${seo.image}` : `${seo.siteUrl}${featuredImage || seo.image}`
            const canonicalUrl = url ? `${seo.siteUrl}${url}` : seo.siteUrl
            // const publishedDate = isBlogPost ? datePublished : false
            const publishedDate = datePublished
            const modifiedDate = dateModified

            return (
                <>
                    <Helmet titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null} defer={false}>
                        <html lang='en' />

                        {/* General tags */}
                        <title>{pageTitle}</title>
                        <meta name='description' content={metaDescription} />
                        <meta name='image' content={image} />
                        <link rel='canonical' href={canonicalUrl} />
                        <meta property='article:published_time' content={publishedDate} />
                        <meta property='article:modified_time' content={modifiedDate} />

                        {/* OpenGraph tags */}
                        <meta property='og:url' content={canonicalUrl} />
                        <meta property='og:type' content={isBlogPost ? 'article' : 'website'} />

                        {/* <meta property="og:type" content="article" /> */}
                        <meta property='og:title' content={pageTitle} />
                        <meta property='og:description' content={metaDescription} />
                        <meta property='og:image' content={image} />
                        <meta property='fb:app_id' content={process.env.GATSBY_FBAPP_ID} />

                        {/* Twitter Card tags */}
                        <meta name='twitter:card' content='summary_large_image' />
                        <meta name='twitter:creator' content={seo.twitter} />
                        <meta name='twitter:title' content={pageTitle} />
                        <meta name='twitter:description' content={metaDescription} />
                        <meta name='twitter:image' content={image} />
                    </Helmet>
                    <SchemaOrg
                        isBlogPost={isBlogPost}
                        title={pageTitle}
                        image={image}
                        description={metaDescription}
                        datePublished={publishedDate}
                        dateModified={modifiedDate}
                        canonicalUrl={canonicalUrl}
                        author={author}
                        organization={seo.organization}
                        socialUrls={seo.socialUrls}
                        defaultTitle={defaultTitle}
                    />
                </>
            )
        }}
    />
)

SEO.defaultProps = {
    isBlogPost: false,
    description: '',
    url: '',
    author: '',
    featuredImage: null,
    datePublished: null,
}

SEO.propTypes = {
    isBlogPost: PropTypes.bool,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string,
    author: PropTypes.string,
    featuredImage: PropTypes.string,
    datePublished: PropTypes.string,
}

export default SEO
