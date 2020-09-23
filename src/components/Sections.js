import React from 'react'
import Markdown from 'react-markdown'

export default ({ sections }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row'
  }

  sections = sections || []

  // first thing in each page is full screen
  sections.forEach((section, i) => {
    section.fullscreen = i === 0
  })


  return (
    <div style={containerStyle}>
      {sections.map((section, i) => {
        if (section.type === 'text') {
          return (
            <div className='text-section' key={i}>
              <Markdown key={i} source={section.text} />
            </div>
          )
        }
        if (section.type === 'image') {
          const containerClass = section.fullscreen ? 'fullscreen-image-container' : 'image-container'
          const imageClass = section.fullscreen ? 'fullscreen-image-cover' : 'image'

          return (
            <div className={containerClass} key={i}>
              <img
                key={i}
                src={section.image}
                alt={sections.description}
                className={imageClass}
              />
            </div>
          )
        }
        return null
      })}
    </div>
  )
}
