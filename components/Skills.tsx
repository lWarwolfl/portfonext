import React from "react";
import Image from "next/image";
import styles from "../styles/Skills.module.scss";
import StyledCard from "./StyledCard";
import Title from "./Title";
import AnimatedContainer from "./AnimatedContainer";
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import nextjs from "../public/image/svg/skills/nextjs.svg";
import reactjs from "../public/image/svg/skills/reactjs.svg";
import javascript from "../public/image/svg/skills/javascript.svg";
import typescript from "../public/image/svg/skills/typescript.svg";
import css from "../public/image/svg/skills/css.svg";
import scss from "../public/image/svg/skills/scss.svg";
import html from "../public/image/svg/skills/html.svg";
import materialui from "../public/image/svg/skills/materialui.svg";
import redux from "../public/image/svg/skills/redux.svg";
import bootstrap from "../public/image/svg/skills/bootstrap.svg";
import formik from "../public/image/svg/skills/formik.svg";
import axios from "../public/image/svg/skills/axios.svg";
import jquery from "../public/image/svg/skills/jquery.svg";
import figma from "../public/image/svg/skills/figma.svg";
import adobexd from "../public/image/svg/skills/adobexd.svg";
import adobeillustrator from "../public/image/svg/skills/adobeillustrator.svg";
import agile from "../public/image/svg/skills/agile.svg";
import github from "../public/image/svg/skills/github.svg";

interface Skill {
	name: string;
	type: "code" | "design" | "other";
	color:
		| "purple"
		| "green"
		| "blue"
		| "aqua"
		| "white"
		| "pink"
		| "yellow"
		| "red"
		| "orange";
	image: string;
	percent: string;
}

export default function Skills() {
	const skills: Skill[] = [
		{
			name: "Next.js Framework",
			type: "code",
			color: "white",
			image: nextjs,
			percent: "75%",
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
			percent: "50%",
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
			percent: "75%",
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
			percent: "75%",
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
	];

	const content = skills.map((skill, i) => (
		<StyledCard
			className={styles.skill}
			key={i}
			variant="small"
			content={
				<>
					<div className={styles.data} key={i}>
						<Image
							src={skill.image}
							alt={skill.name}
							priority={true}
							className={styles.image}
						/>
						<div className={styles.name}>{skill.name}</div>
						{skill.type === "code" && (
							<CodeRoundedIcon
								style={{
									color: `var(--${skill.color}-color)`,
								}}
								className={styles.icon}
							/>
						)}
						{skill.type === "design" && (
							<DesignServicesRoundedIcon
								style={{
									color: `var(--${skill.color}-color)`,
								}}
								className={styles.icon}
							/>
						)}
						{skill.type === "other" && (
							<BoltRoundedIcon
								style={{
									color: `var(--${skill.color}-color)`,
								}}
								className={styles.icon}
							/>
						)}
					</div>
					<div className={styles.barcontainer}>
						<div className={styles.percent}>{skill.percent}</div>
						<div className={styles.bar}>
							<div
								className={styles.fill}
								style={{
									width: `${skill.percent}`,
									backgroundImage: `var(--gradient-${skill.color})`,
								}}
							></div>
						</div>
					</div>
				</>
			}
		/>
	));

	return (
		<div id="skills" className={styles.container}>
			<AnimatedContainer animationDirection="top" animationSpeed="medium">
				<Title
					title="Mastering the Craft:"
					description="Cultivating Skills for Personal and Professional Growth"
				/>
			</AnimatedContainer>
			<AnimatedContainer
				className={styles.skillcontainer}
				animationDirection="top"
				animationSpeed="slow"
			>
				{content}
			</AnimatedContainer>
		</div>
	);
}
