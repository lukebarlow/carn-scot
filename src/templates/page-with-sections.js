import React from 'react'
import Navigation from '../components/Navigation'
import Sections from '../components/Sections'

export default ({ pageContext }) => {
  const { pages, sections } = pageContext

  console.log('pages is', pages)

  return (
    <div>
      <Navigation pages={pages} />
      <Sections sections={sections} />
    </div>
  )
}