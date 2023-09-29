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
import { Skill } from "@/components/landing/Skills";

export const skills: Skill[] = [
	{
		name: "Next.js Framework",
		type: "code",
		color: "white",
		image: nextjs,
		percent: "100%",
	},
	{
		name: "React.js Framework",
		type: "code",
		color: "aqua",
		image: reactjs,
		percent: "100%",
	},
	{
		name: "Javascript",
		type: "code",
		color: "yellow",
		image: javascript,
		percent: "75%",
	},
	{
		name: "Typescript",
		type: "code",
		color: "blue",
		image: typescript,
		percent: "75%",
	},
	{
		name: "Redux Toolkit(Redux.js)",
		type: "code",
		color: "purple",
		image: redux,
		percent: "100%",
	},
	{
		name: "Material UI",
		type: "design",
		color: "blue",
		image: materialui,
		percent: "100%",
	},
	{
		name: "Tailwind CSS",
		type: "design",
		color: "aqua",
		image: tailwind,
		percent: "100%",
	},
	{
		name: "CSS 3",
		type: "code",
		color: "blue",
		image: css,
		percent: "100%",
	},
	{
		name: "SCSS",
		type: "code",
		color: "pink",
		image: scss,
		percent: "100%",
	},
	{
		name: "Html 5",
		type: "code",
		color: "red",
		image: html,
		percent: "100%",
	},
	{
		name: "Figma",
		type: "design",
		color: "orange",
		image: figma,
		percent: "100%",
	},
	{
		name: "Adobe XD",
		type: "design",
		color: "pink",
		image: adobexd,
		percent: "100%",
	},
	{
		name: "Adobe Illustrator",
		type: "design",
		color: "orange",
		image: adobeillustrator,
		percent: "50%",
	},
	{
		name: "Github",
		type: "other",
		color: "white",
		image: github,
		percent: "100%",
	},
	{
		name: "Agile Methodologies",
		type: "other",
		color: "green",
		image: agile,
		percent: "75%",
	},
	{
		name: "Clean code principles",
		type: "other",
		color: "blue",
		image: cleancode,
		percent: "100%",
	},
	{
		name: "Bootstrap",
		type: "design",
		color: "purple",
		image: bootstrap,
		percent: "75%",
	},
	{
		name: "Jquery",
		type: "code",
		color: "blue",
		image: jquery,
		percent: "100%",
	},
	{
		name: "Formik",
		type: "code",
		color: "blue",
		image: formik,
		percent: "100%",
	},
	{
		name: "Axios",
		type: "code",
		color: "white",
		image: axios,
		percent: "100%",
	},
	{
		name: "Jest",
		type: "code",
		color: "red",
		image: jest,
		percent: "75%",
	},
];
