exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title,
            order,
            sections {
              fullscreen
              image
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
    .map(n => (
    {
      slug: n.frontmatter.title.toLowerCase(),
      title: n.frontmatter.title
    }
  ))

  results.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/${node.frontmatter.title.toLowerCase()}/`,
      component: require.resolve('./src/templates/page-with-sections.js'),
      context: {
        pages,
        sections: node.frontmatter.sections
      }
    })
  })
}
