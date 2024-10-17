import "@/styles/globals.css";
import { MoralisProvider } from "react-moralis";

export default function App({ Component, pageProps }) {
  return (
    <MoralisProvider>
      <Component {...pageProps} />;
    </MoralisProvider>
  );
}
