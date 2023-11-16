import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "@/styles/landing/Skills.module.scss";
import StyledCard from "@/components/StyledCard";
import Title from "@/components/Title";
import AnimatedContainer from "@/components/AnimatedContainer";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import FormatPaintOutlinedIcon from "@mui/icons-material/FormatPaintOutlined";
import { Color, SkillType } from "@/utils/types";
import { skillcategories, skills } from "@/data/skills";

export interface SkillCategory {
	name: SkillType;
	color: Color;
}

export interface Skill {
	name: string;
	category: SkillType;
	image: string | StaticImageData;
	percent: string;
}

export default function Skills() {
	return (
		<div id="skills" className={styles.container}>
			<AnimatedContainer animationDirection="top" animationSpeed="slow">
				<Title title="Skills:" description="Crafting My Arsenal of Abilities" />
				<div className={styles.skillcontainer}>
					{skillcategories.map((category, index) => {
						return (
							<>
								{skills
									.filter((item) => item.category === category.name)
									.map((skill, skillindex) => {
										return (
											<StyledCard
												key={skillindex}
												glow={category.color}
												className={styles.skill}
												variant="small"
											>
												<div className={styles.data}>
													<Image
														src={skill.image}
														alt={skill.name}
														className={styles.image}
													/>
													<div className={styles.name}>{skill.name}</div>
													{category.name === "code" && (
														<CodeRoundedIcon
															style={{
																color: `var(--${category.color}-color)`,
															}}
															className={styles.icon}
														/>
													)}
													{category.name === "uiframework" && (
														<FormatPaintOutlinedIcon
															style={{
																color: `var(--${category.color}-color)`,
															}}
															className={styles.icon}
														/>
													)}
													{category.name === "design" && (
														<DesignServicesRoundedIcon
															style={{
																color: `var(--${category.color}-color)`,
															}}
															className={styles.icon}
														/>
													)}
													{category.name === "other" && (
														<BoltRoundedIcon
															style={{
																color: `var(--${category.color}-color)`,
															}}
															className={styles.icon}
														/>
													)}
												</div>
												<div className={styles.barcontainer}>
													<div className={styles.percent}>
														{skill.percent}
													</div>
													<div className={styles.bar}>
														<div
															className={styles.fill}
															style={{
																width: `${skill.percent}`,
																backgroundImage: `var(--gradient-${category.color})`,
															}}
														></div>
													</div>
												</div>
											</StyledCard>
										);
									})}
							</>
						);
					})}
				</div>
			</AnimatedContainer>
		</div>
	);
}
