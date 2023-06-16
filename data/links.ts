import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link } from "@/components/Summary";

export const links: Link[] = [
	{
		link: "mailto:sinakheiri.dev@gmail.com",
		color: "purple",
		text: "sinakheiri.dev@gmail.com",
		icon: MailOutlineRoundedIcon,
	},
	{
		link: "https://www.linkedin.com/in/mohamad-sina-kheiri-068b19245/",
		color: "green",
		text: "linkedin.com/in/mohamad-sina-kheiri-068b19245",
		icon: LinkedInIcon,
	},
	{
		link: "https://github.com/lWarwolfl",
		color: "blue",
		text: "github.com/lWarwolfl",
		icon: GitHubIcon,
	},
	{
		link: "https://t.me/cnawam",
		text: "t.me/cnawam",
		color: "aqua",
		icon: TelegramIcon,
	},
];