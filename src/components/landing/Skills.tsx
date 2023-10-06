import React from "react";
import Image from "next/image";
import styles from "@/styles/landing/Skills.module.scss";
import StyledCard from "@/components/StyledCard";
import Title from "@/components/Title";
import AnimatedContainer from "@/components/AnimatedContainer";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import { Color, SkillType } from "@/utils/types";
import { skills } from "@/data/skills";

export interface Skill {
	name: string;
	type: SkillType;
	color: Color;
	image: string;
	percent: string;
}

export default function Skills() {
	return (
		<div id="skills" className={styles.container}>
			<AnimatedContainer animationDirection="top" animationSpeed="medium">
				<Title title="Skills:" description="Crafting My Arsenal of Abilities" />
			</AnimatedContainer>
			<AnimatedContainer
				className={styles.skillcontainer}
				animationDirection="top"
				animationSpeed="slow"
			>
				{skills.map((skill, i) => {
					return (
						<StyledCard
							glow={skill.color}
							className={styles.skill}
							key={i}
							variant="small"
						>
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
						</StyledCard>
					);
				})}
			</AnimatedContainer>
		</div>
	);
}
