import React from "react";
import Image from "next/image";
import styles from "../styles/Summary.module.scss";
import StyledCard from "./StyledCard";
import Title from "./Title";
import photo from "../public/image/jpg/photo.jpg";
import { Button } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Summary() {
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

			<div className={styles.social}>
				<a
					href="mailto:sinakheiri.dev@gmail.com"
					target="_blank"
					className={`${styles.socialcontainer} ${styles.green}`}
				>
					<MailOutlineRoundedIcon
						className={`${styles.icon} ${styles.static}`}
					/>
					<Button className={styles.button}>sinakheiri.dev@gmail.com</Button>
					<KeyboardArrowRightRoundedIcon className={styles.icon} />
					<div className={styles.bar}></div>
				</a>

				<a
					href="https://www.linkedin.com/in/mohamad-sina-kheiri-068b19245/"
					target="_blank"
					className={`${styles.socialcontainer} ${styles.purple}`}
				>
					<LinkedInIcon className={`${styles.icon} ${styles.static}`} />
					<Button className={styles.button}>
						linkedin.com/in/mohamad-sina-kheiri-068b19245
					</Button>
					<KeyboardArrowRightRoundedIcon className={styles.icon} />
					<div className={styles.bar}></div>
				</a>

				<a
					href="https://github.com/lWarwolfl"
					target="_blank"
					className={`${styles.socialcontainer} ${styles.blue}`}
				>
					<GitHubIcon className={`${styles.icon} ${styles.static}`} />
					<Button className={styles.button}>github.com/lWarwolfl</Button>
					<KeyboardArrowRightRoundedIcon className={styles.icon} />
					<div className={styles.bar}></div>
				</a>

				<a
					href="https://t.me/cnawam"
					target="_blank"
					className={`${styles.socialcontainer} ${styles.cyan}`}
				>
					<TelegramIcon className={`${styles.icon} ${styles.static}`} />
					<Button className={styles.button}>t.me/cnawam</Button>
					<KeyboardArrowRightRoundedIcon className={styles.icon} />
					<div className={styles.bar}></div>
				</a>
			</div>
		</>
	);
	return (
		<div id="summary" className={styles.container}>
			<Title
				title="Unveiling My Story:"
				description="Exploring Growth, Skills, and Meaningful Experiences"
			/>
			<StyledCard id="summarycard" narrowbottom={true} content={content} />
		</div>
	);
}
