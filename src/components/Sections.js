import React, { useState, useRef, useCallback, useEffect } from 'react'
import scroll from 'scroll'

import TextSection from './TextSection'
import ImageSection from './ImageSection'

function clamp (value, min, max) {
  return Math.max(min, Math.min(value, max))
}

export default ({
  sections,
  width,
  height,
  devicePixelRatio,
  direction = 'horizontal'
}) => {
  const [sectionIndex, setSectionIndex] = useState(0)
  const main = useRef(null)

  const navigate = useCallback(
    moveBy => {
      const index = clamp(sectionIndex + moveBy, 0, sections.length)
      const el = main.current.children[index]
      const offset = el.offsetLeft - (width - el.offsetWidth) / 2
      scroll.left(document.body, offset)
      setSectionIndex(index)
    },
    [sectionIndex, sections.length]
  )

  useEffect(() => {
    const handleKey = e => {
      switch (e.key) {
        case 'ArrowLeft':
          navigate(-1)
          break
        case 'ArrowRight':
          navigate(+1)
          break
        default:
          // do nothing
          break
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [navigate])

  const containerStyle = {
    display: 'flex',
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    width: 'fit-content',
    paddingRight: width / 2
  }

  sections = sections || []

  // first thing in each page is full screen
  sections.forEach((section, i) => {
    section.fullscreen = i === 0
  })

  return (
    <>
      <div style={containerStyle} ref={main}>
        {sections.map((section, i) => {
          if (section.type === 'text') {
            return <TextSection key={i} {...{ width, height, section, i }} />
          }
          if (section.type === 'image') {
            return (
              <ImageSection
                key={i}
                {...{ width, height, devicePixelRatio, section, i }}
              />
            )
          }
          return null
        })}
      </div>

      {sectionIndex > 0 && (
        <div className='navigation left' onClick={() => navigate(-1)}>
          &lt;
        </div>
      )}
      {sectionIndex < sections.length - 1 && (
        <div className='navigation right' onClick={() => navigate(+1)}>
          &gt;
        </div>
      )}
    </>
  )
}
