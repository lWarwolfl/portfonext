import React from "react";
import Image from "next/image";
import styles from "../styles/Summary.module.scss";
import StyledCard from "./StyledCard";
import Title from "./Title";
import photo from "../public/image/jpg/photo.jpg";

export default function Summary() {
	const content = (
		<>
			<div className={styles.splitimage}>
				<Image
					src={photo}
					alt="My photo"
					className={styles.image}
				/>
			</div>
			<div className={styles.splittext}>
				<div className={styles.title}>Sina Kheiri</div>
				<div className={styles.description}>
					As a React.js developer with 4 years of experience in frontend
					development and UI/UX design, I possess a diverse skill set of 22+
					technical abilities. My expertise includes developing responsive web
					applications, designing user interfaces, and implementing complex
					features using React.js. I am proficient in Vanilla web developing and
					have experience working with various libraries and frameworks such as
					React.js, Next.js, Redux Toolkit, and Material UI. With a strong focus
					on delivering high-quality code and exceptional user experiences, I am
					committed to staying up-to-date with the latest industry trends and
					best practices.
				</div>
			</div>
		</>
	);
	return (
		<div id="summary" className={styles.container}>
			<Title title="Summary" description="for you to know me" />
			<StyledCard id="summarycard" content={content} />
		</div>
	);
}
