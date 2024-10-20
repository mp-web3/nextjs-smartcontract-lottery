import Image from "next/image"
import localFont from "next/font/local"
import Head from "next/head"
import Header from "@/components/Header"
import LotteryEntrance from "@/components/LotteryEntrance"
import Technology from "@/components/Technology"
import HeroCustom from "@/components/HeroCustom"

export default function Home() {
    return (
        <div className={`flex flex-wrap flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20`}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="My Smart Contract Lottery" />
                <link rel="icon" href="favicon.ico" />
            </Head>
            {/* header / connect button / nav bar */}
            <Header />
            <HeroCustom />
            <main>
                <LotteryEntrance />
                <Technology />
            </main>
        </div>
    )
}
