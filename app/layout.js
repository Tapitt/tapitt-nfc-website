import { Inter } from "next/font/google";
import Script from 'next/script'
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";
import "../styles/general.css"
import "../styles/queries.css"
import "../styles/style.css"
import "./script.js"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tapitt",
  description: "Connecting the World with a Tap.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <script
            type="module"
            src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
            noModule=""
            src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js"
    ></script>

    <script
            defer
            src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
    ></script>
      </head>
      <Analytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
