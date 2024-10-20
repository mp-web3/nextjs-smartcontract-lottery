import { useWeb3Contract } from "react-moralis"
import { contractAddressesLive, abi } from "@/constants/constants"
import { useMoralis } from "react-moralis"
import { useEffect, useState } from "react"
import { useNotification } from "@web3uikit/core"
import { ethers } from "ethers"
import { Button } from "@web3uikit/core"
import { Bell } from "@web3uikit/icons"
import { ConnectButton } from "@web3uikit/web3"

// TODO: add a listener that listen to the event `WinnerPicked(address indexed player)` emitted when a winner is picked
// Update the frontend anytime a winner is picked

export default function LotteryEntrance() {
    // Moralis know which chain we are on, because the Header passes up
    // to the MoralisProvider (_app.js) all of the informations about
    // metamask.
    // Moralis Provider than passes it down to all of the components inside Moralis
    // provider tags <MoralisProvider><Component {...pageProps}/></MoralisProvider>

    // Motalis is going to give us the "0x...", we need to remove the "0x"
    // Pull out the chainIdHex object and rename it chainId
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    // console.log(parseInt(chainIdHex))
    const chainId = parseInt(chainIdHex, 16) //convert hex to integer
    const raffleAddress =
        chainId in contractAddressesLive ? contractAddressesLive[chainId][0] : null
    const sepoliaChainId = 11155111
    // let entranceFee
    // entranceFee must be a hook, otherwise when it gets updated is frontend does not rerender and we do not see it!
    // runContractFunction can both send transactions and read state
    const [entranceFee, setEntranceFee] = useState("0")
    const [numberOfPlayers, setNumberOfPlayers] = useState("0")
    const [lastWinner, setLastWinner] = useState("0")
    // dispatch is a kind of pop-up
    const dispatch = useNotification()
    // -----------------------------------------------

    // When frontend loads we are going to read the entranceFee (which is set dinamically when Raffle.sol is deployed)
    // By using calling the function getEntranceFee()
    // Check if raffleAddress is valid
    console.log("Raffle Address:", raffleAddress)

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getEntranceFee",
        params: {},
    })

    const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getNumberOfPlayers",
        params: {},
    })

    const { runContractFunction: getLastWinner } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getLastWinner",
        params: {},
    })

    const { runContractFunction: enterRaffle } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "enterRaffle",
        params: {},
        msgValue: entranceFee,
    })

    useEffect(() => {
        if (isWeb3Enabled && chainId !== sepoliaChainId) {
            switchToSepolia()
        }
    }, [isWeb3Enabled, chainId])

    const switchToSepolia = async () => {
        try {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0xaa36a7" }], // Sepolia chain ID in hex
            })
        } catch (switchError) {
            // This error code indicates that the chain has not been added
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                chainId: "0xaa36a7",
                                chainName: "Sepolia Test Network",
                                rpcUrls: ["https://rpc.sepolia.org"],
                                nativeCurrency: {
                                    name: "Sepolia Ether",
                                    symbol: "SEP",
                                    decimals: 18,
                                },
                                blockExplorerUrls: ["https://sepolia.etherscan.io"],
                            },
                        ],
                    })
                } catch (addError) {
                    console.error(addError)
                }
            } else {
                console.error(switchError)
            }
        }
    }

    // https://web3ui.github.io/web3uikit/?path=/docs/5-popup-notification--hook-demo
    const handleNotification = () => {
        dispatch({
            type: "info",
            message: "Succesfully entered lottery!",
            title: "Transaction Complete",
            position: "topL",
            icon: <Bell fontSize={20} />,
        })
    }

    const handleSuccess = async (tx) => {
        await tx.wait(1)
        handleNotification(tx)
        updateUI()
    }

    async function updateUI() {
        try {
            const entranceFeeFromCall = (await getEntranceFee()).toString()
            const numberOfPlayersFromCall = (await getNumberOfPlayers()).toString()
            const lastWinnerFromCall = (await getLastWinner()).toString()
            setEntranceFee(entranceFeeFromCall)
            setNumberOfPlayers(numberOfPlayersFromCall)
            setLastWinner(lastWinnerFromCall)
        } catch (error) {
            console.error("Error fetching entrance fee:", error) // Catch and log any errors
        }
    }

    useEffect(() => {
        if (isWeb3Enabled && raffleAddress) {
            // Ensure Web3 is enabled and raffleAddress is valid
            updateUI()
        } else {
            console.log(
                `Web3 must be true: ${isWeb3Enabled}. raffleAddress cannot be null: ${raffleAddress}`
            )
        }
    }, [isWeb3Enabled, raffleAddress])

    return (
        <div className="pt-24">
            {raffleAddress ? (
                <div className="flex flex-col justify-center items-center gap-4 text-blue-web3uikit">
                    <p>
                        <b>Entrance cost: </b> {ethers.utils.formatUnits(entranceFee, "ether")} ETH
                    </p>
                    <p>
                        <b>Number of players:</b> {numberOfPlayers}
                    </p>
                    <Button
                        type="button"
                        theme="primary"
                        text="Enter Raffle"
                        onClick={async () => {
                            await enterRaffle({
                                // onComplete,
                                onSuccess: handleSuccess, // onSucces is only checking that the transaction was succesfully sent to the wallet
                                // It is NOT checking if the transaction was confirmed onChain!!!
                                onError: (error) => console.log(error),
                            })
                        }}
                    />
                    <p>
                        <b>Last winner:</b> 🎉 {lastWinner} 🎉
                    </p>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center gap-4">
                    <ConnectButton moralisAuth={false} />
                    <p className="text-lg font-medium text-blue-web3uikit">
                        Connect to check how many players already entered the raffle and Play Now!
                    </p>
                </div>
            )}
        </div>
    )
}
