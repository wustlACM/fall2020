# Hello there

Welcome to the dev/deploy repo for ACM Fall 2020 Activities [Fair site](https://wustlacm.github.io/fall2020)!

Firstly, a warm welcome to all Freshman and returning students! We live in exceptional times and our new mode of study may not be what we all envisioned university life to be. Rest assured there will be lots of fun and engaging (virtual) activities planned for the semester to keep you entertained and engaged in learning throughout the semester!

Cheers,
_also, if you're here,_ **we want you** _\*points finger\* to be part of our web dev team!_

## Development

Bootstrapped with [Create-React-App](https://create-react-app.dev/docs/adding-typescript/) with TypeScript config. This is a **front-end only** static site.

Basic utility to create nodejs folder package with `yarn create-component <Component Name> <Parent Folder>`. E.g:

```js
yarn create-component Test src/components
=========================================
Generates:
- src/
  - components/
    - Test/
      - Test.tsx
      - index.tsx
=========================================
Subsequent usage in .tsx files:
import Test from "src/components/Test";
```

Project Uses:

- [@material-ui](https://material-ui.com/) styling react package

## Deployment

Simply push into this repo and the automated [Action](/.github/workflows/deploy.yml) will take care of building the site and updating gh-pages branch!

With great power comes great responsibility, here, you're essentially developing in production mode :O
