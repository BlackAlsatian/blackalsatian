require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Black Alsatian Web Artisans`,
        description: `Hand crafted web applications and bespoke digital marketing solutions`,
        author: `Björn Potgieter`,
        siteUrl: `https://www.blackalsatian.co.za`,
        social: [
            {
                name: `Twitter`,
                url: `https://twitter.com/blackalsatian`,
            },
            {
                name: `Facebook`,
                url: `https://www.facebook.com/blackalsatian`,
            },
            {
                name: `Instagram`,
                url: `https://instagram.com/theblackalsatian`,
            },
            {
                name: `LinkedIn`,
                url: `https://www.linkedin.com/company/blackalsatian`,
            },
        ],
        pages: [
            {
                id: 1,
                name: `About`,
                url: '/about/',
                slug: 'about',
                subheading: `Crafting websites for the love of building websites.`,
                subtitle: `Web Artisans`,
                intro: `Not just another web design agency. Black Alsatian is your new best friend on the web.`,
            },
            {
                id: 2,
                name: `Services`,
                url: '/services/',
                slug: 'services',
                subheading: `This is services subheading`,
                subtitle: `Web Artisans subtitle`,
                intro: `Services of not just another web design agency. Black Alsatian is your new best friend on the web.`,
            },
            {
                id: 3,
                name: `Portfolio`,
                url: '/portfolio/',
                slug: 'portfolio',
                subheading: `Portfolio of crafting websites for the love of building websites.`,
                subtitle: `Portfolio Web Artisans`,
                intro: `Portfolio of not just another web design agency. Black Alsatian is your new best friend on the web.`,
            },
            {
                id: 4,
                name: `Blog`,
                url: '/blog/',
                slug: 'blog',
                subheading: `Sub heading of the blog thing`,
                subtitle: `Blog sub title`,
                intro: `This is the intro of the blog area.`,
            },

            {
                id: 5,
                name: `Contact`,
                url: '/contact/',
                slug: 'contact',
                subheading: `Contact Black Alsatian blah blah..`,
                subtitle: `Contact Web Artisans`,
                intro: `Contact Black Alsatian is your new best friend on the web.`,
            },
        ],
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
                name: `Black Alsatian Web Artisans`,
                short_name: `Black Alsatian`,
                start_url: `/`,
                background_color: `#111827`,
                theme_color: `#f5df4d`,
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
