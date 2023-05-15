import React from "react";
import styles from "../styles/Hero.module.scss";

export default function Hero() {
	return (
		<div id="hero" className={styles.container}>
			<div className={styles.intro}>
				<div className={styles.big}>professional</div>
				<div className={styles.small}>Front-end developer & UI/UX designer</div>
			</div>
		</div>
	);
}
