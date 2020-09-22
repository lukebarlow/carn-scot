// links across the top on desktop, hamburger menu on mobile
import React from 'react'

const linkStyle = {
  color: 'white',
  paddingLeft: 30
}

export default ({ pages }) => {
  return (
    <div className='navigation-container'>
      {pages.map(({ slug, title }) => (
        <a key={slug} href={'./' + slug} style={linkStyle}>
          {title}
        </a>
      ))}
    </div>
  )
}
