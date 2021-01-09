require('dotenv').config({
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
        twitter: '@blackalsatian',
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
            intro: `We've got ALL the info.`,
        },
    },
    plugins: [
        // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
        `gatsby-plugin-react-helmet`,
        // {
        //     resolve: `gatsby-source-graphql`,
        //     options: {
        //         // Arbitrary name for the remote schema Query type
        //         typeName: `WORDPRESS`,
        //         // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        //         fieldName: `wordpress`,
        //         // Url to query from
        //         url: `${process.env.GATSBY_API_URL}`,
        //         // refetch interval in seconds
        //         // refetchInterval: 600,
        //     },
        // },
        {
            resolve: `gatsby-source-wordpress-experimental`,
            options: {
                // the only required plugin option for WordPress is the GraphQL url.
                url: process.env.GATSBY_WPGRAPHQL_URL,
                // url: `${process.env.GATSBY_API_URL}`,
                // process.env.WPGRAPHQL_URL ||
                // `https://api.blackalsatian.co.za/graphql`,
                debug: {
                    graphql: {
                        showQueryOnError: true,
                        showQueryVarsOnError: true,
                        copyQueryOnError: true,
                        panicOnError: true,
                    },
                },
                schema: {
                    // perPage: 20,
                    requestConcurrency: 5,
                    // previewRequestConcurrency: 2,
                },
                verbose: true,
                // excludeFieldNames: ['blocksJSON'],
            },
        },

        /**
         * We need this plugin so that it adds the "File.publicURL" to our site
         * It will allow us to access static url's for assets like PDF's
         *
         * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
         */
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        // `gatsby-theme-wordpress-gutenberg`,
        `gatsby-plugin-theme-ui`,
        `gatsby-theme-style-guide`,
        {
            resolve: `gatsby-plugin-transition-link`,
            options: {
                layout: require.resolve(`./src/components/layout.js`),
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                exclude: [`/portfolio/*`],
            },
        },
        /**
         * The following two plugins are required if you want to use Gatsby image
         * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
         * if you're curious about it.
         */
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    process.env.GATSBY_GA_TRACKING_ID, // Google Analytics / GA
                    // "AW-CONVERSION_ID",  Google Ads / Adwords / AW
                    // "DC-FLOODIGHT_ID",  Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
            },
        },
        {
            // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Black Alsatian`,
                short_name: `blackalsatian`,
                start_url: `/`,
                background_color: `#111827`,
                theme_color: `#ffffff`,
                display: `minimal-ui`,
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
                    },
                ], // Add or remove icon sizes as desired
                cache_busting_mode: `none`,
            },
        },

        /**
         * this (optional) plugin enables Progressive Web App + Offline functionality
         * To learn more, visit: https://gatsby.dev/offline
         */
        // `gatsby-plugin-offline`,
    ],
}
