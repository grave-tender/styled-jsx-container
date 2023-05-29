# styled-jsx-container

This is a copy of [styled-jsx](https://github.com/vercel/styled-jsx) version 5.1.1 used by Nextjs@13.3.1 modified to support container queries. They are set to behave the same way media queries do. This is meant as a package to override the default dependency of Nextjs.## Getting started

Firstly, install the package:

```bash
npm install --save styled-jsx-container
```

Next, add `styled-jsx-container/babel` to `plugins` in your babel configuration:

```json
{
  "plugins": ["styled-jsx-container/babel"]
}
```

The rest of the configuration and documentation will be the exact same as the original [styled-jsx v5.1.1](https://github.com/vercel/styled-jsx)

PS: This package is made through a build from stylis. It's in fact stylis that doesn't support container queries. The modifications we made were directly applied to the result of that build directly in styled-jsx. The idea is to keep it static and deprecate this package as soon as stylis supports container queries. The build command won't do anything in this package.

Big thanks to [Ange](https://github.com/angeblecon) as he's the one who first figured out how to add the container query.