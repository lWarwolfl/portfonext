import React from "react";
import styles from "../styles/Header.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";
import hollowplanets from "../public/image/png/hollowplanets.png";
import planet1 from "../public/image/svg/planet1.svg";
import planet2 from "../public/image/svg/planet2.svg";

export default function Header() {
	return (
		<div className={styles.container}>
			<Image
				src={hollowplanets}
				alt="Hollow Planets"
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
