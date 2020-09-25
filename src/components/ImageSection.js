import React from 'react'

import { transformCloudinaryUrlForHeight } from '../common/transformCloudinaryUrl.js'

export default ({ width, height, devicePixelRatio, section, i }) => {
  const containerStyle = section.fullscreen
    ? { width: width, height: height }
    : { height: height * 0.8 }
  const containerClass = section.fullscreen
    ? 'fullscreen-image-container'
    : 'image-container'
  const imageClass = section.fullscreen ? 'fullscreen-image-cover' : 'image'

  const fullscreenImageStyle = { width, height }
  const smallerImageStyle = { height: '100%', marginLeft: 80 }

  const imageStyle = section.fullscreen
    ? fullscreenImageStyle
    : smallerImageStyle

  const imageHeight =
    (section.fullscreen ? height : height * 0.8) * devicePixelRatio

  return (
    <div style={containerStyle} className={containerClass} key={i}>
      {section.fullscreen && (
        <div className='title' style={{ top: height / 2 + 100, width }}>
          {section.title}
          <br />
          <span style={{ fontSize: '50%' }}>{section.subtitle}</span>
        </div>
      )}
      <img
        key={i}
        src={transformCloudinaryUrlForHeight(section.image, imageHeight, 400)}
        alt={section.description}
        style={imageStyle}
        className={imageClass}
      />
    </div>
  )
}
