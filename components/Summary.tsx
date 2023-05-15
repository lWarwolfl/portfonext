import React from "react";
import styles from "../styles/Summary.module.scss";

export default function Summary() {
	return (
		<div id="summary" className={styles.container}>
			<div className={styles.intro}>
				<div className={styles.big}>professional</div>
				<div className={styles.small}>Front-end developer & UI/UX designer</div>
			</div>
		</div>
	);
}
