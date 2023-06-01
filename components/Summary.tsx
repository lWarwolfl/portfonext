import React from "react";
import Image from "next/image";
import styles from "../styles/Summary.module.scss";
import StyledCard from "./StyledCard";
import Title from "./Title";
import photo from "../public/image/svg/photo.svg";
import { Button } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import AnimatedContainer from "./AnimatedContainer";

interface Link {
	link: string;
	color: "purple" | "green" | "blue" | "aqua";
	text: string;
	icon: React.ElementType;
}

export default function Summary() {
	const links: Link[] = [
		{
			link: "mailto:sinakheiri.dev@gmail.com",
			color: "purple",
			text: "sinakheiri.dev@gmail.com",
			icon: MailOutlineRoundedIcon,
		},
		{
			link: "https://www.linkedin.com/in/mohamad-sina-kheiri-068b19245/",
			color: "green",
			text: "linkedin.com/in/mohamad-sina-kheiri-068b19245",
			icon: LinkedInIcon,
		},
		{
			link: "https://github.com/lWarwolfl",
			color: "blue",
			text: "github.com/lWarwolfl",
			icon: GitHubIcon,
		},
		{
			link: "https://t.me/cnawam",
			text: "t.me/cnawam",
			color: "aqua",
			icon: TelegramIcon,
		},
	];

	const content = (
		<>
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
					<span className={styles.bold}>UI/UX design</span>, I possess a diverse
					skill set of{" "}
					<span className={styles.bold}>22+ technical abilities</span>. My
					expertise includes developing responsive web applications, designing
					user interfaces, and implementing complex features using React.js.
					<div className={styles.break}></div>I am proficient in{" "}
					<span className={styles.bold}>Vanilla web developing</span> and have
					experience working with various libraries and frameworks such as{" "}
					<span className={styles.bold}>
						React.js, Next.js, Redux Toolkit and Material UI
					</span>
					. With a strong focus on delivering high-quality code and exceptional
					user experiences, I am committed to staying{" "}
					<span className={styles.bold}>up-to-date</span> with the latest
					industry trends and best practices.
				</div>
			</div>

			<div className={styles.social}>
				{links.map((link, i) => (
					<a
						href={link.link}
						target="_blank"
						className={styles.socialcontainer}
						key={i}
					>
						<link.icon
							style={{
								color: `var(--${link.color}-color)`,
							}}
							className={`${styles.icon} ${styles.static}`}
						/>
						<Button className={styles.button}>{link.text}</Button>
						<KeyboardArrowRightRoundedIcon
							style={{
								color: `var(--${link.color}-color)`,
							}}
							className={styles.icon}
						/>
						<div
							style={{
								backgroundImage: `var(--gradient-${link.color})`,
							}}
							className={styles.bar}
						></div>
					</a>
				))}
			</div>
		</>
	);
	return (
		<div id="summary" className={styles.container}>
			<AnimatedContainer animationDirection="top" animationSpeed="medium">
				<Title
					title="Unveiling My Story:"
					description="Exploring Growth, Skills, and Meaningful Experiences"
				/>
			</AnimatedContainer>
			<AnimatedContainer animationDirection="top" animationSpeed="slow">
				<StyledCard variant="narrowbottom" content={content} />
			</AnimatedContainer>
		</div>
	);
}
