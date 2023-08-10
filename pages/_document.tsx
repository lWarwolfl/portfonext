import { Html, Head, Main, NextScript } from "next/document";
import { loader } from "../utils/loader";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="robots" content="noindex"></meta>
				<meta name="theme-color" content="#0d1117" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta name="emotion-insertion-point" content="" />
				<style>{loader}</style>
			</Head>
			<body>
				<div id={"globalLoader"}>
					<div className="loader"></div>
					<div className="loaderring1"></div>
					<div className="loaderring2"></div>
				</div>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
