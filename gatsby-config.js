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
    },
    plugins: [
        // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
        `gatsby-plugin-react-helmet`,
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
                // schema: {
                //   perPage: 1,
                // },
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
        /**
         * The following two plugins are required if you want to use Gatsby image
         * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
         * if you're curious about it.
         */
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,

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
            },
        },

        /**
         * this (optional) plugin enables Progressive Web App + Offline functionality
         * To learn more, visit: https://gatsby.dev/offline
         */
        // `gatsby-plugin-offline`,
    ],
}
