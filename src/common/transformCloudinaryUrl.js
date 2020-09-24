function parseCloudinaryUrl (url) {
  if (!url) {
    return null
  }
  const re = /https:\/\/res\.cloudinary\.com\/([a-z]+)\/([a-z]+)\/upload\/v[0-9]+\/(.+)/
  const match = url.match(re)
  return match ? { cloudName: match[1], type: match[2], path: match[3] } : null
}

function transformCloudinaryUrlForHeight (url, height) {
  height = Math.round(height)
  const parsed = parseCloudinaryUrl(url)
  if (!parsed) {
    return url
  }
  const { cloudName, path, type } = parsed
  return `https://res.cloudinary.com/${cloudName}/${type}/upload/q_auto,h_${height},fl_progressive:steep/${path}`
}

function transformCloudinaryUrlForWidth (url, width) {
  width = Math.round(width)
  const parsed = parseCloudinaryUrl(url)
  if (!parsed) {
    return url
  }
  const { cloudName, path, type } = parsed
  return `https://res.cloudinary.com/${cloudName}/${type}/upload/q_auto,w_${width},fl_progressive:steep/${path}`
}

function transformCloudinaryUrlFitInBox (url, width, height) {
  width = Math.round(width)
  height = Math.round(height)
  const parsed = parseCloudinaryUrl(url)
  if (!parsed) {
    return url
  }
  const { cloudName, path, type } = parsed
  return `https://res.cloudinary.com/${cloudName}/${type}/upload/q_auto,w_${width},h_${height},c_fit,fl_progressive:steep/${path}`
}

export {
  transformCloudinaryUrlForHeight,
  transformCloudinaryUrlForWidth,
  transformCloudinaryUrlFitInBox
}
