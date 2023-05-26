import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="robots" content="noindex"></meta>
				<meta name="theme-color" content="#0d1117" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta name="emotion-insertion-point" content="" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
