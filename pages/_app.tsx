import * as React from "react";
import "@/styles/index.scss";
import "@/styles/SplittedContainer.scss";
import type { AppProps } from "next/app";

//using next.js 13 font optimization to add our font to all pages
import localFont from "next/font/local";
import Header from "../components/layout/Header";
import Particle from "../components/Particle";

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
	React.useEffect(() => {
		if (typeof window !== "undefined") {
			setTimeout(() => {
				const loader = document.getElementById("globalLoader");
				if (loader) loader.style.backgroundColor = "#0d1117bb";
				document.body.style.overflowY = "auto";
			}, 100);

			setTimeout(() => {
				const loader = document.getElementById("globalLoader");
				if (loader) loader.style.opacity = "0";
			}, 1300);

			setTimeout(() => {
				const loader = document.getElementById("globalLoader");
				if (loader) loader.style.display = "none";
			}, 1600);
		}
	}, []);

	return (
		<main className={font.className}>
			<Header />
			<Component {...pageProps} />
			<Particle />
		</main>
	);
}
