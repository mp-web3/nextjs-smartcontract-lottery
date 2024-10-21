import { Card, Illustration } from "@web3uikit/core"

export default function Technology() {
    function redirectToChainlinkVRF() {
        window.open("https://chain.link/vrf", "_blank")
    }
    function redirectToChainlinkAutomation() {
        window.open("https://chain.link/automation", "_blank")
    }
    function redirectToEtherscan() {
        window.open(
            "https://sepolia.etherscan.io/address/0xF28E77634f557585Aa6A77e3cD2aC2B4f49739Ce",
            "_blank"
        )
    }

    return (
        <div className="p-8 bg-grey-banner w-full justify-center flex rounded-3xl">
            <div className="flex flex-wrap flex-col max-w-4xl">
                <h2 className="text-3xl font-bold mb-4 text-white">
                    Explore Our Smart Contract Technology
                </h2>
                <p className="mb-8 text-white">
                    Click on the cards below to learn more about the technologies we use and
                    interact with our smart contract deployed on the Sepolia network.
                </p>
                <div className="flex justify-between">
                    {/* Card 1 */}
                    <div className="w-[250px]">
                        <Card
                            description="Click to explore Chainlink VRF"
                            onClick={redirectToChainlinkVRF}
                            title="Verifiable Random Function"
                            tooltipText={
                                <span className="w-[200px]">
                                    'Chainlink VRF (Verifiable Random Function) is a provably fair
                                    and verifiable random number generator (RNG) that enables smart
                                    contracts to access random values without compromising security
                                    or usability.'
                                </span>
                            }
                        >
                            <div className="flex justify-center">
                                <Illustration height="180px" logo="data" width="100%" />
                            </div>
                        </Card>
                    </div>
                    {/*Card 2*/}
                    <div className="w-[250px]">
                        <Card
                            description="Click to explore Automation"
                            onClick={redirectToChainlinkAutomation}
                            title="Decentralized Automation"
                            tooltipText={
                                <span className="w-[200px]">
                                    Chainlink Automation is an ultra-reliable and performant smart
                                    contract automation solution enabling developers to quickly
                                    scale their operations in a verifiable, decentralized, and
                                    cost-efficient manner.
                                </span>
                            }
                        >
                            <div className="flex justify-center">
                                <Illustration height="180px" logo="comingSoon" width="80%" />
                            </div>
                        </Card>
                    </div>
                    {/*Card 3*/}
                    <div className="w-[250px]">
                        <Card
                            description="Click to explore the Smart Contract"
                            onClick={redirectToEtherscan}
                            title="Verified on Etherscan"
                            tooltipText={
                                <span className="w-[200px]">
                                    Explore the smart contract deployed on the Sepolia network.
                                    Verify the contract details and interact with it directly on
                                    Etherscan.
                                </span>
                            }
                        >
                            <div className="flex justify-center">
                                <Illustration height="180px" logo="documentation" width="60%" />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
