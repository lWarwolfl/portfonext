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
				<Title title="Unveiling My Story:" description="The Path Less Traveled" />
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
							<span className={styles.bold}>Next.js/React.js developer</span> with{" "}
							<span className={styles.bold}>4 years of experience</span> in{" "}
							<span className={styles.bold}>frontend development</span> I possess a
							diverse skill set of{" "}
							<span className={styles.bold}>25+ technical abilities</span>. I am
							proficient in web development, whether using{" "}
							<span className={styles.bold}>popular frameworks</span> or working with
							vanilla HTML, CSS, and JavaScript and I have experience working with
							various technologies such as{" "}
							<span className={styles.bold}>
								Next.js, React.js, Typescript, Redux Toolkit
							</span>
							.
							<span className={styles.extra}>
								<div className={styles.break}></div>I also have the knowledge and
								skills for UI Design and I have created{" "}
								<span className={styles.bold}>
									User personas, Wireframes, High fidelity projects
								</span>{" "}
								and <span className={styles.bold}>Prototypes</span> using{" "}
								<span className={styles.bold}>Figma and Adobe XD</span>.
								<div className={styles.break}></div> With a strong focus on
								delivering <span className={styles.bold}>high-quality code</span>{" "}
								and <span className={styles.bold}>exceptional user interfaces</span>
								, I am committed to staying{" "}
								<span className={styles.bold}>up-to-date</span> with the latest
								industry trends and best practices.
							</span>
						</div>
					</div>

					<div className={styles.extratext}>
						<div className={styles.break}></div>I also have the knowledge and skills for
						UI Design and I have created{" "}
						<span className={styles.bold}>
							User personas, Wireframes, High fidelity projects
						</span>{" "}
						and <span className={styles.bold}>Prototypes</span> using{" "}
						<span className={styles.bold}>Figma and Adobe XD</span>.
						<div className={styles.break}></div> With a strong focus on delivering{" "}
						<span className={styles.bold}>high-quality code</span> and{" "}
						<span className={styles.bold}>exceptional user interfaces</span>, I am
						committed to staying <span className={styles.bold}>up-to-date</span> with
						the latest industry trends and best practices.
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
