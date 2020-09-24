import React from 'react'
import useSizes from '../../components/useSizes'
import Sections from '../../components/Sections'

export default props => {
  const page = props.entry.getIn(['data']).toJS()
  const sections = page.sections

  const { width, height, devicePixelRatio } = useSizes('preview-pane')

  return (
    <Sections
      sections={sections}
      direction='horizontal'
      width={width}
      height={height}
      devicePixelRatio={devicePixelRatio}
    />
  )
}
