import { graphql } from 'gatsby'

export const fragments = graphql`
    fragment FeaturedMediaFragment on WpPost {
        featuredImage {
            node {
                altText
                main: gatsbyImage(
                    width: 1200
                    quality: 80
                    placeholder: DOMINANT_COLOR
                    layout: FULL_WIDTH
                    formats: [AUTO, WEBP]
                )
                og: gatsbyImage(width: 1200, quality: 70)
                tile: gatsbyImage(width: 500, quality: 70, placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
            }
        }
    }

    fragment ServiceMediaFragment on WpService {
        featuredImage {
            node {
                altText
                main: gatsbyImage(width: 1200, quality: 80, placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
                og: gatsbyImage(width: 1200, quality: 70)
            }
        }
    }

    fragment PageFeaturedMediaFragment on WpPage {
        featuredImage {
            node {
                altText
                main: gatsbyImage(
                    width: 1200
                    quality: 85
                    placeholder: BLURRED
                    layout: FULL_WIDTH
                    formats: [AUTO, WEBP]
                )
                og: gatsbyImage(width: 1200, quality: 70)
            }
        }
    }

    fragment PortfolioFeaturedMediaFragment on WpPortfolio {
        featuredImage {
            node {
                altText
                main: gatsbyImage(width: 1200, quality: 80, placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
                og: gatsbyImage(width: 1200, quality: 70)
                tile: gatsbyImage(width: 500, quality: 70, placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
            }
        }
    }

    fragment LanderFeaturedMediaFragment on WpLander {
        featuredImage {
            node {
                altText
                main: gatsbyImage(width: 1200, quality: 80, placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
                og: gatsbyImage(width: 1200, quality: 70)
            }
        }
    }

    fragment CoreCoverblock on WpCoreCoverBlock {
        __typename
        name
        attributes {
            ... on WpCoreCoverBlockAttributes {
                anchor
                overlayColor
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

    fragment BlackalsatianServicesBlock on WpBlackalsatianServicesBlock {
        __typename
        name
    }

    fragment BlackalsatianLatestPostsBlock on WpBlackalsatianLatestPostsBlock {
        __typename
        name
    }

    fragment BlackalsatianFeaturedProjectsBlock on WpBlackalsatianFeaturedProjectsBlock {
        __typename
        name
    }

    fragment BlackalsatianTestimonialsBlock on WpBlackalsatianTestimonialsBlock {
        __typename
        name
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
