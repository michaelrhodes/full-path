module.exports = function (url) {
  return url.replace(/^(.+:)?\/\/[^\/]+(.+)$/, '$2')
}
