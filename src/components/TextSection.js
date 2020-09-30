import React from 'react'

import Markdown from 'react-markdown'

function prepareMarkdownSource (source) {
  return source && source.replace(/\\/g, '  ')
}

export default ({ width, height, section, isMobile, isPortrait, i }) => {
  const textBoxStyle = {
    marginTop: height * 0.1,
    height: height * 0.8 - 40,
    width: (isMobile && isPortrait) ? width - 40 : Math.min(width * 0.5, 300)
  }

  return (
    <div className='text-section' style={textBoxStyle} key={i}>
      <Markdown key={i} source={prepareMarkdownSource(section.text)} />
    </div>
  )
}
