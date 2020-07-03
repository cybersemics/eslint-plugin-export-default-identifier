import { RuleTester } from 'eslint-docgen'

import rule from './export-default-identifier'

const tester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  }
})

tester.run('export-default-identifier', rule, {
  valid: [
    {
      code: `const myExport = {}
export default myExport`
    },
    {
      code: `const myExport = {}
export default myExport`,
      options: [{ types: ["Identifier", "FunctionDeclaration" ]}]
    },
    {
      code: `export default function test() {}`,
      options: [{ types: ["Identifier", "FunctionDeclaration" ]}]
    },
  ],
  invalid: [
    {
      code: `export default {}`,
      errors: [{ message: 'Cannot export ObjectExpression. Must export identifier as default export for TypeDocs.' }]
    },
    {
      code: `export default function test() {}`,
      errors: [{ message: 'Cannot export FunctionDeclaration. Must export identifier as default export for TypeDocs.' }]
    },
    {
      code: `export default {}`,
      options: [{ types: ["Identifier", "FunctionDeclaration" ]}],
      errors: [{ message: 'Cannot export ObjectExpression. Must export identifier as default export for TypeDocs.' }]
    },
  ],
})
