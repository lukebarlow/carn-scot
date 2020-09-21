import Default from './gallery'

export default Default

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/gallery.md/"}}) {
      nodes {
        frontmatter {
          title
          sections {
            image
            text
            type
          }
        }
      }
    }
  }
`
