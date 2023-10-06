import fa from "@/public/image/svg/languages/fa.svg";
import en from "@/public/image/svg/languages/en.svg";
import de from "@/public/image/svg/languages/de.svg";
import { Language } from "../components/landing/Languages";

export const languages: Language[] = [
	{
		name: "Persian (Mothers tongue)",
		color: "green",
		image: fa,
		percent: "100%",
	},
	{
		name: "English (Fluent)",
		color: "blue",
		image: en,
		percent: "90%",
	},
	// {
	// 	name: "Dutch (Beginner)",
	// 	color: "aqua",
	// 	image: de,
	// 	percent: "15%",
	// },
];
