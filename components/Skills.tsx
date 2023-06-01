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
		| "red";
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
			name: "Material UI",
			type: "design",
			color: "blue",
			image: materialui,
			percent: "75%",
		},
		{
			name: "Html 5",
			type: "code",
			color: "red",
			image: html,
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
	];

	const content = skills.map((skill, i) => (
		<StyledCard
			className={`${styles.skill} ${styles[skill.color]}`}
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
							<CodeRoundedIcon className={styles.icon} />
						)}
						{skill.type === "design" && (
							<DesignServicesRoundedIcon className={styles.icon} />
						)}
						{skill.type === "other" && (
							<BoltRoundedIcon className={styles.icon} />
						)}
					</div>
					<div className={styles.barcontainer}>
						<div className={styles.percent}>{skill.percent}</div>
						<div className={styles.bar}>
							<div
								className={styles.fill}
								style={{ width: `${skill.percent}` }}
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
