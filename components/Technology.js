import { Card, Illustration } from "@web3uikit/core"

export default function Technology() {
    function redirectToChainlinkVRF() {
        window.open("https://chain.link/vrf", "_blank")
    }

    return (
        <div>
            {/*Cards*/}
            <div>
                {/*Card 1*/}
                <div
                    style={{
                        width: "250px",
                    }}
                >
                    <Card
                        description="Click to explore Chainlink VRF"
                        onClick={redirectToChainlinkVRF}
                        setIsSelected={function noRefCheck() {}}
                        title="Verifiable Random Function"
                        tooltipText={
                            <span style={{ width: 200 }}>
                                'Chainlink VRF (Verifiable Random Function) is a provably fair and
                                verifiable random number generator (RNG) that enables smart
                                contracts to access random values without compromising security or
                                usability.'
                            </span>
                        }
                    >
                        <div>
                            <Illustration height="180px" logo="data" width="100%" />
                        </div>
                    </Card>
                </div>
                {/*Card 2*/}
                {/*Card 3*/}
            </div>
        </div>
    )
}
