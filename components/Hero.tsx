import React from 'react'
import styles from "../styles/Hero.module.scss"
import { Button } from '@mui/material';

export default function Hero() {
	return (
		<div className={styles.container}>
			<div className={styles.intro}>
				<div className={styles.big}>professional</div>
				<div className={styles.small}>Front-end developer & UI/UX designer</div>
			</div>
		</div>
	);
}
