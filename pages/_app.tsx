import * as React from "react";
import "@/styles/index.scss";
import "@/styles/SplittedContainer.scss";
import type { AppProps } from "next/app";

//using next.js 13 font optimization to add our font to all pages
import localFont from "next/font/local";
import Header from "@/components/Header";
import Particle from "@/components/Particle";
export const font = localFont({
	src: [
		{
			path: "../public/fonts/Mona-Sans-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../public/fonts/Mona-Sans-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/Mona-Sans-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/Mona-Sans-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../public/fonts/Mona-Sans-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/Mona-Sans-ExtraBold.woff2",
			weight: "800",
			style: "normal",
		},
		{
			path: "../public/fonts/Mona-Sans-Black.woff2",
			weight: "900",
			style: "normal",
		},
	],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={font.className}>
			<Header />
			<Component {...pageProps} />
			<Particle />
		</main>
	);
}
