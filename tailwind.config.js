/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "grey-banner": "#CACFD3",
                "green-accent-light": "#A1FFE0",
                "green-accent-dark": "#00D1AE",
                "blue-web3uikit": "#0B85DA",
            },
        },
    },
    plugins: [],
}
