# nextjs

Changes to make next output a functioning static site

## 1. Update configs

Add the following to `next.config.js`

```js
module.exports = {
  trailingSlash: true,
  output: 'export',
}
```

## 2. Fix GitHub pages

Add the following files to `public/`

- `CNAME` for custom domain
- `.nojekyll` so that GitHub serves `_next/static/`

## 3. Test it out!

Run `npm run build` and it will output to `out/`
