import React from "react";
import Image from "next/image";
import styles from "@/styles/landing/Summary.module.scss";
import StyledCard from "@/components/StyledCard";
import Title from "@/components/Title";
import photo from "@/public/image/jpg/photo.jpg";
import StyledButton from "@/components/StyledButton";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import AnimatedContainer from "@/components/AnimatedContainer";
import { Color } from "@/utils/types";
import { links } from "@/data/links";

export interface Link {
	link: string;
	color: Color;
	text: string;
	icon: React.ElementType;
}

export default function Summary() {
	return (
		<div id="summary" className={styles.container}>
			<AnimatedContainer animationDirection="top" animationSpeed="medium">
				<Title
					title="Unveiling My Story:"
					description="Exploring Growth, Skills, and Meaningful Experiences"
				/>
			</AnimatedContainer>
			<AnimatedContainer animationDirection="top" animationSpeed="slow">
				<StyledCard glow="blue" variant="narrowbottom">
					<div className={styles.splitimage}>
						<Image
							src={photo}
							priority={true}
							alt="My photo"
							className={styles.image}
						/>
					</div>

					<div className={styles.splittext}>
						<div className={styles.description}>
							I am <span className={styles.accent}>Sina Kheiri</span> and As a{" "}
							<span className={styles.bold}>React.js developer</span> with{" "}
							<span className={styles.bold}>4 years of experience</span> in{" "}
							<span className={styles.bold}>frontend development</span> and{" "}
							<span className={styles.bold}>UI/UX design</span>, I possess a
							diverse skill set of{" "}
							<span className={styles.bold}>22+ technical abilities</span>. My
							expertise includes developing responsive web applications,
							designing user interfaces, and implementing complex features using
							React.js.
							<div className={styles.break}></div>I am proficient in{" "}
							<span className={styles.bold}>Vanilla web developing</span> and
							have experience working with various libraries and frameworks such
							as{" "}
							<span className={styles.bold}>
								React.js, Next.js, Redux Toolkit and Material UI
							</span>
							. With a strong focus on delivering high-quality code and
							exceptional user experiences, I am committed to staying{" "}
							<span className={styles.bold}>up-to-date</span> with the latest
							industry trends and best practices.
						</div>
					</div>

					<div className={styles.links}>
						{links.map((link, i) => (
							<StyledButton
								key={i}
								className={styles.link}
								externalLink={link.link}
								icon={KeyboardArrowRightRoundedIcon}
								staticIcon={link.icon}
								iconSize="large"
								staticIconSize="big"
								color={link.color}
								background="glass"
								height="48px"
								barHeight="5px"
							>
								{link.text}
							</StyledButton>
						))}
					</div>
				</StyledCard>
			</AnimatedContainer>
		</div>
	);
}
