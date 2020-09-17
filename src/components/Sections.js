import React from 'react'
import Markdown from 'react-markdown'

export default ({ sections}) => {
  return sections.map((section, i) => {
    if (section.type === 'text') {
      return (
        <Markdown source={section.text} />
      )
    }
    if (section.type === 'image') {
      return (
        <img src={section.image} alt={sections.description} />
      )
    }
    return null
  })
}