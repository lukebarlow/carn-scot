import React from 'react'
import Markdown from 'react-markdown'

export default ({ sections }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row'
  }

  return (
    <div style={containerStyle}>
      {sections.map((section, i) => {
        if (section.type === 'text') {
          return (
            <div className='text-section'>
              <Markdown key={i} source={section.text} />
            </div>
          )
        }
        if (section.type === 'image') {
          return (
            <div className='image-container'>
              <img
                key={i}
                src={section.image}
                alt={sections.description}
                className='fullscreen-image'
              />
            </div>
          )
        }
        return null
      })}
    </div>
  )
}
