# docutils-plugin-prismjs

[![Build Status](https://travis-ci.com/vberlier/docutils-plugin-prismjs.svg?branch=master)](https://travis-ci.com/vberlier/docutils-plugin-prismjs)
[![npm](https://img.shields.io/npm/v/docutils-plugin-prismjs.svg)](https://www.npmjs.com/package/docutils-plugin-prismjs)

> Prism.js plugin for docutils.

This [docutils](https://github.com/vberlier/docutils) plugin highlights the content of `literal_block` elements with [Prism.js](https://prismjs.com).

```js
const docutils = require('docutils')
const highlight = require('docutils-plugin-prismjs')

const document = docutils.parse(string, [highlight])
```

The plugin removes the children of every `literal_block` elements and stores the highlighted code in the `html` attribute of the element. The plugin retrieves the name of the language form the `language` attribute. The `html` attribute will be set to the original code if the language is not supported by [Prism.js](https://prismjs.com).

## Installation

You can install `docutils-plugin-prismjs` with your `npm` client of choice.

```bash
$ npm install docutils-plugin-prismjs
```

## Contributing

Contributions are welcome. The code follows the [javascript standard](https://standardjs.com/) style guide.

```bash
$ npm run lint
```

---

License - [MIT](https://github.com/vberlier/docutils-plugin-prismjs/blob/master/LICENSE)
