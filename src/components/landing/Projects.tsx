import React from "react";
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

				<div className={styles.projectcontainer}>
					<StyledCard
						move={false}
						glow="yellow"
						className={styles.project}
						variant="narrowbottom"
					>
						<ImageSlider
							className={styles.slider}
							title="Modernist"
							accent="(Front-end Development - Vanilla)"
							images={[modernist1, modernist2, modernist3]}
						/>
						<div className={styles.content}>
							<div className={styles.section}>
								<div className={styles.title}>
									Modernist{" "}
									<span className={styles.accent}>
										(Front-end Development - Vanilla)
									</span>
								</div>
								<div className={styles.description}>
									Modernist which is a personal project that showcases my
									expertise in designing a{" "}
									<span className={styles.bold}>Customizable HTML Template</span>.
								</div>
							</div>
						</div>
					</StyledCard>
				</div>
			</AnimatedContainer>
		</div>
	);
}
