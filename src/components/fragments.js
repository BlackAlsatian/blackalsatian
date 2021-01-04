import { graphql } from 'gatsby'

export const fragments = graphql`
    fragment FeaturedMediaFragment on WpPost {
        featuredImage {
            node {
                altText
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 1600, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
    fragment ServiceMediaFragment on WpService {
        featuredImage {
            node {
                altText
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 1200, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
    fragment PageFeaturedMediaFragment on WpPage {
        featuredImage {
            node {
                altText
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 1600, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
    fragment PortfolioFeaturedMediaFragment on WpPortfolio {
        featuredImage {
            node {
                altText
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 1200, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
    fragment CoreCoverblock on WpCoreCoverBlock {
        __typename
        name
        attributes {
            ... on WpCoreCoverBlockAttributes {
                anchor
                className
                overlayColor
                backgroundType
            }
        }
        innerBlocks {
            name
            ... on WpBlackalsatianHeroBlock {
                name
                attributes {
                    heroTitle
                    heroIntro
                    heroFontColor
                }
            }
            ... on WpBlackalsatianCtaWithButtonBlock {
                name
                attributes {
                    anchor
                    buttonBackgroundColor
                    buttonName
                    buttonUrl
                    className
                    color
                    heading
                    title
                    option
                }
                innerBlocks {
                    copy: originalContent
                }
            }
        }
    }
    fragment BlackalsatianContentBlock on WpBlackalsatianContentBlock {
        name
        attributes {
            className
            contentHeading
            contentTitle
        }
        innerBlocks {
            copy: originalContent
        }
    }
    fragment BlackalsatianPageMetaBlock on WpBlackalsatianPageMetaBlock {
        name
        attributes {
            subheading
            subtitle
            intro
        }
    }
    fragment WpMenuItems on WpMenu {
        menuItems {
            nodes {
                id
                label
                url
            }
        }
    }

    # fragment AllBlocksFragment on WpBlock {
    #   name
    #   __typename
    # ... on WpBlackalsatianContentBlock {
    #   name
    #   attributes {
    #     className
    #     contentCopy
    #     contentHeading
    #     contentTitle
    #   }
    # }
    # ... on WpBlackalsatianCtaWithButtonBlock {
    #   name
    #   attributes {
    #     anchor
    #     buttonBackgroundColor
    #     buttonName
    #     buttonUrl
    #     className
    #     color
    #     heading
    #     title
    #   }
    # }
    # ... on WpBlackalsatianFeaturedProjectsBlock {
    #   name
    # }
    # ... on WpBlackalsatianHeroBlock {
    #   name
    #   attributes {
    #     className
    #     heroFontColor
    #     heroIntro
    #     heroTitle
    #   }
    # }
    # ... on WpBlackalsatianLatestPostsBlock {
    #   name
    # }
    # ... on WpBlackalsatianServicesBlock {
    #   name
    # }
    #### Cover block starts here
    # ... on WpCoreCoverBlock {
    #   name
    #   attributes {
    #     ... on WpCoreCoverBlockAttributes {
    #       id
    #       overlayColor
    #       className
    #       anchor
    #     }
    #   }
    #   innerBlocks {
    #     name
    #     ... on WpBlackalsatianHeroBlock {
    #       name
    #       attributes {
    #         heroTitle
    #         heroIntro
    #         heroFontColor
    #       }
    #     }
    #     ... on WpBlackalsatianCtaWithButtonBlock {
    #       name
    #       attributes {
    #         anchor
    #         buttonBackgroundColor
    #         buttonName
    #         buttonUrl
    #         className
    #         color
    #         heading
    #         title
    #       }
    #     }
    #   }
    # }
    # }
    # fragment CoverBlockFragment on TypeName {
    #   __typename
    #   name
    #   attributes {
    #     ... on WpCoreCoverBlockAttributes {
    #       anchor
    #       className
    #       overlayColor
    #       backgroundType
    #       # }
    #     }
    #   }
    # }
    # fragment ContentBlock on WpBlock {
    #   ... on WpBlackalsatianContentBlock {
    #     attributes {
    #       contentTitle
    #       contentHeading
    #       contentCopy
    #     }
    #   }
    # }
    # fragment HeroImage on File {
    #   childImageSharp {
    #     fluid(maxWidth: 1440) {
    #       ...GatsbyImageSharpFluid_withWebp_tracedSVG
    #       presentationWidth
    #     }
    #   }
    # }
    # fragment AvatarImage on File {
    #   childImageSharp {
    #     fixed(width: 80, height: 80) {
    #       ...GatsbyImageSharpFixed_withWebp_tracedSVG
    #     }
    #   }
    # }
    # fragment Thumbnail on File {
    #   childImageSharp {
    #     fluid(maxWidth: 1200) {
    #       ...GatsbyImageSharpFluid_withWebp_tracedSVG
    #       presentationWidth
    #     }
    #   }
    # }
    # fragment PostPreviewContent on WpPost {
    #   uri
    #   title
    #   databaseId
    #   excerpt
    #   date(formatString: "LL")
    #   featuredImage {
    #     node {
    #       remoteFile {
    #         ...Thumbnail
    #       }
    #     }
    #   }
    #   author {
    #     node {
    #       name
    #       firstName
    #       lastName
    #       uri
    #     }
    #   }
    #   categories {
    #     nodes {
    #       name
    #       slug
    #       uri
    #     }
    #   }
    # }
    # fragment PostContent on WpPost {
    #   title
    #   content
    #   date(formatString: "LL")
    #   excerpt
    #   featuredImage {
    #     node {
    #       remoteFile {
    #         ...HeroImage
    #       }
    #     }
    #   }
    #   author {
    #     node {
    #       name
    #       firstName
    #       lastName
    #       uri
    #       description
    #       avatar {
    #         url
    #         width
    #         height
    #         imageFile {
    #           ...AvatarImage
    #         }
    #       }
    #     }
    #   }
    #   categories {
    #     nodes {
    #       name
    #       slug
    #       uri
    #     }
    #   }
    # }
    # fragment PageContent on WpPage {
    #   title
    #   content
    #   databaseId
    #   featuredImage {
    #     node {
    #       remoteFile {
    #         ...HeroImage
    #       }
    #     }
    #   }
    # }
`
