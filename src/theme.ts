// import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { createTheme } from "@mui/material/styles";

// export const font = Poppins({
// 	weight: ["300", "400", "500", "600", "700"],
// 	subsets: ["latin"],
// 	display: "swap",
// 	fallback: ["sans-serif"],
// });

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
			path: "../public/fonts/Mona-Sans-SemiBold.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/Mona-Sans-Bold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../public/fonts/Mona-Sans-ExtraBold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/Mona-Sans-Black.woff2",
			weight: "800",
			style: "normal",
		},
	],
});

// Create a theme instance.
const theme = createTheme({
	palette: {
		mode: "dark",
	},
	typography: {
		fontFamily: font.style.fontFamily,
	},
});

export default theme;
