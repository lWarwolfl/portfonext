import React from "react";
import Image from "next/image";
import styles from "../styles/WorkExperience.module.scss";
import StyledCard from "./StyledCard";
import Title from "./Title";
import photo from "../public/image/svg/photo.svg";
import { Button } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import AnimatedContainer from "./AnimatedContainer";
import SplittedContainer from "./SplittedContainer";

interface Company {
	name: string;
	link: string;
	color: "purple" | "green" | "blue" | "aqua";
}

export default function WorkExperience() {
	const companies: Company[] = [
		{
			name: "sinakheiri.dev@gmail.com",
			link: "mailto:sinakheiri.dev@gmail.com",
			color: "purple",
		},
		{
			name: "sinakheiri.dev@gmail.com",
			link: "mailto:sinakheiri.dev@gmail.com",
			color: "purple",
		},
	];

	return (
		<div id="workexperience" className={styles.container}>
			<AnimatedContainer animationDirection="top" animationSpeed="medium">
				<Title
					title="Ventures and Victories:"
					description="Impactful Contributions and Achievements"
				/>
			</AnimatedContainer>

			<SplittedContainer>
				{companies.map((company, i) => {
					return (
						<AnimatedContainer animationDirection="top" animationSpeed="slow">
							<StyledCard
								className={styles.skill}
								key={i}
								variant="smallfull"
							>

							</StyledCard>
						</AnimatedContainer>
					);
				})}
			</SplittedContainer>
		</div>
	);
}
