import "@/styles/globals.css";
import { MoralisProvider } from "react-moralis";

export default function App({ Component, pageProps }) {
  return (
    // The initializeOnMount is the option to hook into a server to access more functionalities
    <MoralisProvider initializeOnMount={false}>
      <Component {...pageProps} />;
    </MoralisProvider>
  );
}
