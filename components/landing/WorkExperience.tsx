import React from "react";
import styles from "@/styles/landing/WorkExperience.module.scss";
import Title from "@/components/Title";
import AnimatedContainer from "@/components/AnimatedContainer";
import SplittedContainer from "@/components/SplittedContainer";
import { Color, StaticImageData } from "@/utils/types";
import { workexperiences } from "@/components/data/workexperiences";
import Company from "./Company";

export interface WorkExperience {
	alt: string;
	name: string | React.ReactNode;
	link: string;
	logo: string | StaticImageData;
	icon: React.ElementType;
	listicon: React.ElementType;
	experiences: string[] | React.ReactNode[];
	color: Color;
}

export default function WorkExperience() {
	const midpoint = Math.ceil(workexperiences.length / 2);

	const firstHalf = workexperiences.slice(0, midpoint);
	const secondHalf = workexperiences.slice(midpoint);

	return (
		<div id="workexperience" className={styles.container}>
			<AnimatedContainer animationDirection="top" animationSpeed="medium">
				<Title
					title="From Novice to Navigator:"
					description="Navigating My Career Journey"
				/>
			</AnimatedContainer>

			<SplittedContainer>
				<AnimatedContainer
					animationDirection="top"
					animationSpeed="slow"
					className={styles.container}
				>
					{firstHalf.map((company, i) => {
						return <Company key={i} company={company} i={i} />;
					})}
				</AnimatedContainer>

				<AnimatedContainer
					animationDirection="top"
					animationSpeed="veryslow"
					className={styles.container}
				>
					{secondHalf.map((company, i) => {
						return <Company key={i} company={company} i={i} />;
					})}
				</AnimatedContainer>
			</SplittedContainer>
		</div>
	);
}
