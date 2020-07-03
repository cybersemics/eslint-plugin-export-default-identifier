import { Rule } from 'eslint'
import { ExportDefaultDeclaration, Node } from 'estree'

interface Options {
  types?: string[]
}

const rule: Rule.RuleModule = {

  meta: {
    docs: {
      description: '`export default` must export an identifier for TypeDocs.',
      url: 'https://github.com/cybersemics/eslint-plugin-export-default-identifier',
    }
  },

  create: (context) => ({

    // export default as node
    ExportDefaultDeclaration: (node: Node) => {

      // build fails if node is not coerced (?)
      const declaration = (node as ExportDefaultDeclaration).declaration

      // get allowable types
      // default to Identifier
      const options = {
        types: ["Identifier"],
        ...context.options[0]
      }

      // fail if export default is not an allowed node type
      if (declaration && !options.types.includes(declaration.type)) {
        context.report({
          message: `Cannot export ${declaration.type}. Must export identifier as default export for TypeDocs.`,
          node,
        })
      }
    },
  })
}

export = rule
