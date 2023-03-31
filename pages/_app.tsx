import "@/styles/globals.css";
import type { AppProps } from "next/app";

//using next.js 13 font optimization to add our font to all pages
import { Poppins } from "next/font/google";
const font = Poppins({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
		<main className={font.className}>
			<Component {...pageProps} />
		</main>
	);
}
