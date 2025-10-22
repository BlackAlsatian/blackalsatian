/* eslint-disable no-undef */
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const siteUrl = 'https://www.blackalsatian.co.za'
module.exports = {
    siteMetadata: {
        title: 'Black Alsatian',
        shortTitle: 'blackalsatian',
        description:
            'Innovative custom web development, up-to-the-minute web design and bespoke marketing solutions that look amazing and get amazing results.',
        siteUrl: 'https://www.blackalsatian.co.za',
        author: {
            name: 'Björn Potgieter',
            url: 'https://bjorn.africa',
            twitter: '@bjornalism',
        },
        organization: {
            name: 'Black Alsatian',
            alternateName: 'Artisan Web Design Company by Passionate Web Developers',
            url: 'https://www.blackalsatian.co.za',
            logo: '/images/blackalsatian-icon-112x112.png',
            pubLogo: '/images/blackalsatian-pub-logo.png',
            email: 'info@blackalsatian.com',
            telephone: '+27 87 821 7172',
        },
        lang: 'en',
        twitter: '@blackalsatian',
        fbAppId: process.env.GATSBY_FBAPP_ID,
        socialUrls: {
            twitter: 'https://twitter.com/blackalsatian',
            facebook: 'https://www.facebook.com/blackalsatian',
            instagram: 'https://instagram.com/theblackalsatian',
            linkedin: 'https://www.linkedin.com/company/blackalsatian',
        },
        image: '/images/black-alsatian-dark-dog.png',
        pubLogo: '/images/blackalsatian-pub-logo.png',
        pubIconLogo: '/images/blackalsatian-icon-logo.png',
        blog: {
            title: 'Blog',
            // eslint-disable-next-line quotes
            browserTitle: "A Web Design Company's Blog",
            intro: 'Latest trends in the world of web development & digital marketing',
        },
    },
    flags: {
        // prevents file downloads from being deleted during cache clearing events (other than gatsby clean which still deletes the entire cache)
        PRESERVE_FILE_DOWNLOAD_CACHE: true,
            // DEV_SSR: true,
    },
    plugins: [
        'gatsby-plugin-theme-ui',
        // {
        //     resolve: 'gatsby-plugin-transition-link',
        //     options: {
        //         layout: require.resolve('./src/components/layout.js'),
        //     },
        // },
        {
            resolve: 'gatsby-source-wordpress',
            options: {
                url: process.env.GATSBY_WPGRAPHQL_URL,
                debug: {
                    graphql: {
                        showQueryOnError: true,
                        showQueryVarsOnError: true,
                        copyQueryOnError: true,
                        panicOnError: true,
                    },
                },
                schema: {
                    timeout: 120000,
                    perPage: 20,
                    requestConcurrency: 5,
                    // previewRequestConcurrency: 5,
                },
                verbose: true,
                excludeFieldNames: ['comments', 'blocksJSON', 'previewBlocks', 'previewBlocksJSON'],
                develop: {
                    nodeUpdateInterval: 1000,
                    hardCacheMediaFiles: true,
                },
                html: {
                    imageMaxWidth: 1200,
                    fallbackImageMaxWidth: 1000,
                    // createStaticFiles: false,
                    // useGatsbyImage: false,
                },
                type: {
                    MediaItem: {
                        localFile: {
                            requestConcurrency: process.env.GATSBY_REQUEST_CONCURRENCY_IMAGES,
                        },
                        excludeFieldNames: [
                            'contentNodes',
                            'seo',
                            // 'ancestors',
                            // 'author',
                            'template',
                            // 'lastEditedBy',
                            // 'authorDatabaseId',
                            // 'authorId',
                            'contentTypeName',
                            // 'dateGmt',
                            // 'desiredSlug',
                            'enclosure',
                            'isContentNode',
                            'isTermNode',
                            // 'modified',
                            // 'modifiedGmt',
                            'parentDatabaseId',
                            'parentId',
                            // 'srcSet',
                            'parent',
                            'children',
                        ],
                    },
                },
                //     Category: {
                //         exclude: true,
                //     },
                //     BlockEditorPreview: {
                //         exclude: true,
                //     },
                //     Comment: {
                //         exclude: true,
                //     },
                //     CommentAuthor: {
                //         exclude: true,
                //     },
                //     ReusableBlock: {
                //         exclude: true,
                //     },
                //     reusableBlock: {
                //         exclude: true,
                //     },
                //     UserRole: {
                //         exclude: true,
                //     PostFormat: {
                //         exclude: true,
                //     },
                //     CoreArchivesBlock: { exclude: true },
                //     CoreAudioBlock: { exclude: true },
                //     CoreAvatarBlock: { exclude: true },
                //     CoreButtonBlockDeprecatedV1Attributes: { exclude: true },
                //     CoreButtonBlockDeprecatedV2Attributes: { exclude: true },
                //     CoreButtonBlockDeprecatedV3Attributes: { exclude: true },
                //     CoreButtonBlockDeprecatedV4Attributes: { exclude: true },
                //     CoreButtonBlockDeprecatedV5Attributes: { exclude: true },
                //     CoreButtonBlockDeprecatedV6Attributes: { exclude: true },
                //     CoreButtonBlockDeprecatedV7Attributes: { exclude: true },
                //     CoreButtonBlockDeprecatedV8Attributes: { exclude: true },
                //     CoreButtonBlockDeprecatedV9Attributes: { exclude: true },
                //     CoreButtonBlockDeprecatedV10Attributes: { exclude: true },
                //     CoreButtonBlockDeprecatedV11Attributes: { exclude: true },
                //     CoreButtonsBlockDeprecatedV1Attributes: { exclude: true },
                //     CoreButtonsBlockDeprecatedV2Attributes: { exclude: true },
                //     CoreCalendarBlock: { exclude: true },
                //     CoreCategoriesBlock: { exclude: true },
                //     CoreCommentsBlock: { exclude: true },
                //     CoreCommentAuthorNameBlock: { exclude: true },
                //     CoreCommentContentBlock: { exclude: true },
                //     CoreCommentDateBlock: { exclude: true },
                //     CoreCommentEditLinkBlock: { exclude: true },
                //     CoreCommentReplyLinkBlock: { exclude: true },
                //     CoreCommentTemplateBlock: { exclude: true },
                //     CoreCommentsTitleBlock: { exclude: true },
                //     CoreCommentsPaginationBlock: { exclude: true },
                //     CoreCommentsPaginationNextBlock: { exclude: true },
                //     CoreCommentsPaginationNumbersBlock: { exclude: true },
                //     CoreCommentsPaginationPreviousBlock: { exclude: true },
                //     CoreCodeBlock: { exclude: true },
                //     CoreColumnBlockDeprecatedV1Attributes: { exclude: true },
                //     CoreColumnsBlockDeprecatedV1Attributes: { exclude: true },
                //     CoreColumnsBlockDeprecatedV2Attributes: { exclude: true },
                //     CoreColumnsBlockDeprecatedV3Attributes: { exclude: true },
                //     CoreCoverBlockDeprecatedV1Attributes: { exclude: true },
                //     CoreCoverBlockDeprecatedV2Attributes: { exclude: true },
                //     CoreCoverBlockDeprecatedV3Attributes: { exclude: true },
                //     CoreCoverBlockDeprecatedV4Attributes: { exclude: true },
                //     CoreCoverBlockDeprecatedV5Attributes: { exclude: true },
                //     CoreCoverBlockDeprecatedV6Attributes: { exclude: true },
                //     CoreCoverBlockDeprecatedV7Attributes: { exclude: true },
                //     CoreCoverBlockDeprecatedV8Attributes: { exclude: true },
                //     CoreCoverBlockDeprecatedV9Attributes: { exclude: true },
                //     CoreCoverBlockDeprecatedV10Attributes: { exclude: true },
                //     CoreFileBlock: { exclude: true },
                //     CoreFreeformBlock: { exclude: true },
                //     CoreGalleryBlock: { exclude: true },
                //     CoreHeadingBlockDeprecatedV1Attributes: { exclude: true },
                //     CoreHeadingBlockDeprecatedV2Attributes: { exclude: true },
                //     CoreHeadingBlockDeprecatedV3Attributes: { exclude: true },
                //     CoreHeadingBlockDeprecatedV4Attributes: { exclude: true },
                //     CoreGroupBlockDeprecatedV1Attributes: { exclude: true },
                //     CoreGroupBlockDeprecatedV2Attributes: { exclude: true },
                //     CoreGroupBlockDeprecatedV3Attributes: { exclude: true },
                //     CoreGroupBlockDeprecatedV4Attributes: { exclude: true },
                //     CoreGroupBlockDeprecatedV5Attributes: { exclude: true },
                //     CoreImageBlockDeprecatedV1Attributes: { exclude: true },
                //     CoreImageBlockDeprecatedV2Attributes: { exclude: true },
                //     CoreImageBlockDeprecatedV3Attributes: { exclude: true },
                //     CoreImageBlockDeprecatedV4Attributes: { exclude: true },
                //     CoreImageBlockDeprecatedV5Attributes: { exclude: true },
                //     CoreLatestCommentsBlock: { exclude: true },
                //     CoreLatestPostsBlock: { exclude: true },
                //     CoreListBlockDeprecatedV1Attributes: { exclude: true },
                //     CoreListBlockDeprecatedV2Attributes: { exclude: true },
                //     CoreLoginoutBlock: { exclude: true },
                //     CoreMediaTextBlockDeprecatedV1Attributes: { exclude: true },
                //     CoreMediaTextBlockDeprecatedV2Attributes: { exclude: true },
                //     CoreMediaTextBlockDeprecatedV3Attributes: { exclude: true },
                //     CoreMediaTextBlockDeprecatedV4Attributes: { exclude: true },
                //     CoreMediaTextBlockDeprecatedV5Attributes: { exclude: true },
                //     CoreMissingBlock: { exclude: true },
                //     CoreMoreBlock: { exclude: true },
        //     CoreNavigationBlock: { exclude: true },
                //     CoreNavigationLinkBlock: { exclude: true },
                //     CoreNavigationSubmenuBlock: { exclude: true },
                //     CoreNextpageBlock: { exclude: true },
                //     CorePageListBlock: { exclude: true },
                //     CoreParagraphBlockDeprecatedV1Attributes: { exclude: true },
                //     CoreParagraphBlockDeprecatedV2Attributes: { exclude: true },
                //     CoreParagraphBlockDeprecatedV3Attributes: { exclude: true },
                //     CoreParagraphBlockDeprecatedV4Attributes: { exclude: true },
                //     CoreParagraphBlockDeprecatedV5Attributes: { exclude: true },
                //     CorePatternBlock: { exclude: true },
                //     CorePostAuthorBiographyBlock: { exclude: true },
                //     CorePostAuthorBlock: { exclude: true },
                //     CorePostCommentsFormBlock: { exclude: true },
                //     CorePostContentBlock: { exclude: true },
                //     CorePostDateBlock: { exclude: true },
                //     CorePostExcerptBlock: { exclude: true },
                //     CorePostFeaturedImageBlock: { exclude: true },
                //     CorePostNavigationLinkBlock: { exclude: true },
                //     CorePostTemplateBlock: { exclude: true },
                //     CorePostTermsBlock: { exclude: true },
                //     CorePostTitleBlock: { exclude: true },
                //     CorePreformattedBlock: { exclude: true },
                //     CorePullquoteBlockDeprecatedV1Attributes: { exclude: true },
                //     CorePullquoteBlockDeprecatedV2Attributes: { exclude: true },
                //     CorePullquoteBlockDeprecatedV3Attributes: { exclude: true },
                //     CorePullquoteBlockDeprecatedV4Attributes: { exclude: true },
                //     CorePullquoteBlockDeprecatedV5Attributes: { exclude: true },
                //     CorePullquoteBlockDeprecatedV6Attributes: { exclude: true },
                //     CoreQueryNoResultsBlock: { exclude: true },
                //     CoreReadMoreBlock: { exclude: true },
                //     CoreRssBlock: { exclude: true },
                //     CoreSearchBlock: { exclude: true },
                //     CoreSeparatorBlockDeprecatedV1Attributes: { exclude: true },
                //     CoreShortcodeBlock: { exclude: true },
                //     CoreSiteLogoBlock: { exclude: true },
                //     CoreSiteTitleBlock: { exclude: true },
                //     CoreSiteTaglineBlock: { exclude: true },
                //     CoreSocialLinksBlock: { exclude: true },
                //     CoreSocialLinkBlock: { exclude: true },
                //     CoreSubheadBlock: { exclude: true },
                //     CoreTableBlock: { exclude: true },
                //     CoreTagCloudBlock: { exclude: true },
                //     CoreTermDescriptionBlock: { exclude: true },
                //     CoreTemplatePartBlock: { exclude: true },
                //     CoreQueryPaginationBlock: { exclude: true },
                //     CoreQueryPaginationNumbersBlock: { exclude: true },
                //     CoreQueryPaginationPreviousBlock: { exclude: true },
                //     CoreQueryPaginationNextBlock: { exclude: true },
                //     CoreHomeLinkBlock: { exclude: true },
                //     CoreQueryBlock: { exclude: true },
                //     CoreQueryTitleBlock: { exclude: true },
                //     CoreQuoteBlockDeprecatedV1Attributes: { exclude: true },
                //     CoreQuoteBlockDeprecatedV2Attributes: { exclude: true },
                //     CoreQuoteBlockDeprecatedV3Attributes: { exclude: true },
                //     CoreQuoteBlockDeprecatedV4Attributes: { exclude: true },
                //     CoreSpacerBlockDeprecatedV1Attributes: { exclude: true },
                //     CoreTextColumnsBlock: { exclude: true },
                //     CoreVerseBlockDeprecatedV1Attributes: { exclude: true },
                //     CoreVerseBlockDeprecatedV2Attributes: { exclude: true },
                //     CoreVideoBlockDeprecatedV1Attributes: { exclude: true },

                //     CoreEmbedBlock: { excludeFieldNames: ['attributes'] },
                //     CoreHtmlBlock: { excludeFieldNames: ['attributes'] },
                //     // CoreColumnsBlock: { excludeFieldNames: ['attributes'] },
                //     YoastFaqBlock: { excludeFieldNames: ['attributes'] },
                //     YoastHowToBlock: { excludeFieldNames: ['attributes'] },
                // },
            },
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Black Alsatian',
                short_name: 'Black Alsatian',
                description: 'Handcrafted web applications and bespoke digital marketing solutions',
                start_url: '/',
                background_color: '#111827',
                theme_color: '#111827',
                display: 'standalone',
                icon: 'src/assets/images/blackalsatian-icon.png',
                icons: [
                    {
                        src: '/favicon/icon-16x16.png',
                        sizes: '16x16',
                        type: 'image/png',
                    },
                    {
                        src: '/favicon/icon-32x32.png',
                        sizes: '32x32',
                        type: 'image/png',
                    },
                    {
                        src: '/favicon/icon-48x48.png',
                        sizes: '48x48',
                        type: 'image/png',
                    },
                    {
                        src: '/favicon/icon-64x64.png',
                        sizes: '64x64',
                        type: 'image/png',
                    },
                    {
                        src: '/favicon/icon-72x72.png',
                        sizes: '72x72',
                        type: 'image/png',
                    },
                    {
                        src: '/favicon/icon-96x96.png',
                        sizes: '96x96',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                    {
                        src: '/favicon/icon-144x144.png',
                        sizes: '144x144',
                        type: 'image/png',
                    },
                    {
                        src: '/favicon/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                    {
                        src: '/favicon/icon-256x256.png',
                        sizes: '256x256',
                        type: 'image/png',
                    },
                    {
                        src: '/favicon/icon-384x384.png',
                        sizes: '384x384',
                        type: 'image/png',
                    },
                    {
                        src: '/favicon/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
                cache_busting_mode: 'none',
            },
        },
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                query: `
                {
                    allSitePage {
                        nodes {
                            path
                        }
                    }
                    allWpContentNode(filter: {nodeType: {in: [ "Page", "Service", "Lander", "Post", "Portfolio" ]}}) {
                        nodes {
                            ... on WpPost {
                                uri
                                modifiedGmt
                            }
                            ... on WpPage {
                                uri
                                modifiedGmt
                            }
                            ... on WpService {
                                uri
                                modifiedGmt
                            }
                            ... on WpPortfolio {
                                uri
                                modifiedGmt
                            } 
                            ... on WpLander {
                                uri
                                modifiedGmt
                            }
                        }
                    }
                }`,
                resolveSiteUrl: () => siteUrl,
                resolvePages: ({ allSitePage: { nodes: allPages }, allWpContentNode: { nodes: allWpNodes } }) => {
                    const wpNodeMap = allWpNodes.reduce((acc, node) => {
                        const { uri } = node
                        acc[uri] = node

                        return acc
                    }, {})

                    return allPages.map((page) => {
                        return { ...page, ...wpNodeMap[page.path] }
                    })
                },
                serialize: ({ path, modifiedGmt }) => {
                    return {
                        url: path,
                        lastmod: modifiedGmt,
                    }
                },
                createLinkInHead: true,
            },
        },
    // 'gatsby-plugin-gatsby-cloud', // not needed on Netlify; removing reduces client JS
    // 'gatsby-plugin-offline', // service worker can add runtime JS; removing to improve TBT
        // GTM is lazy-loaded via gatsby-ssr.js to reduce main-thread blocking
        // {
        //     resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
        //     options: {
        //         devMode: true,
        //     },
        // },
    ],
}
