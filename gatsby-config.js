require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
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
    },
    plugins: [
        'gatsby-plugin-preact',
        'gatsby-plugin-theme-ui',
        {
            resolve: 'gatsby-plugin-transition-link',
            options: {
                layout: require.resolve('./src/components/layout.js'),
            },
        },
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
                        // copyNodeSourcingQueryAndExit: 'WpBlockAttributesObject',
                        // writeQueriesToDisk: true,
                    },
                },
                schema: {
                    timeout: 60000,
                    // perPage: 20,
                    requestConcurrency: 5,
                    // previewRequestConcurrency: 2,
                },
                verbose: true,
                excludeFieldNames: ['blocksJSON'],
                develop: {
                    nodeUpdateInterval: 1000,
                },
                html: {
                    imageMaxWidth: 1200,
                    fallbackImageMaxWidth: 1000,
                },
                type: {
                    // suggestion from Tyler
                    // BlockEditorContentNode: { exclude: true }
                    MediaItem: {
                        // localFile: {
                        //     requestConcurrency: process.env.GATSBY_REQUEST_CONCURRENCY_IMAGES,
                        // },
                        createFileNodes: false,
                    },
                    Category: {
                        exclude: true,
                    },
                    BlockEditorPreview: {
                        exclude: true,
                    },
                    Comment: {
                        exclude: true,
                    },
                    ReusableBlock: {
                        exclude: true,
                    },
                    UserRole: {
                        exclude: true,
                    },
                    PostFormat: {
                        exclude: true,
                    },
                },
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
                    allWpPage (filter: {status: {eq: "publish"}}) {
                        edges {
                            node {
                                id
                                slug
                                modifiedGmt
                                featuredImage {
                                    node {
                                      localFile {
                                        publicURL
                                      }
                                    }
                                }
                            }
                        }
                    }
                    allWpPost (filter: {status: {eq: "publish"}}) {
                        edges {
                            node {
                                id
                                slug
                                modifiedGmt
                                featuredImage {
                                    node {
                                      localFile {
                                        publicURL
                                      }
                                    }
                                }
                            }
                        }
                    }
                    allWpService (filter: {status: {eq: "publish"}}) {
                        edges {
                            node {
                                id
                                slug
                                modifiedGmt
                                featuredImage {
                                    node {
                                      localFile {
                                        publicURL
                                      }
                                    }
                                }
                            }
                        }
                    }
                    allWpLander (filter: {status: {eq: "publish"}}) {
                        edges {
                            node {
                                id
                                slug
                                modifiedGmt
                                featuredImage {
                                    node {
                                      localFile {
                                        publicURL
                                      }
                                    }
                                }
                            }
                        }
                    }
                    allWpPortfolio (filter: {status: {eq: "publish"}}) {
                        edges {
                            node {
                                id
                                slug
                                modifiedGmt
                                featuredImage {
                                    node {
                                      localFile {
                                        publicURL
                                      }
                                    }
                                }
                            }
                        }
                    }
                }`,
                // output: '/sitemap.xml',
                resolveSiteUrl: () => siteUrl,
                // mapping: {
                // resolvePages: {
                //     allWpPage: {
                //         sitemap: 'pages',
                //         prefix: '/',
                //         // Custom Serializer
                //         serializer: (edges) => {
                //             return edges.map(({ node }) => {
                //                 const PageFeaturedImagePath =
                //                     node.featuredImage !== null
                //                         ? node.featuredImage.node.localFile.publicURL
                //                         : '/images/black-alsatian-dark-dog.png'
                //                 return {
                //                     node: {
                //                         id: node.id,
                //                         slug: node.slug,
                //                         updated_at: node.modifiedGmt,
                //                         feature_image: PageFeaturedImagePath,
                //                     },
                //                 }
                //             })
                //         },
                //     },
                //     allWpPost: {
                //         sitemap: 'blog',
                //         prefix: 'blog/',
                //         serializer: (edges) => {
                //             return edges.map(({ node }) => {
                //                 const PostFeaturedImagePath =
                //                     node.featuredImage !== null
                //                         ? node.featuredImage.node.localFile.publicURL
                //                         : '/images/black-alsatian-dark-dog.png'
                //                 return {
                //                     node: {
                //                         id: node.id,
                //                         slug: node.slug,
                //                         updated_at: node.modifiedGmt,
                //                         feature_image: PostFeaturedImagePath,
                //                     },
                //                 }
                //             })
                //         },
                //     },
                //     allWpService: {
                //         sitemap: 'services',
                //         prefix: 'services/',
                //         serializer: (edges) => {
                //             return edges.map(({ node }) => {
                //                 const ServiceFeaturedImagePath =
                //                     node.featuredImage !== null
                //                         ? node.featuredImage.node.localFile.publicURL
                //                         : '/images/black-alsatian-dark-dog.png'
                //                 return {
                //                     node: {
                //                         id: node.id,
                //                         slug: node.slug,
                //                         updated_at: node.modifiedGmt,
                //                         feature_image: ServiceFeaturedImagePath,
                //                     },
                //                 }
                //             })
                //         },
                //     },
                //     allWpLander: {
                //         sitemap: 'landers',
                //         prefix: 'x/',
                //         serializer: (edges) => {
                //             return edges.map(({ node }) => {
                //                 const LanderFeaturedImagePath =
                //                     node.featuredImage !== null
                //                         ? node.featuredImage.node.localFile.publicURL
                //                         : '/images/black-alsatian-dark-dog.png'
                //                 return {
                //                     node: {
                //                         id: node.id,
                //                         slug: node.slug,
                //                         updated_at: node.modifiedGmt,
                //                         feature_image: LanderFeaturedImagePath,
                //                     },
                //                 }
                //             })
                //         },
                //     },
                //     allWpPortfolio: {
                //         sitemap: 'portfolio',
                //         prefix: 'portfolio/',
                //         serializer: (edges) => {
                //             return edges.map(({ node }) => {
                //                 const ProjectFeaturedImagePath =
                //                     node.featuredImage !== null
                //                         ? node.featuredImage.node.localFile.publicURL
                //                         : '/images/black-alsatian-dark-dog.png'
                //                 return {
                //                     node: {
                //                         id: node.id,
                //                         slug: node.slug,
                //                         updated_at: node.modifiedGmt,
                //                         feature_image: ProjectFeaturedImagePath,
                //                     },
                //                 }
                //             })
                //         },
                //     },
                // },
                excludes: [
                    '/dev-404-page',
                    '/404',
                    '/404.html',
                    '/offline-plugin-app-shell-fallback',
                    '/the-web-design-company-with-a-difference',
                ],
                createLinkInHead: true,
                // addUncaughtPages: true,
            },
        },
        'gatsby-plugin-gatsby-cloud',
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: process.env.GATSBY_GTM_TRACKING_ID,
                includeInDevelopment: false,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                //
                // Defaults to null
                defaultDataLayer: { platform: 'gatsby' },

                // Specify optional GTM environment details.
                // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
                // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
                dataLayerName: 'dataLayer',

                // Name of the event that is triggered
                // on every Gatsby route change.
                //
                // Defaults to gatsby-route-change
                routeChangeEventName: 'route-change',
                // Defaults to false
                enableWebVitalsTracking: true,
            },
        },
        // {
        //     resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
        //     options: {
        //         devMode: true,
        //     },
        // },
    ],
}
