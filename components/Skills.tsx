import React from "react";
import Image from "next/image";
import styles from "../styles/Skills.module.scss";
import StyledCard from "./StyledCard";
import Title from "./Title";
import AnimatedContainer from "./AnimatedContainer";

interface Skill {
	name: string;
	color: "purple" | "green" | "blue" | "aqua";
	image: string;
	percent: string;
}

export default function Skills() {
	const skills: Skill[] = [
		{
			name: "",
			color: "purple",
			image: "",
			percent: "",
		},
	];

	const content = skills.map((skill, i) => (
		<div key={i}>
			{skill.name}
		</div>
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
				{content.map((cardContent, index) => (
					<StyledCard key={index} variant="small" content={cardContent} />
				))}
			</AnimatedContainer>
		</div>
	);
}
