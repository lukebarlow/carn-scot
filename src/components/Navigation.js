// links across the top on desktop, hamburger menu on mobile
import React from 'react'

export default ({ pages, page }) => {
  return (
    <div className='navigation-container'>
      {pages.map(({ slug, title }) => {
        const linkStyle = {}

        if (title === page.title) {
          linkStyle.cursor = 'none'
          linkStyle.borderBottom = '1pt solid white'
        }

        if (title === page.title) {
          linkStyle.cursor = 'none'
          // linkStyle.textDecoration = 'underline'
          linkStyle.borderBottom = '1pt solid white'
        }

        return (
          <a key={slug} href={'./' + slug} style={linkStyle}>
            {title}
          </a>
        )
      })}
    </div>
  )
}
