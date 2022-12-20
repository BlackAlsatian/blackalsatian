import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'

const SchemaOrg = ({
    author,
    canonicalUrl,
    datePublished,
    dateModified,
    defaultTitle,
    description,
    image,
    isBlogPost,
    organization,
    socialUrls,
    title,
}) => {
    const baseSchema = [
        {
            '@context': 'http://schema.org',
            '@type': 'Organization',
            name: organization.name,
            description: description,
            image: image,
            logo: organization.url + organization.logo,
            url: organization.url,
            telephone: organization.telephone,
            alternateName: organization.alternateName,
            sameAs: [
                socialUrls.twitter,
                socialUrls.linkedin,
                socialUrls.facebook,
                socialUrls.instagram,
                'https://wa.me/27605036601',
                'https://www.blackalsatian.com',
            ],
            address: {
                '@type': 'PostalAddress',
                streetAddress: '8 Gardner Circle, South End',
                addressLocality: 'Gqeberha',
                postalCode: '6001',
                addressCountry: 'South Africa',
            },
        },
    ]

    const schema = isBlogPost
        ? [
              ...baseSchema,
              {
                  '@context': 'http://schema.org',
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                      {
                          '@type': 'ListItem',
                          position: 1,
                          item: {
                              '@id': canonicalUrl,
                              name: title,
                              image,
                          },
                      },
                  ],
              },
              {
                  '@context': 'http://schema.org',
                  '@type': 'BlogPosting',
                  url: canonicalUrl,
                  name: title,
                  alternateName: defaultTitle,
                  headline: title,
                  image: {
                      '@type': 'ImageObject',
                      url: image,
                  },
                  description,
                  author: {
                      '@type': 'Person',
                      name: author,
                  },
                  publisher: {
                      '@type': 'Organization',
                      name: organization.name,
                      url: organization.url,
                      logo: organization.url + organization.pubLogo,
                  },
                  mainEntityOfPage: {
                      '@type': 'Article',
                      '@id': canonicalUrl,
                  },
                  datePublished: datePublished,
                  dateModified: dateModified,
              },
          ]
        : baseSchema

    return (
        <>
            {/* Schema.org tags */}
            <script type='application/ld+json'>{JSON.stringify(schema)}</script>
        </>
    )
}

SchemaOrg.propTypes = {
    author: PropTypes.string,
    canonicalUrl: PropTypes.string,
    defaultTitle: PropTypes.string,
    image: PropTypes.string,
    isBlogPost: PropTypes.bool,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string,
    featuredImage: PropTypes.string,
    datePublished: PropTypes.string,
    dateModified: PropTypes.string,
    isFrontPage: PropTypes.bool,
    organization: PropTypes.object,
    socialUrls: PropTypes.object,
}

export default SchemaOrg
