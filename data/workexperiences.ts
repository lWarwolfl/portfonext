import * as React from "react";
import { WorkExperience } from "@/components/landing/WorkExperience";
import styles from "@/styles/landing/WorkExperience.module.scss";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import agahpadidar from "@/public/image/jpg/company/agahpadidar.jpg";
import ponisha from "@/public/image/png/company/ponisha.png";

export const workexperiences: WorkExperience[] = [
	{
		alt: "Agahpadidar",
		name: React.createElement(
			React.Fragment,
			null,
			React.createElement("span", { className: styles.bold }, "Agahpadidar"),
			"(remote) - React.js Developer and UI/UX Designer"
		),
		link: "https://www.linkedin.com/company/agahpadidar/",
		logo: agahpadidar,
		icon: LinkedInIcon,
		listicon: LibraryAddCheckOutlinedIcon,
		experiences: [
			React.createElement(
				React.Fragment,
				null,
				React.createElement("span", { className: styles.bold }, "Led a team"),
				" of developers and provided guidance on project requirements and timelines."
			),
			React.createElement(
				React.Fragment,
				null,
				"Developed complex features and functionalities using ",
				React.createElement(
					"span",
					{ className: styles.bold },
					"React.js, Redux Toolit and Material UI"
				),
				", resulting in a more user-friendly experience."
			),
			React.createElement(
				React.Fragment,
				null,
				"Utilized ",
				React.createElement("span", { className: styles.bold }, "Github"),
				" for version control and collaborated with team members to resolve conflicts."
			),
			React.createElement(
				React.Fragment,
				null,
				"Established connections to ",
				React.createElement("span", { className: styles.bold }, "Restful APIs"),
				" using ",
				React.createElement(
					"span",
					{ className: styles.bold },
					"Redux Toolkit"
				),
				" and axios for ",
				React.createElement("span", { className: styles.bold }, "20+ features"),
				"."
			),
			React.createElement(
				React.Fragment,
				null,
				"Participated in ",
				React.createElement(
					"span",
					{ className: styles.bold },
					"Agile development methodologies"
				),
				" such as daily stand-ups, sprint planning, and retrospectives."
			),
			React.createElement(
				React.Fragment,
				null,
				"Created UI designs for ",
				React.createElement(
					"span",
					{ className: styles.bold },
					"Apps and Websites"
				),
				" using figma and Analyzed UX solutions."
			),
		],
		animationSpeed: "slow",
		color: "aqua",
	},
	{
		alt: "Ponisha",
		name: React.createElement(
			React.Fragment,
			null,
			React.createElement("span", { className: styles.bold }, "Ponisha"),
			"(Freelancer) - Front-end(Vanilla) Developer and UI/UX Designer"
		),
		link: "https://ponisha.ir/profile/warwolf",
		logo: ponisha,
		icon: OpenInNewRoundedIcon,
		listicon: LibraryAddCheckOutlinedIcon,
		experiences: [
			React.createElement(
				React.Fragment,
				null,
				"Designed ",
				React.createElement(
					"span",
					{ className: styles.bold },
					"User interfaces"
				),
				" for mobile apps and websites."
			),
			React.createElement(
				React.Fragment,
				null,
				"Created ",
				React.createElement(
					"span",
					{ className: styles.bold },
					"User personas, Wireframes, High fidelity designs"
				),
				", and integrated ",
				React.createElement("span", { className: styles.bold }, "Prototyping"),
				"."
			),
			React.createElement(
				React.Fragment,
				null,
				"Developed static web pages and ",
				React.createElement(
					"span",
					{ className: styles.bold },
					"HTML templates"
				),
				"."
			),
		],
		animationSpeed: "veryslow",
		color: "green",
	},
];
