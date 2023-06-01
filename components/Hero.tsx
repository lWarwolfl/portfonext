import React from "react";
import styles from "../styles/Hero.module.scss";
import { Button } from "@mui/material";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export default function Hero() {
	return (
		<div id="hero" className={styles.container}>
			<div className={styles.intro}>
				<div className={styles.big}>professional</div>

				<div className={styles.small}>
					Front-end <span className={styles.accent}>developer</span> & UI/UX{" "}
					<span className={styles.accent}>designer</span>
				</div>

				<a
					href="/files/Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.buttoncontainer}
				>
					<PictureAsPdfOutlinedIcon
						className={`${styles.icon} ${styles.static}`}
					/>
					<Button className={styles.button}>My resume</Button>
					<FileDownloadOutlinedIcon className={styles.icon} />
					<div className={styles.bar}></div>
				</a>
			</div>
		</div>
	);
}
