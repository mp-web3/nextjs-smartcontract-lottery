# Next.js Smart Contract Lottery

-   [nextjs-smartcontract-lottery-fcc](https://github.com/PatrickAlphaC/nextjs-smartcontract-lottery-fcc) from PatrickAlphaC
-   [smart contract kit lesson](https://github.com/smartcontractkit/full-blockchain-solidity-course-js?tab=readme-ov-file#lesson-10-nextjs-smart-contract-lottery-full-stack--front-end)
-   [6 Ways to connect your dapp to a wallet](https://www.youtube.com/watch?v=pdsYCkUWrgQ)

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

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Packages

### web3uikit

-   [web3uikit GitHub](https://github.com/web3ui/web3uikit?tab=readme-ov-file#web3uikit)
-   [web3uikit usage examples for Nextjs](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components-babel)

lightweight UI components for web3 developers.

```
yarn add  @web3uikit/core @web3uikit/web3 @web3uikit/icons
```

### moralis

-   Read [MoralisWeb3 GitHub](https://github.com/MoralisWeb3/react-moralis), to learn how to use react-moralis

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

## Use Effect

useEffect function takes 2 parameters:

1. A function as a first parameter
2. Optionally a dependency array as second parameter.

### Case 1: providing a non empty dependency array

useEffect will keep checking the values in the dependency array so that
if anything in the dependency array changes is going to call some function and rerender the frontend

```
useEffect(() => {
  console.log("Hi!");
  console.log(isWeb3Enabled);
}, [isWeb3Enabled]);

```

Here use effect will constantly listening to something that changes the valuue of "isWeb3Enabled"
In strict mode useEffect run twice: on load and immediatly after will check the value

### Case 2: only passing the first parameter

useEffect(() => {
console.log(Hi!);
console.log(isWeb3Enabled);
})

In this case useEffect() will run anytime the frontend rerenders

### Case 3: passing an epty array as second parameter

useEffect(() => {
console.log(Hi!);
console.log(isWeb3Enabled);
}, [])

in this case useEffect will run only on reload

## Local Storage

We want our application to remember if someone alreasy connected the account

we will store it in the window object

```
import { useMoralis } from "react-moralis"
import { useEffect } from "react"

export default function Header() {
    const { enableWeb3, account, isWeb3Enabled } = useMoralis()
    useEffect(() => {
        if (isWeb3Enabled) return
        enableWeb3()
    }, [isWeb3Enabled])

    return (
        <div>
            {/* If an account is already connected it will just show "Connected"
          else it will display the connect button*/}
            {account ? (
                <div>
                    Connected to {account.slice(0, 6)}...
                    {account.slice(account.length - 4)}
                </div>
            ) : (
                <button
                    className="border border-white py-2 px-4 rounded-lg"
                    onClick={async () => {
                        await enableWeb3()

                        window.localStorage.setItem("connected", "injected")
                    }}
                >
                    Connect
                </button>
            )}
        </div>
    )
}
```
