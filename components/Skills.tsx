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

interface Skill {
	name: string;
	type: "code" | "design" | "other";
	color: "purple" | "green" | "blue" | "aqua";
	image: string;
	percent: string;
}

export default function Skills() {
	const skills: Skill[] = [
		{
			name: "Next.js Framework",
			type: "code",
			color: "purple",
			image: nextjs,
			percent: "75%",
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
