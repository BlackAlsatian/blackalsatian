import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
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
    `)

    return data.site.siteMetadata
}
