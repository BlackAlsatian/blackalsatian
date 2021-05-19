import { graphql } from 'gatsby'

export const fragments = graphql`
    fragment FeaturedMediaFragment on WpPost {
        featuredImage {
            node {
                altText
                main: localFile {
                    childImageSharp {
                        fluid(maxWidth: 1400, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
                og: localFile {
                    childImageSharp {
                        fluid(maxWidth: 1200, quality: 70) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                tile: localFile {
                    childImageSharp {
                        fluid(maxWidth: 620, quality: 70) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
                        fluid(maxWidth: 1200, quality: 80) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
                main: localFile {
                    childImageSharp {
                        fluid(maxWidth: 1400, quality: 80) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
                og: localFile {
                    childImageSharp {
                        fluid(maxWidth: 1200, quality: 70) {
                            ...GatsbyImageSharpFluid
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
                main: localFile {
                    childImageSharp {
                        fluid(maxWidth: 1400, quality: 80) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
                og: localFile {
                    childImageSharp {
                        fluid(maxWidth: 1200, quality: 70) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                tile: localFile {
                    childImageSharp {
                        fluid(maxWidth: 620, quality: 70) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
        }
    }
    fragment LanderFeaturedMediaFragment on WpLander {
        featuredImage {
            node {
                altText
                main: localFile {
                    childImageSharp {
                        fluid(maxWidth: 1400, quality: 80) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
                og: localFile {
                    childImageSharp {
                        fluid(maxWidth: 1200, quality: 70) {
                            ...GatsbyImageSharpFluid
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
