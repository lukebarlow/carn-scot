/*
A hook which returns information about the window
we want to render into
*/

import { useEffect, useState, useCallback } from 'react'

export default elementId => {
  const [width, setWidth] = useState(1000)
  const [height, setHeight] = useState(700)
  const [devicePixelRatio, setDevicePixelRatio] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const [isPortrait, setIsPortrait] = useState(false)

  const setSizes = useCallback(() => {
    // if an element id is given, then use that for dimensions,
    // otherwise use the window
    let w, h

    if (elementId) {
      const el = document.getElementById(elementId)
      w = el.offsetWidth
      h = el.offsetHeight
    } else {
      w = window.innerWidth
      h = window.innerHeight
    }

    setWidth(w)
    setHeight(h)
    setDevicePixelRatio(window.devicePixelRatio)
    setIsMobile(document.body.clientWidth < 758)
    setIsPortrait(document.body.clientWidth < document.body.clientHeight)
  }, [elementId])

  useEffect(() => {
    setSizes()
    window.addEventListener('resize', setSizes)
    return () => {
      window.removeEventListener('resize', setSizes)
    }
  }, [setSizes])

  return { width, height, devicePixelRatio, isMobile, isPortrait }
}
