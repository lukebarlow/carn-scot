// exports.createPages = async ({ actions: { createPage }, graphql }) => {
//   const results = await graphql(`
//     {
//       allMarkdownRemark {
//         nodes {
//           html
//           id
//         }
//       }
//     }
//   `)
//   results.data.allProductsJson.edges.forEach(edge => {
//     const page = edge.node
//     createPage({
//       path: `/gql/${product.slug}/`,
//       component: require.resolve("./src/templates/product-graphql.js"),
//       context: {
//         slug: product.slug,
//       },
//     })
//   })
// }


// query MyQuery 