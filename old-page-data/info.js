import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/Navigation'

export default ({ data }) => {
  data = data.allMarkdownRemark.nodes[0]
  return (
    <div>
      <Navigation />
      {/* <pre>
        {JSON.stringify(data, null, 2)}
      </pre> */}
      <div style={{ paddingTop: 40 }} dangerouslySetInnerHTML={{ __html: data.html }} />
    </div>
  )
}

export const query = graphql`
  query InfoPageQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/info.md/"}}) {
      nodes {
        frontmatter {
          title
        }
        html
        fileAbsolutePath
      }
    }
  }
`
