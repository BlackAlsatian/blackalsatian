require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Black Alsatian`,
        shortTitle: `blackalsatian`,
        description: `Handcrafted web applications and bespoke digital marketing solutions`,
        siteUrl: `https://www.blackalsatian.co.za`,
        author: {
            name: `Björn Potgieter`,
            url: `https://bjorn.africa`,
            twitter: `@lifeofbjorn`,
        },
        organization: {
            name: `Black Alsatian`,
            url: `https://www.blackalsatian.co.za`,
            logo: `/images/blackals-icon-logo.png`,
        },
        lang: `en`,
        email: `info@blackalsatian.com`,
        twitter: `@blackalsatian`,
        fbAppId: process.env.GATSBY_FBAPP_ID,
        socialUrls: {
            twitter: `https://twitter.com/blackalsatian`,
            facebook: `https://www.facebook.com/blackalsatian`,
            instagram: `https://instagram.com/theblackalsatian`,
            linkedin: `https://www.linkedin.com/company/blackalsatian`,
        },
        image: `/images/blackalsatian.png`,
        pubLogo: `/images/blackalsatian-pub-logo.png`,
        pubIconLogo: `/images/blackals-icon-logo.png`,
        blog: {
            title: `Blog`,
            browserTitle: `A Web Company Blog`,
            intro: `Latest trends in the world of web development & digital marketing`,
        },
    },
    // flags: {
    // PRESERVE_FILE_DOWNLOAD_CACHE prevents file downloads from being deleted during cache clearing events (other than gatsby clean which still deletes the entire cache)
    // PRESERVE_FILE_DOWNLOAD_CACHE: true,

    // PRESERVE_WEBPACK_CACHE prevents the webpack cache from deleted with the same caveat for gatsby clean
    // PRESERVE_WEBPACK_CACHE: true,

    // Enable all experiments aimed at improving develop server start time
    // FAST_DEV: true,
    // (Umbrella Issue (​https://github.com/gatsbyjs/gatsby/discussions/28390​)) · Use React Fast Refresh instead of the legacy react-hot-loader for instantaneous feedback in your development server. Recommended for versions of React >= 17.0.
    // FAST_REFRESH: true,
    // (Umbrella Issue (​https://github.com/gatsbyjs/gatsby/discussions/28138​)) · SSR pages on full reloads during develop. Helps you detect SSR bugs and fix them without needing to do full builds.
    // DEV_SSR: true,
    // (Umbrella Issue (​https://github.com/gatsbyjs/gatsby/discussions/27620​)) · Only run queries when needed instead of running all queries upfront. Speeds starting the develop server.
    // QUERY_ON_DEMAND: true,
    // LAZY_IMAGES: true,
    //EXPERIMENTAL
    // (Umbrella Issue (​https://github.com/gatsbyjs/gatsby/discussions/27603​)) · Don`t process images during development until they`re requested from the browser. Speeds starting the develop server.
    // },
    plugins: [
        `gatsby-plugin-preact`,
        // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
        {
            resolve: `gatsby-plugin-preconnect`,
            options: {
                domains: [`https://www.googletagmanager.com`, `www.google-analytics.com`],
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    process.env.GATSBY_GA_TRACKING_ID, // Google Analytics / GA
                    // "AW-CONVERSION_ID",  Google Ads / Adwords / AW
                ],
                // pluginConfig: {
                //     // Puts tracking script in the head instead of the body
                //     head: false,
                // },
            },
        },
        // {
        //     resolve: `gatsby-plugin-loadable-components-ssr`,
        //     options: {
        //         // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
        //         // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
        //         useHydrate: true,
        //     },
        // },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-theme-ui`,
        // `gatsby-theme-style-guide`,
        {
            resolve: `gatsby-plugin-transition-link`,
            options: {
                layout: require.resolve(`./src/components/layout.js`),
            },
        },
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                // the only required plugin option for Wordpress
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
                    timeout: 60000,
                    // perPage: 20,
                    requestConcurrency: 3,
                    // previewRequestConcurrency: 2,
                },
                verbose: true,
                excludeFieldNames: [`blocksJSON`],
                develop: {
                    nodeUpdateInterval: 1000,
                },
                html: {
                    imageMaxWidth: 1200,
                    fallbackImageMaxWidth: 1000,
                },
                type: {
                    MediaItem: {
                        localFile: {
                            requestConcurrency: process.env.GATSBY_REQUEST_CONCURRENCY_IMAGES,
                        },
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
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Black Alsatian`,
                short_name: `Black Alsatian`,
                description: `Handcrafted web applications and bespoke digital marketing solutions`,
                start_url: `/`,
                background_color: `#111827`,
                theme_color: `#111827`,
                display: `standalone`,
                icon: `src/assets/images/blackalsatian-icon.png`,
                icons: [
                    {
                        src: `/favicon/icon-16x16.png`,
                        sizes: `16x16`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicon/icon-32x32.png`,
                        sizes: `32x32`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicon/icon-48x48.png`,
                        sizes: `48x48`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicon/icon-64x64.png`,
                        sizes: `64x64`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicon/icon-72x72.png`,
                        sizes: `72x72`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicon/icon-96x96.png`,
                        sizes: `96x96`,
                        type: `image/png`,
                        purpose: `any maskable`,
                    },
                    {
                        src: `/favicon/icon-144x144.png`,
                        sizes: `144x144`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicon/icon-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                        purpose: `any maskable`,
                    },
                    {
                        src: `/favicon/icon-256x256.png`,
                        sizes: `256x256`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicon/icon-384x384.png`,
                        sizes: `384x384`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicon/icon-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                        purpose: `any maskable`,
                    },
                ], // Add or remove icon sizes as desired
                cache_busting_mode: `none`,
            },
        },
        `gatsby-plugin-sitemap`,
        // {
        //     resolve: `gatsby-plugin-sitemap`,
        //     options: {
        //         exclude: [`/portfolio/*`],
        //     },
        // },
        // `gatsby-plugin-gatsby-cloud`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-remove-generator`,
    ],
}
