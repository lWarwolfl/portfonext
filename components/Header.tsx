import React from "react";
import styles from "../styles/Header.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";
import hollowplanets from "../public/image/png/hollowplanets.png";
import planet1 from "../public/image/svg/planet1.svg";
import planet2 from "../public/image/svg/planet2.svg";

export default function Header() {
	const handleClick = (id : string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className={styles.container}>
			<Image
				src={hollowplanets}
				alt="Hollow Planets"
				priority={true}
				className={styles.hollowplanets}
			/>
			<Image
				src={planet2}
				alt="Big Planet"
				priority={true}
				className={styles.bigplanet}
			/>
			<Image src={planet1} alt="Small Planet" className={styles.smallplanet} />
			<div className={styles.header}>
				<div className={styles.fix}>
					<div className={styles.name}>
						<a className={styles.logo} href="#__next">
							<div className={styles.image}></div>
						</a>
						{/* <div className={styles.text}>Mohamad Sina Kheiry</div> */}
					</div>
					<div className={styles.navbar}>
						<Button
							className={styles.link}
							onClick={() => handleClick("summary")}
						>
							Summary
						</Button>
						<Button
							className={styles.link}
							onClick={() => handleClick("skills")}
						>
							Skills
						</Button>
						<Button
							className={styles.link}
							onClick={() => handleClick("workexperience")}
						>
							Work Experience
						</Button>
						<Button
							className={styles.link}
							onClick={() => handleClick("projects")}
						>
							Projects
						</Button>
						<Button
							className={styles.link}
							onClick={() => handleClick("education")}
						>
							Education
						</Button>
					</div>
					<Button
						className={styles.button}
						onClick={() => handleClick("contact")}
					>
						Contact Me
					</Button>
				</div>
			</div>
		</div>
	);
}
