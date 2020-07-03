import { Rule } from 'eslint'
import { ExportDefaultDeclaration, Node } from 'estree'

const rule: Rule.RuleModule = {

  meta: {
    docs: {
      description: '`export default` must export an identifier for TypeDocs.',
      url: 'https://github.com/raineorshine/eslint-plugin-export-default-identifier',
    }
  },

  create: (context) => ({

    // export default as node
    ExportDefaultDeclaration: (node: Node) => {

      // build fails if node is not coerced (?)
      const declaration = (node as ExportDefaultDeclaration).declaration

      // fail if export default is not an Identifier
      if (declaration && declaration.type !== 'Identifier') {
        context.report({
          message: `Cannot export ${declaration.type}. Must export identifier as default export for TypeDocs.`,
          node,
        })
      }
    },
  })
}

export = rule
