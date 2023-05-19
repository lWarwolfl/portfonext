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
				<Image src={photo} alt="My photo" className={styles.image} />
			</div>
			<div className={styles.splittext}>
				<div className={styles.description}>
					I am <span className={styles.bold}>Sina Kheiri</span> and As a
					React.js developer with{" "}
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
		</>
	);
	return (
		<div id="summary" className={styles.container}>
			<Title title="Summary" description="for you to know me" />
			<StyledCard id="summarycard" content={content} />
		</div>
	);
}
