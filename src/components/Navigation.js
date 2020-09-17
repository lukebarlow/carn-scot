// links across the top on desktop, hamburger menu on mobile
import React from 'react'
import css from './Navigation.css'

const sections = [
  ['gallery', 'Gallery'],
  ['info', 'Info'],
  ['3d', '3D'],
  ['cook', 'Cook'],
  ['build', 'Build']
]

console.log('css.navigationLink', css.navigationLink)

export default () => {
  return (
    <>
    <div style={{position: 'absolute', right: 10}}>
      {sections.map(([name, displayName]) => (
        <a key={name} href={name} style={{paddingRight: 30}}>
          {displayName}
        </a>
      ))}
    </div>
    <div style={{height: 40, width: '100vw'}} />
    </>
  )
}
