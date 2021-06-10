import { graphql } from 'gatsby'

export const fragments = graphql`
    fragment FeaturedMediaFragment on WpPost {
        featuredImage {
            node {
                altText
                main: localFile {
                    childImageSharp {
                        gatsbyImageData(quality: 90, placeholder: TRACED_SVG, layout: FULL_WIDTH, formats: [AUTO, WEBP])
                    }
                }
                og: localFile {
                    childImageSharp {
                        gatsbyImageData(width: 1200, quality: 70)
                    }
                }
                tile: localFile {
                    childImageSharp {
                        gatsbyImageData(width: 500, quality: 70, placeholder: TRACED_SVG, layout: CONSTRAINED)
                    }
                }
            }
        }
    }

    fragment ServiceMediaFragment on WpService {
        featuredImage {
            node {
                altText
                main: localFile {
                    childImageSharp {
                        gatsbyImageData(quality: 80, placeholder: TRACED_SVG, layout: FULL_WIDTH)
                    }
                }
                og: localFile {
                    childImageSharp {
                        gatsbyImageData(width: 1200, quality: 70)
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
                        gatsbyImageData(quality: 80, placeholder: TRACED_SVG, layout: FULL_WIDTH)
                    }
                }
                og: localFile {
                    childImageSharp {
                        gatsbyImageData(width: 1200, quality: 70)
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
                        gatsbyImageData(quality: 80, placeholder: TRACED_SVG, layout: FULL_WIDTH)
                    }
                }
                og: localFile {
                    childImageSharp {
                        gatsbyImageData(width: 1200, quality: 70)
                    }
                }
                tile: localFile {
                    childImageSharp {
                        gatsbyImageData(width: 500, quality: 70, placeholder: TRACED_SVG, layout: CONSTRAINED)
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
                        gatsbyImageData(quality: 80, placeholder: TRACED_SVG, layout: FULL_WIDTH)
                    }
                }
                og: localFile {
                    childImageSharp {
                        gatsbyImageData(width: 1200, quality: 70)
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
        __typename
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
        __typename
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
