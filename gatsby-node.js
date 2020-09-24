exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            order
            sections {
              image
              title
              subtitle
              text
              type
            }
          }
          fileAbsolutePath
        }
      }
    }
  `)

  const pages = results.data.allMarkdownRemark.nodes
    .filter(n => n.frontmatter.title)
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order)

  const pageSummaries = pages.map(n => ({
    slug: n.frontmatter.title.toLowerCase(),
    title: n.frontmatter.title
  }))

  // create the first page as the index page
  createPage({
    path: '/',
    component: require.resolve('./src/templates/page-with-sections.js'),
    context: {
      pages: pageSummaries,
      page: pages[0].frontmatter
    }
  })

  // then create all the named pages
  pages.forEach(page => {
    createPage({
      path: `/${page.frontmatter.title.toLowerCase()}`,
      component: require.resolve('./src/templates/page-with-sections.js'),
      context: {
        pages: pageSummaries,
        page: page.frontmatter
      }
    })
  })
}
