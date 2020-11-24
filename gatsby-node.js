const path = require(`path`)
const chunk = require(`lodash/chunk`)

// Simple debugging tool
// dd() will prettily dump to the terminal and kill the process
// const { dd } = require(`dumper.js`)

/**
 * exports.createPages, built-in Gatsby Node API to create pages 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async gatsbyUtilities => {
  // Query our posts from the GraphQL server
  const posts = await getPosts(gatsbyUtilities)

  // If there are no posts in WordPress, don't do anything
  if (!posts.length) {
    return
  }

  // If there are posts, create pages for them
  await createIndividualBlogPostPages({ posts, gatsbyUtilities })

  // And a paginated archive
  await createBlogPostArchive({ posts, gatsbyUtilities })
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
 * This function queries Gatsby's GraphQL server or All WordPress blog posts. If error it throws an error
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
