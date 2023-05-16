import React from "react";
import styles from "../styles/Hero.module.scss";

export default function Hero() {
	return (
		<div id="hero" className={styles.container}>
			<div className={styles.intro}>
				<div className={styles.big}>professional</div>
				<div className={styles.small}>
					Front-end <span className={styles.accent}>developer</span> & UI/UX{" "}
					<span className={styles.accent}>designer</span>
				</div>
			</div>
		</div>
	);
}
