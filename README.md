# export-default-identifier

An eslint plugin that only allows `export default` to export specific types of expressions.

By default, only allows `Identifier` expressions, i.e. named variables. Excludes all anonymous classes, functions, and objects. This was originally created for use with [TypeDoc](https://typedoc.org/), which does not generate proper JSDOC documentation for anonymous export defaults.

NOTE: Equivalent to [`import/no-anonymous-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md):

```
"import/no-anonymous-default-export": ["error", {
  "allowArray": false,
  "allowArrowFunction": false,
  "allowAnonymousClass": false,
  "allowAnonymousFunction": false,
  "allowCallExpression": false,
  "allowLiteral": false,
  "allowObject": false
}]
```

# Install

```
npm install --save-dev export-default-identifier
```

# Usage

Add to your `.eslintrc.json`:

```js
{
  "plugins": [
    "export-default-identifier",
  ],
  ...
  "rules": {
    "export-default-identifier/export-default-identifier": "error"
  }
}
```

Specify exactly which types can be exported as default:

```js
"export-default-identifier/export-default-identifier": ["error", {
  "types": ["Identifier"]
}]
```

## Rule details

❌ Examples of **incorrect** code:
```js
export default {}
export default function test() {}
```

✔️ Examples of **correct** code:
```js

const myExport = {}
export default myExport
```

❌ Examples of **incorrect** code with `[{"types":["Identifier","FunctionDeclaration"]}]` options:
```js
export default {}
```

✔️ Examples of **correct** code with `[{"types":["Identifier","FunctionDeclaration"]}]` options:
```js

const myExport = {}
export default myExport

export default function test() {}
```

## Resources

* [Rule source](/src/rules/export-default-identifier.ts)
* [Test source](/src/rules/export-default-identifier.test.ts)
