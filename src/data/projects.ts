import * as React from "react";
import styles from "@/styles/landing/Projects.module.scss";
import nextjs from "@/public/image/svg/skills/nextjs.svg";
import reactjs from "@/public/image/svg/skills/reactjs.svg";
import javascript from "@/public/image/svg/skills/javascript.svg";
import typescript from "@/public/image/svg/skills/typescript.svg";
import css from "@/public/image/svg/skills/css.svg";
import scss from "@/public/image/svg/skills/scss.svg";
import html from "@/public/image/svg/skills/html.svg";
import materialui from "@/public/image/svg/skills/materialui.svg";
import redux from "@/public/image/svg/skills/redux.svg";
import bootstrap from "@/public/image/svg/skills/bootstrap.svg";
import formik from "@/public/image/svg/skills/formik.svg";
import axios from "@/public/image/svg/skills/axios.svg";
import jquery from "@/public/image/svg/skills/jquery.svg";
import figma from "@/public/image/svg/skills/figma.svg";
import adobexd from "@/public/image/svg/skills/adobexd.svg";
import adobeillustrator from "@/public/image/svg/skills/adobeillustrator.svg";
import agile from "@/public/image/svg/skills/agile.svg";
import github from "@/public/image/svg/skills/github.svg";
import cleancode from "@/public/image/svg/skills/cleancode.svg";
import jest from "@/public/image/svg/skills/jest.svg";
import tailwind from "@/public/image/svg/skills/tailwind.svg";
import responsive from "@/public/image/svg/skills/responsive.svg";
import modernist1 from "@/public/image/jpg/projects/modernist/1.jpg";
import modernist2 from "@/public/image/jpg/projects/modernist/2.jpg";
import modernist3 from "@/public/image/jpg/projects/modernist/3.jpg";
import modernist4 from "@/public/image/jpg/projects/modernist/4.jpg";
import modernist5 from "@/public/image/jpg/projects/modernist/5.jpg";
import modernist6 from "@/public/image/jpg/projects/modernist/6.jpg";
import modernist7 from "@/public/image/jpg/projects/modernist/7.jpg";
import { Project } from "@/components/landing/Projects";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

export const projects: Project[] = [
	{
		title: "Modernist",
		accent: "(Front-end Development - Vanilla)",
		description: React.createElement(
			React.Fragment,
			null,
			"Modernist which is a personal project that showcases my expertise in designing a ",
			React.createElement("span", { className: styles.bold }, "Customizable HTML Template"),
			"."
		),
		direction: "normal",
		color: "yellow",
		images: [
			modernist1,
			modernist2,
			modernist3,
			modernist4,
			modernist5,
			modernist6,
			modernist7,
		],
		skills: [
			{
				name: "Html 5",
				category: "code",
				image: html,
				percent: "100%",
			},
			{
				name: "CSS 3",
				category: "code",
				image: css,
				percent: "100%",
			},
			{
				name: "Javascript",
				category: "code",
				image: javascript,
				percent: "75%",
			},
			{
				name: "Jquery",
				category: "code",
				image: jquery,
				percent: "100%",
			},
			{
				name: "Adobe XD",
				category: "design",
				image: adobexd,
				percent: "100%",
			},
			{
				name: "Responsive Web Design",
				category: "design",
				image: responsive,
				percent: "100%",
			},
		],
		links: [
			{
				link: "https://github.com/lWarwolfl/Modernist",
				color: "blue",
				text: "Github",
				icon: GitHubIcon,
			},
			{
				link: "https://modernist.lazygamer.ir/",
				color: "green",
				text: "Project",
				icon: VisibilityRoundedIcon,
			},
		],
	},
];
