# export-default-identifier

`export default` must export an identifier for TypeDocs.

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
