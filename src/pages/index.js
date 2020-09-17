// import React from 'react'

import Default, { query } from './gallery'

export default Default
export { query }

// import { graphql } from 'gatsby'

// import Navigation from '../components/Navigation'
// export default ({ data }) => {
//   data = data.allMarkdownRemark.nodes[0]
//   return (
//     <div>
//       <Navigation />
//       <div style={{paddingTop: 40}} dangerouslySetInnerHTML={{__html: data.html}} />
//     </div>
//   )
// }

// export const query = graphql`
//   query IndexPageQuery {
//     allMarkdownRemark(
//       filter: {
//         fileAbsolutePath: {regex: "/info.md/"  }}
//     ) {
//       nodes {
//         frontmatter {
//           title
//         },
//         html
//       }
//     }
//   }
// `