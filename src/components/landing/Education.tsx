import React from "react";
import styles from "@/styles/landing/Education.module.scss";
import Title from "@/components/Title";
import AnimatedContainer from "@/components/AnimatedContainer";
import SplittedContainer from "@/components/SplittedContainer";
import { Color } from "@/utils/types";
import Institute from "./Institute";
import { educations } from "@/data/educations";
import { StaticImageData } from "next/image";

export interface Education {
	name: string | React.ReactNode;
	logo: string | StaticImageData;
	alt: string;
	color: Color;
}

export default function Education() {
	const midpoint = Math.ceil(educations.length / 2);

	const firstHalf = educations.slice(0, midpoint);
	const secondHalf = educations.slice(midpoint);

	return (
		<div id="education" className={styles.container}>
			<AnimatedContainer animationDirection="top" animationSpeed="medium">
				<Title title="My Academic Odyssey:" description="Learning Beyond the Classroom" />
			</AnimatedContainer>

			<SplittedContainer>
				<AnimatedContainer
					animationDirection="top"
					animationSpeed="slow"
					className={styles.container}
				>
					{firstHalf.map((institute, i) => {
						return <Institute key={i} institute={institute} />;
					})}
				</AnimatedContainer>

				<AnimatedContainer
					animationDirection="top"
					animationSpeed="veryslow"
					className={styles.container}
				>
					{secondHalf.map((institute, i) => {
						return <Institute key={i} institute={institute} />;
					})}
				</AnimatedContainer>
			</SplittedContainer>
		</div>
	);
}
