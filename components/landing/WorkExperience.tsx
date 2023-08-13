import React from "react";
import Image from "next/image";
import styles from "@/styles/landing/WorkExperience.module.scss";
import StyledCard from "@/components/StyledCard";
import Title from "@/components/Title";
import { Button } from "@mui/material";
import AnimatedContainer from "@/components/AnimatedContainer";
import SplittedContainer from "@/components/SplittedContainer";
import { AnimationSpeed, Color, StaticImageData } from "@/utils/types";
import { workexperiences } from "@/data/workexperiences";

export interface WorkExperience {
	alt: string;
	name: string | React.ReactNode;
	link: string;
	logo: string | StaticImageData;
	icon: React.ElementType;
	listicon: React.ElementType;
	experiences: string[] | React.ReactNode[];
	animationSpeed: AnimationSpeed;
	color: Color;
}

export default function WorkExperience() {
	return (
		<div id="workexperience" className={styles.container}>
			<AnimatedContainer animationDirection="top" animationSpeed="medium">
				<Title
					title="Ventures and Victories:"
					description="Impactful Contributions and Achievements"
				/>
			</AnimatedContainer>

			<SplittedContainer>
				{workexperiences.map((company, i) => {
					return (
						<AnimatedContainer
							key={i}
							animationDirection="top"
							animationSpeed={company.animationSpeed}
							className={styles.container}
						>
							<a
								href={company.link}
								target="_blank"
								className={styles.companycontainer}
								key={i}
							>
								<Image
									src={company.logo}
									alt={company.alt}
									className={styles.image}
								/>
								<Button className={styles.button}>{company.name}</Button>
								<company.icon
									style={{
										color: `var(--${company.color}-color)`,
									}}
									className={styles.icon}
								/>
							</a>
							{company.experiences.map((experience, index) => {
								return (
									<StyledCard
										className={styles.experience}
										key={index}
										variant="smallfull"
										glow={company.color}
									>
										<company.listicon
											style={{
												color: `var(--${company.color}-color)`,
											}}
											className={styles.icon}
										/>
										<span className={styles.text}>{experience}</span>
									</StyledCard>
								);
							})}
						</AnimatedContainer>
					);
				})}
			</SplittedContainer>
		</div>
	);
}
