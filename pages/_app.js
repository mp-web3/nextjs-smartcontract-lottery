import "@/styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "@web3uikit/core"

export default function App({ Component, pageProps }) {
    return (
        // The initializeOnMount is the option to hook into a server to access more functionalities
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <Component {...pageProps} />;
            </NotificationProvider>
        </MoralisProvider>
    )
}
