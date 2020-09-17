import React from 'react'
import Sections from '../../components/Sections'

export default (props) => {
  const sections = props.entry.getIn(['data', 'sections']).toJS()
  return <Sections sections={sections} />
}