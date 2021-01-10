import { graphql } from 'gatsby'

export const fragments = graphql`
    fragment FeaturedMediaFragment on WpPost {
        featuredImage {
            node {
                altText
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 1400, quality: 90) {
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
                        fluid(maxWidth: 1200, quality: 90) {
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
                        fluid(maxWidth: 1400, quality: 90) {
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
                        fluid(maxWidth: 1200, quality: 90) {
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
`
