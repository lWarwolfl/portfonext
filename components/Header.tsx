import React from 'react'
import styles from "../styles/Header.module.scss"
import { Button } from '@mui/material';

export default function Header() {
	return (
		<div className={styles.container}>
			<div className={styles.planets}></div>
			<div className={styles.header}>
				<div className={styles.fix}>
					<div className={styles.name}>
						<div className={styles.logo}>
							<div className={styles.image}></div>
						</div>
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
