import React from 'react'
import Helmet from 'react-helmet'

export default React.memo(
    ({
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
                          url: organization.url,
                          logo: organization.url + organization.logo,
                          name: organization.name,
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
            <Helmet>
                {/* Schema.org tags */}
                <script type='application/ld+json'>{JSON.stringify(schema)}</script>
            </Helmet>
        )
    },
)
