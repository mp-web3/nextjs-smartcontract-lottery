import { useMoralis } from "react-moralis";

export default function Header() {
  // useMoralis is a hook. It's the way in which React keeps track of "states" in our application
  // Remember to wrap your App inside `MoralisProvider`

  // enableWeb3 will try to connect metamask as soon as the frontend loads
  const { enableWeb3 } = useMoralis();
  return (
    <div>
      <button
        className="border border-white py-2 px-4 rounded-lg"
        onClick={async () => {
          await enableWeb3();
        }}
      >
        Connect
      </button>
    </div>
  );
}
