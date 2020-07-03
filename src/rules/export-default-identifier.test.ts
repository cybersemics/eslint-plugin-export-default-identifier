import { RuleTester } from 'eslint-docgen'

import rule from './export-default-identifier'

const tester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  }
})

tester.run('no-export-default-literal', rule, {
  valid: [
    {
      code: `const myExport = {}
export default myExport`
    },
  ],
  invalid: [
    {
      code: `export default {}`,
      errors: [{ message: 'Cannot export ObjectExpression. Must export identifier as default export for TypeDocs.' }]
    }
  ],
})
