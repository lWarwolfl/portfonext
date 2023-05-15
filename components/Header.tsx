import React from "react";
import styles from "../styles/Header.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";
import hollowplanets from "../public/image/png/hollowplanets.png";
import bigplanet1 from "../public/image/svg/bigplanet1.svg";
import smallplanet1 from "../public/image/svg/smallplanet1.svg";

export default function Header() {
	return (
		<div className={styles.container}>
			<Image
				src={hollowplanets}
				alt="Hollow Planets"
				quality={100}
				priority={true}
				className={styles.hollowplanets}
			/>
			<Image
				src={bigplanet1}
				alt="Big Planet 1"
				quality={100}
				priority={true}
				className={styles.bigplanet}
			/>
			<Image
				src={smallplanet1}
				alt="Small Planet 1"
				quality={100}
				priority={true}
				className={styles.smallplanet}
			/>
			<div className={styles.header}>
				<div className={styles.fix}>
					<div className={styles.name}>
						<a className={styles.logo} href="#hero">
							<div className={styles.image}></div>
						</a>
						{/* <div className={styles.text}>Mohamad Sina Kheiry</div> */}
					</div>
					<div className={styles.navbar}>
						<Button className={styles.link} href="#summary">
							Summary
						</Button>
						<Button className={styles.link} href="#skills">
							Skills
						</Button>
						<Button className={styles.link} href="#workexperience">
							Work Experience
						</Button>
						<Button className={styles.link} href="#projects">
							Projects
						</Button>
						<Button className={styles.link} href="#education">
							Education
						</Button>
					</div>
					<Button className={styles.button} href="#contact">
						Contact Me
					</Button>
				</div>
			</div>
		</div>
	);
}
