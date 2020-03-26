const Prism = require('prismjs')
const loadLanguages = require('prismjs/components/')

module.exports = parser => {
  loadLanguages()

  parser.on('element:literal_block', element => {
    const code = element.children.join('')
    element.children = []

    const { language } = element.attributes
    const lang = Prism.languages[language]

    element.attributes.html = lang
      ? Prism.highlight(code, lang, language)
      : code
  })
}
