# Next.js Smart Contract Lottery

This project is a decentralized application (DApp) built with Next.js and Solidity. It allows users to participate in a lottery where a winner is picked randomly using Chainlink VRF (Verifiable Random Function).

## Deployments

## Access the Website hosted on IPFS

### Brave

You can simply use the Brave IPFS node or you can install the [IPFS Companion Extension](https://chromewebstore.google.com/detail/ipfs-companion/nibjojkomfdiaoajekhjakgkdhaomnch)

### Google Chrome

Install the [IPFS Companion Extension](https://chromewebstore.google.com/detail/ipfs-companion/nibjojkomfdiaoajekhjakgkdhaomnch) from Chrome Web Store

### Firefox

Install the [IPFS Companion Extension](https://addons.mozilla.org/it/firefox/addon/ipfs-companion/) from Firefox Browser ADD-ONS

If you are having trouble accessing

### Other Browser

Read the docs [IPFS Companion Install](http://bafybeie266mvmvkpt5bvvqp4mmmcwqv2obqzndlkqxbtmpnws2tdcn4iju.ipfs.localhost:8080/install/ipfs-companion/#install)to install the IPFS Companion on your preferred Browser

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/nextjs-smartcontract-lottery.git
    cd nextjs-smartcontract-lottery
    ```

2. **Install dependencies**:

    ```bash
    yarn install
    ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add the necessary environment variables. For example:

    ```plaintext
    NEXT_PUBLIC_INFURA_ID=your-infura-id
    NEXT_PUBLIC_CHAIN_ID=11155111
    ```

4. **Run the development server**:

    ```bash
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

-   **Connect Wallet**: Click on the "Connect Wallet" button to connect your Ethereum wallet.
-   **Switch Network**: If you are not on the Sepolia network, you will be prompted to switch.
-   **Enter Lottery**: Enter the lottery by paying the entrance fee.
-   **Check Winner**: The winner is picked randomly using Chainlink VRF.

## Features

-   **Decentralized Lottery**: Participate in a fair and transparent lottery.
-   **Chainlink VRF**: Ensures the randomness of the winner selection.
-   **Wallet Integration**: Connect your Ethereum wallet to interact with the DApp.
-   **Network Switching**: Automatically prompts the user to switch to the Sepolia network if not already connected.

## Technologies Used

-   **Next.js**: React framework for server-side rendering and static site generation.
-   **Solidity**: Programming language for writing smart contracts.
-   **Chainlink VRF**: Verifiable Random Function for generating random numbers.
-   **Web3uikit**: UI components for Web3 applications.
-   **Moralis**: Simplifies interaction with blockchain data.

## Deploy

### Deploy on IPFS

```
yarn build
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
