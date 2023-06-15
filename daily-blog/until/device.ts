// 当前是哪个浏览器

const identificationBrowser = () => {
  const ua = window.navigator.userAgent

  if (ua.indexOf('Chrome') && ua.indexOf('Edg') === -1) return 'chrome'
  if (ua.indexOf('Edge')) return 'edge'

  return 'chrome'
}

export { identificationBrowser }
