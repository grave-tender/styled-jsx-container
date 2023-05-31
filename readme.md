# styled-jsx-container

!!! 0.1.x versions won't work, still figuring out why, will update to 1.0.0 once it's fully functionning. Actively working on it. Please check the following [issue](https://github.com/grave-tender/styled-jsx-container/issues/1). Currently trying to fix plugin compatibility.

This is a copy of [styled-jsx](https://github.com/vercel/styled-jsx) version 5.1.1 used by Nextjs@13.3.1 modified to support container queries via [stylis-cq](https://www.npmjs.com/package/stylis-cq). This is theorically an exact copy of styled-jsx set to use stylis-cq instead of stylis.

## Getting started

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

Big thanks to [Ange](https://github.com/angeblecon) as he's the one who first figured out how to add the container query.