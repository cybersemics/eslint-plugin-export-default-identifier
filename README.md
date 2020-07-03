# export-default-identifier

`export default` must export an identifier for TypeDocs.

## Rule details

❌ Examples of **incorrect** code:
```js
export default {}
```

✔️ Examples of **correct** code:
```js

const myExport = {}
export default myExport
```

## Resources

* [Rule source](/src/rules/export-default-identifier.ts)
* [Test source](/src/rules/export-default-identifier.test.ts)
