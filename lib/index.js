const Prism = require('prismjs')
const loadLanguages = require('prismjs/components/')
var escape = require('escape-html')

module.exports = parser => {
  loadLanguages()

  parser.on('element:literal_block', element => {
    const code = escape(element.children.join(''))
    element.children = []

    const { language } = element.attributes
    const grammar = Prism.languages[language]

    element.attributes.html = grammar
      ? Prism.highlight(code, grammar, language)
      : code
  })
}
