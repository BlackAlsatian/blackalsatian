const path = require(`path`)
const chunk = require(`lodash/chunk`)

// Simple debugging tool
// dd() will prettily dump to the terminal and kill the process
// const { dd } = require(`dumper.js`)

// exports.createSchemaCustomization = ({ actions, schema }) => {
//   const { createTypes } = actions
//   const typeDefs = [
//     schema.buildObjectType({
//       name: 'MarkdownRemark',
//       fields: {
//         frontmatter: 'Frontmatter!'
//       },
//       interfaces: ['Node'],
//       extensions: {
//         infer: true,
//       },
//     }),
//     schema.buildObjectType({
//       name: 'Frontmatter',
//       fields: {
//         title: {
//           type: 'String!',
//           resolve(parent) {
//             return parent.title || '(Untitled)'
//           }
//         },
//         author: {
//           type: 'AuthorJson'
//           extensions: {
//             link: {},
//           },
//         }
//         date: {
//           type: 'Date!'
//           extensions: {
//             dateformat: {},
//           },
//         },
//         published: 'Boolean!',
//         tags: '[String!]!',
//       }
//     }),
//     schema.buildObjectType({
//       name: 'AuthorJson',
//       fields: {
//         name: 'String!'
//         birthday: {
//           type: 'Date!'
//           extensions: {
//             dateformat: {
//               locale: 'ru',
//             },
//           },
//         },
//       },
//       interfaces: ['Node'],
//       extensions: {
//         infer: false,
//       },
//     }),
//   ]
//   createTypes(typeDefs)
// }

/**
 * exports.createPages, built-in Gatsby Node API to create pages 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async gatsbyUtilities => {
  // Query our posts from the GraphQL server
  const posts = await getPosts(gatsbyUtilities)
  const pages = await getPages(gatsbyUtilities)
  const services = await getServices(gatsbyUtilities)

  // If there are no posts in WordPress, don't do anything
  if (!posts.length && !pages.length) {
    return
  }

  // If there are posts, create pages for them
  await createIndividualBlogPostPages({ posts, gatsbyUtilities })

  // And a paginated archive
  await createBlogPostArchive({ posts, gatsbyUtilities })

  //Build the pages
  await createIndividualPages({ pages, gatsbyUtilities })

  // Now the service pages
  await createIndividualServices({ services, gatsbyUtilities })
}

// This function creates all the individual blog pages in this site
const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) =>
  Promise.all(
    posts.map(({ previous, post, next }) =>
      // createPage is an action passed to createPages
      gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        path: post.uri,
        // blog post template
        component: path.resolve(`./src/templates/post.js`),
        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we add post id here so blog post template knows which blog post
          // the current page is
          id: post.id,
          // We also use the next and previous id's to query them and add links!
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      }),
    ),
  )

// This function creates all the individual pages in this site
const createIndividualPages = async ({ pages, gatsbyUtilities }) =>
  Promise.all(
    pages.map(({ page }) =>
      gatsbyUtilities.actions.createPage({
        path: page.isFrontPage ? '/' : page.uri,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          id: page.id,
        },
      }),
    ),
  )

// This function creates all the individual service pages in this site
const createIndividualServices = async ({ services, gatsbyUtilities }) =>
  Promise.all(
    services.map(({ previous, service, next }) =>
      gatsbyUtilities.actions.createPage({
        path: service.uri,
        component: path.resolve(`./src/templates/service.js`),
        context: {
          id: service.id,
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      }),
    ),
  )

// This function creates the blog page
async function createBlogPostArchive({ posts, gatsbyUtilities }) {
  const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const { postsPerPage } = graphqlResult.data.wp.readingSettings

  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_posts, index) => {
      const pageNumber = index + 1

      const getPagePath = page => {
        if (page > 0 && page <= totalPages) {
          // blog page nav urls
          return page === 1 ? `/blog/` : `/blog/${page}/`
        }
        return null
      }

      // createPage is an action passed to createPages
      await gatsbyUtilities.actions.createPage({
        path: getPagePath(pageNumber),
        component: path.resolve(`./src/templates/blog.js`),
        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // the index of our loop is the offset of which posts we want to display
          // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset
          offset: index * postsPerPage,
          // how many posts to display too
          postsPerPage,
          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      })
    }),
  )
}

/**
 * This function queries Gatsby's GraphQL server or All WordPress blog posts. If it throws an error
 * We're passing in the utilities we got from createPages.
 */
async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(
        sort: { fields: [date], order: DESC }
        filter: { status: { eq: "publish" } }
      ) {
        edges {
          previous {
            id
          }
          # note: this is GraphQL alias. Renames "node" to "post" because this "node" is a post!
          post: node {
            id
            uri
          }
          next {
            id
          }
        }
      }
    }
  `)
  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors,
    )
    return
  }
  return graphqlResult.data.allWpPost.edges
}

async function getPages({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPages {
      allWpPage(filter: { status: { eq: "publish" }, uri: { ne: "/blog/" } }) {
        edges {
          page: node {
            id
            uri
            isFrontPage
          }
        }
      }
    }
  `)
  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your pages`,
      graphqlResult.errors,
    )
    return
  }
  return graphqlResult.data.allWpPage.edges
}

async function getServices({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpServices {
      allWpService(filter: { status: { eq: "publish" } }) {
        edges {
          previous {
            id
          }
          service: node {
            id
            uri
          }
          next {
            id
          }
        }
      }
    }
  `)
  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your pages`,
      graphqlResult.errors,
    )
    return
  }
  return graphqlResult.data.allWpService.edges
}
