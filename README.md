# Minimal reproduction of incorrect access permissions of assets with Next.js and Now
As reported in https://github.com/prisma/prisma2/issues/1170

In `date.js` we have a minimal api defined like so:

```js
import getMessage from 'dummy-executable-package'

export default async (req, res) => {
  const date = await getMessage()

  res.json({ date })
}
```

[`dummy-executable-package`](https://github.com/timsuchanek/dummy-executable-package) has just been created for this reproduction. You can find its code [here](https://github.com/timsuchanek/dummy-executable-package).
