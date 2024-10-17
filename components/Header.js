import { useMoralis } from "react-moralis";

export default function Header() {
  // useMoralis is a hook. It's the way in which React keeps track of "states" in our application
  // Remember to wrap your App inside `MoralisProvider`
  const { enableWeb3 } = useMoralis;
  return <div>Hi from Header!</div>;
}
