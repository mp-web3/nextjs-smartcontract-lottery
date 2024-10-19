import { useWeb3Contract } from "react-moralis"
import { contractAddresses, abi } from "@/constants/constants"
import { useMoralis } from "react-moralis"
import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { Button } from "@web3uikit/core"

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

    const { runContractFunction: enterRaffle } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "enterRaffle",
        params: {},
        msgValue: entranceFee,
    })

    useEffect(() => {
        if (isWeb3Enabled && raffleAddress) {
            // Ensure Web3 is enabled and raffleAddress is valid
            async function readEntranceFee() {
                try {
                    const entranceFeeFromCall = (await getEntranceFee()).toString()
                    setEntranceFee(entranceFeeFromCall)
                } catch (error) {
                    console.error("Error fetching entrance fee:", error) // Catch and log any errors
                }
            }
            readEntranceFee()
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
                    <Button
                        type="button"
                        theme="primary"
                        text="Enter Raffle"
                        onClick={async () => {
                            await enterRaffle({ value: entranceFee })
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
