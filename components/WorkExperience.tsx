import React from "react";
import Image from "next/image";
import styles from "../styles/WorkExperience.module.scss";
import StyledCard from "./StyledCard";
import Title from "./Title";
import { Button } from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import AnimatedContainer from "./AnimatedContainer";
import SplittedContainer from "./SplittedContainer";
import agahpadidar from "../public/image/jpg/company/agahpadidar.jpg";
import ponisha from "../public/image/png/company/ponisha.png";
import { AnimationSpeed, Color, StaticImageData } from "@/utils/types";

interface Company {
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
	const companies: Company[] = [
		{
			alt: "Agahpadidar",
			name: (
				<>
					<span className={styles.bold}>Agahpadidar</span>(remote) - React.js
					Developer and UI/UX Designer
				</>
			),
			link: "https://www.linkedin.com/company/agahpadidar/",
			logo: agahpadidar,
			icon: LinkedInIcon,
			listicon: LibraryAddCheckOutlinedIcon,
			experiences: [
				<>
					<span className={styles.bold}>Led a team</span> of developers and
					provided guidance on project requirements and timelines.
				</>,
				<>
					Developed complex features and functionalities using{" "}
					<span className={styles.bold}>
						React.js, Redux Toolit and Material UI
					</span>
					, resulting in a more user-friendly experience.
				</>,
				<>
					Utilized <span className={styles.bold}>Github</span> for version
					control and collaborated with team members to resolve conflicts.
				</>,
				<>
					Established connections to{" "}
					<span className={styles.bold}>Restful APIs</span> using{" "}
					<span className={styles.bold}>Redux Toolkit</span> and axios for{" "}
					<span className={styles.bold}>20+ features</span>.
				</>,
				<>
					Participated in{" "}
					<span className={styles.bold}>Agile development methodologies</span>{" "}
					such as daily stand-ups, sprint planning, and retrospectives.
				</>,
				<>
					Created UI designs for{" "}
					<span className={styles.bold}>Apps and Websites</span> using figma and
					Analyzed UX solutions.
				</>,
			],
			animationSpeed: "slow",
			color: "aqua",
		},
		{
			alt: "Ponisha",
			name: (
				<>
					<span className={styles.bold}>Ponisha</span>(Freelancer) -
					Front-end(Vanilla) Developer and UI/UX Designer
				</>
			),
			link: "https://ponisha.ir/profile/warwolf",
			logo: ponisha,
			icon: OpenInNewRoundedIcon,
			listicon: LibraryAddCheckOutlinedIcon,
			experiences: [
				<>
					Designed <span className={styles.bold}>User interfaces</span> for
					mobile apps and websites.
				</>,
				<>
					Created{" "}
					<span className={styles.bold}>
						User personas, Wireframes, High fidelity designs
					</span>{" "}
					, and integrated <span className={styles.bold}>Prototyping</span>.
				</>,
				<>
					Developed static web pages and{" "}
					<span className={styles.bold}>HTML templates</span>.
				</>,
			],
			animationSpeed: "veryslow",
			color: "green",
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
								<Button
									style={{
										border: `2px dashed var(--${company.color}-color)`,
									}}
									className={styles.button}
								>
									{company.name}
								</Button>
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
