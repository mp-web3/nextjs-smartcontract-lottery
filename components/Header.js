import { useMoralis } from "react-moralis"
import { useEffect } from "react"

export default function Header() {
    // useMoralis is a hook. It's the way in which React keeps track of "states" in our application
    // Remember to wrap your App inside `MoralisProvider`

    // enableWeb3 will try to connect metamask as soon as the frontend loads
    // account check if an account is connected
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3 } = useMoralis()

    // useEffect function takes 2 parameters:
    // 1. A function as a first parameter
    // 2. As second parameter it optionally takes a dependency array
    // useEffect will keep checking the values in the dependency array so that
    // if anything in the dependency array changes is going to call some function and rerender the frontend

    // Here use effectt will constantly listening to something that changes the valuue of "isWeb3Enabled"
    // In strict mode useEffect run twice: on load and immediatly after will check the value
    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window !== "undefined") {
            if (window.localStorage.getItem("connected")) {
                enableWeb3()
            }
        }
    }, [isWeb3Enabled])

    // check to see if we have disconnected

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected") // If user disconnected
                deactivateWeb3() // It's going to set isWeb3Enabled to false
                console.log("Null account found")
            }
        })
    }, [])
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
                        if (typeof window !== "undefined")
                            window.localStorage.setItem("connected", "injected")
                    }}
                >
                    Connect
                </button>
            )}
        </div>
    )
}
