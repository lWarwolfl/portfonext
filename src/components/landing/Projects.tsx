import React from "react";
import styles from "@/styles/landing/Projects.module.scss";
import StyledCard from "@/components/StyledCard";
import Title from "@/components/Title";
import AnimatedContainer from "@/components/AnimatedContainer";
import { Color } from "@/utils/types";
import ImageSlider from "@/components/ImageSlider";
import Image, { StaticImageData } from "next/image";
import StyledButton from "@/components/StyledButton";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { Skill } from "@/components/landing/Skills";
import { Link } from "@/components/landing/Summary";
import { projects } from "@/data/projects";

export interface Project {
	title: string;
	accent: string;
	description: string | React.ReactNode;
	direction: "normal" | "reverse";
	color: Color;
	images: StaticImageData[];
	skills: Skill[];
	links: Link[];
}

export default function Projects() {
	return (
		<div id="projects" className={styles.container}>
			<AnimatedContainer animationDirection="top" animationSpeed="medium">
				<Title
					title="Showcasing My Passion Projects:"
					description="Where Creativity Takes Flight"
				/>

				<div className={styles.projectcontainer}>
					{projects.map((item, index) => {
						return (
							<StyledCard
								key={index}
								move={false}
								glow={item.color}
								className={`${styles.project} ${
									item.direction === "reverse" ? styles.reverse : ""
								}`}
								variant="narrowbottom"
							>
								<ImageSlider
									className={styles.slider}
									title={item.title}
									accent={item.accent}
									images={item.images}
								/>
								<div className={styles.content}>
									<div className={styles.section}>
										<div className={styles.title}>
											{item.title}{" "}
											<span className={styles.accent}>{item.accent}</span>
										</div>
										<div className={styles.description}>{item.description}</div>
									</div>
									<div className={styles.section}>
										<div className={styles.title}>
											Skills{" "}
											<span className={styles.accent}>
												used in this project
											</span>
										</div>
										<div className={styles.skillcontainer}>
											{item.skills.map((skill, skillindex) => {
												return (
													<div key={skillindex} className={styles.skill}>
														<Image
															src={skill.image}
															alt={skill.name}
															className={styles.image}
														/>
														<div className={styles.name}>
															{skill.name}
														</div>
													</div>
												);
											})}
										</div>
									</div>
									<div className={styles.section}>
										<div className={styles.title}>
											Links{" "}
											<span className={styles.accent}>
												to access the code or view the project
											</span>
										</div>
										<div className={styles.linkcontainer}>
											{item.links.map((link, i) => (
												<StyledButton
													key={i}
													className={styles.link}
													externalLink={link.link}
													icon={KeyboardArrowRightRoundedIcon}
													staticIcon={link.icon}
													iconSize="big"
													staticIconSize="normal"
													fontSize="normal"
													color={link.color}
													background="glass"
													height="40px"
													barHeight="4px"
												>
													{link.text}
												</StyledButton>
											))}
										</div>
									</div>
								</div>
							</StyledCard>
						);
					})}
				</div>
			</AnimatedContainer>
		</div>
	);
}
