import React from 'react'
import Helmet from 'react-helmet'

import Logo from '../components/Logo'
import useSizes from '../components/useSizes'
import Navigation from '../components/Navigation'
import Sections from '../components/Sections'

export default ({ pageContext }) => {
  const { pages, page } = pageContext
  const sections = page.sections

  const { width, height, devicePixelRatio, isPortrait } = useSizes()

  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>Carn Kitchen</title>
        <meta name='description' content='outdoor living in style' />
        <link
          rel='icon'
          type='image/gif'
          href='/img/carn-logo-white-square.gif'
        />
        <meta property='og:type' content='business.business' />
        <meta property='og:title' content='Carn' />
        <meta property='og:url' content='/' />
        <meta property='og:image' content='/img/og-image.jpg' />
      </Helmet>

      <Sections
        sections={sections}
        width={width}
        height={height}
        devicePixelRatio={devicePixelRatio}
      />
      {!isPortrait && <Logo />}
      <Navigation pages={pages} page={page} />
    </>
  )
}
