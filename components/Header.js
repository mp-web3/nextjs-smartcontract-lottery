import { ConnectButton } from "@web3uikit/web3"

export default function Header() {
    return (
        <div>
            <div className="flex justify-end">
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}
