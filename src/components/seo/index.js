import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import SchemaOrg from './schemaOrg'

const SEO = ({ title, description, featuredImage, url, author, isBlogPost, datePublished }) => (
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
                        email
                        fbAppId
                    }
                }
            }
        `}
        render={({ site: { siteMetadata: seo } }) => {
            const metaDescription = description || seo.description
            const pageTitle = title || seo.title
            const defaultTitle = seo.title
            const image = `${seo.siteUrl}${featuredImage || seo.image}`
            const pageUrl = url && url !== `/` ? `${seo.siteUrl}${url}` : seo.siteUrl
            const publishedDate = isBlogPost ? datePublished : false

            return (
                <>
                    <Helmet titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null} defer={false}>
                        <html lang='en' />

                        {/* General tags */}
                        <title>{pageTitle}</title>
                        <meta name='description' content={metaDescription} />
                        <meta name='image' content={image} />
                        <link rel='canonical' href={pageUrl} />

                        {/* OpenGraph tags */}
                        <meta property='og:url' content={pageUrl} />
                        {isBlogPost ? <meta property='og:type' content='article' /> : null}

                        {/* <meta property="og:type" content="article" /> */}
                        <meta property='og:title' content={pageTitle} />
                        <meta property='og:description' content={metaDescription} />
                        <meta property='og:image' content={image} />
                        <meta property='fb:app_id' content={seo.fbAppID} />

                        {/* Twitter Card tags */}
                        <meta name='twitter:card' content='summary_large_image' />
                        <meta name='twitter:creator' content={seo.twitter} />
                        <meta name='twitter:title' content={pageTitle} />
                        <meta name='twitter:description' content={metaDescription} />
                        <meta name='twitter:image' content={image} />
                    </Helmet>
                    <SchemaOrg
                        isBlogPost={isBlogPost}
                        url={pageUrl}
                        title={pageTitle}
                        image={image}
                        description={metaDescription}
                        datePublished={publishedDate}
                        canonicalUrl={seo.siteUrl}
                        author={author}
                        organization={seo.organization}
                        defaultTitle={defaultTitle}
                    />
                </>
            )
        }}
    />
)

SEO.defaultProps = {
    isBlogPost: false,
    description: ``,
    url: ``,
    author: ``,
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
