import { Button, Hero } from "@web3uikit/core"
import { ArrowCircleRight } from "@web3uikit/icons"

export default function HeroCustom() {
    function redirectToMyWebsite() {
        window.open("https://mattiablockchain.dev/", "_blank")
    }
    return (
        <Hero
            align="right"
            backgroundURL="https://moralis.io/wp-content/uploads/2021/06/blue-blob-background-2.svg"
            height="176px"
            rounded="20px"
            textColor="#fff"
            title="Verifiable Random Lottery is LIVE on Sepolia Test Network"
        >
            <Button
                icon={<ArrowCircleRight />}
                text="Check out other projects"
                theme="primary"
                onClick={redirectToMyWebsite}
            />
        </Hero>
    )
}
