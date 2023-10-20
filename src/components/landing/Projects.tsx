import React from "react";
import Image from "next/image";
import styles from "@/styles/landing/Projects.module.scss";
import StyledCard from "@/components/StyledCard";
import Title from "@/components/Title";
import AnimatedContainer from "@/components/AnimatedContainer";
import { Color } from "@/utils/types";
import ImageSlider from "@/components/ImageSlider";
import modernist1 from "@/public/image/jpg/projects/modernist/1.png";
import modernist2 from "@/public/image/jpg/projects/modernist/2.png";
import modernist3 from "@/public/image/jpg/projects/modernist/3.png";

export interface Project {
	name: string;
	color: Color;
	image: string;
	percent: string;
}

export default function Projects() {
	return (
		<div id="projects" className={styles.container}>
			<AnimatedContainer animationDirection="top" animationSpeed="medium">
				<Title
					title="Showcasing My Passion Projects:"
					description="Where Creativity Takes Flight"
				/>
			</AnimatedContainer>
			<AnimatedContainer
				className={styles.skillcontainer}
				animationDirection="top"
				animationSpeed="slow"
			>
				<StyledCard glow="yellow" className={styles.skill} variant="narrowbottom">
					<ImageSlider images={[modernist1, modernist2, modernist3]} />
				</StyledCard>
			</AnimatedContainer>
		</div>
	);
}
