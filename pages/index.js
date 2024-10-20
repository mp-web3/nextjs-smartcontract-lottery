import Image from "next/image"
import localFont from "next/font/local"
import Head from "next/head"
import Header from "@/components/Header"
import LotteryEntrance from "@/components/LotteryEntrance"
import Technology from "@/components/Technology"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
})
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
})

export default function Home() {
    return (
        <div
            className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
        >
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Contract Lottery" />
                <link rel="icon" href="favicon.ico" />
            </Head>
            {/* header / connect button / nav bar */}
            <Header />
            <main>
                <LotteryEntrance />
                <Technology />
            </main>
        </div>
    )
}
