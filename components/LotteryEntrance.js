import { useWeb3Contract } from "react-moralis"
import { contractAddresses, abi } from "@/constants/constants"
import { useMoralis } from "react-moralis"
import { useEffect, useState } from "react"
import { useNotification } from "@web3uikit/core"
import { ethers } from "ethers"
import { Button } from "@web3uikit/core"
import { Bell } from "@web3uikit/icons"

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
    const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
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

    // https://web3ui.github.io/web3uikit/?path=/docs/5-popup-notification--hook-demo
    const handleNotification = () => {
        dispatch({
            type: "info",
            message: "Transaction Complete!",
            title: "Transaction Notification Complete",
            position: "topR",
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
        <div>
            {raffleAddress ? (
                <div className="flex flex-col justify-center items-center">
                    <p>
                        Hi frome lottery! The take part in the lottery contribute{" "}
                        {ethers.utils.formatUnits(entranceFee, "ether")} ETH
                    </p>
                    <p>Number of players: {numberOfPlayers}</p>
                    <p>Last winner: {lastWinner}</p>
                    <Button
                        type="button"
                        theme="primary"
                        text="Enter Raffle"
                        onClick={async () => {
                            await enterRaffle({
                                // onComplete,
                                onSuccess: handleSuccess,
                                onError: (error) => console.log(error),
                            })
                        }}
                    />
                </div>
            ) : (
                <div>
                    <p>No Raffle address detected!</p>
                </div>
            )}
        </div>
    )
}
