# Next.js Smart Contract Lottery

- [nextjs-smartcontract-lottery-fcc](https://github.com/PatrickAlphaC/nextjs-smartcontract-lottery-fcc) from PatrickAlphaC
- [smart contract kit lesson](https://github.com/smartcontractkit/full-blockchain-solidity-course-js?tab=readme-ov-file#lesson-10-nextjs-smart-contract-lottery-full-stack--front-end)
- [6 Ways to connect your dapp to a wallet](https://www.youtube.com/watch?v=pdsYCkUWrgQ)

## Setup

1. `yarn init` and accept defaults
2. run `yarn create next-app .`
   > The period after "next app", indicates we want to create the application in the current folder (avoid folder duplication)

## Getting Started with Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Packages

### moralis

- Read [MoralisWeb3 GitHub](https://github.com/MoralisWeb3/react-moralis), to learn how to use react-moralis

We'll use [react-moralis](https://www.npmjs.com/package/react-moralis) to easily call functionalities and display data from ethereum.

> **IMPORTANT!** we install it as normal dependencies and not `--dev` dev dependencies because **_we need moralis for production build_**!!!

to install moralis run:

```
yarn add react react-dom moralis-v1 react-moralis
```

> Moralis is a **context provider**

In order to let your components have access to Moralis functions, wrap your app in a <MoralisProvider />

See `@/pages_app.js`

###

---

# Learn More about Stuff

## React Hooks

> Hooks allow function components to have access to **state** and other React features. Because of this, class components are generally no longer needed. Source [w3schools React Hooks](https://www.w3schools.com/react/react_hooks.asp)

Thanks to states, our components and fronted rerender based on the state.
