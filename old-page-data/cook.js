import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/Navigation'
import Sections from '../components/Sections'

export default ({ data }) => {
  const sections = data.allMarkdownRemark.nodes[0].frontmatter.sections
  return (
    <div>
      <Navigation />
      <Sections sections={sections} />
    </div>
  )
}

export const query = graphql`
  query CookPageQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/cook.md/"}}) {
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