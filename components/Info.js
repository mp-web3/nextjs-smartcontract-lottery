import {
    CubeTransparentIcon,
    ClockIcon,
    ShieldCheckIcon,
    UserPlusIcon,
} from "@heroicons/react/24/outline"

const features = [
    {
        name: "Fair Extraction",
        description:
            "The randomness is garanteed by the Chainlink VRF (Verifiable Random Function).",
        icon: ShieldCheckIcon,
    },
    {
        name: "Interval",
        description:
            "A participant is extracted every 30 seconds approximately thanks to Chainlink Automation.",
        icon: ClockIcon,
    },
    {
        name: "Minimum Participants",
        description: "There must be at least 1 participant to extract a winner.",
        icon: UserPlusIcon,
    },
    {
        name: "Complete Decentralization",
        description:
            "The smart contract is deployed on the Sepolia network and the Website is hosted on IPFS.",
        icon: CubeTransparentIcon,
    },
]

export default function Info() {
    return (
        <div className="py-24 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-lg font-semibold leading-7  text-gray-900">
                        How does it work?
                    </h2>
                    <p className="mt-6 leading-8 text-gray-600">
                        To participate in the you only need to click on "Enter Raffle", connect your
                        wallet, and sign the transaction. The cost for participating is 0.001
                        Sepolia ETH.
                    </p>
                    <p className="mt-2 leading-8 text-gray-600">
                        The smart contract will automatically extract a winner every 30 seconds
                        approximately when there is at least 1 participant
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-web3uikit">
                                        <feature.icon
                                            aria-hidden="true"
                                            className="h-6 w-6 text-white"
                                        />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
