import React from "react";
import styles from "@/styles/landing/Hero.module.scss";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import StyledButton from "@/components/StyledButton";

export default function Hero() {
	return (
		<div id="hero" className={styles.container}>
			<div className={styles.intro}>
				<div className={styles.big}>professional</div>

				<div className={styles.small}>
					Front-end <span className={styles.accent}>developer</span>
				</div>

				<div className={styles.links}>
					<StyledButton
						className={styles.link}
						externalLink="/files/resume/en/Resume.pdf"
						download
						background="glass"
						icon={FileDownloadOutlinedIcon}
						staticIcon={PictureAsPdfOutlinedIcon}
						color="blue"
					>
						Resume - en
					</StyledButton>

					<StyledButton
						className={styles.link}
						externalLink="/files/resume/fa/Resume.pdf"
						download
						background="glass"
						icon={FileDownloadOutlinedIcon}
						staticIcon={PictureAsPdfOutlinedIcon}
						color="purple"
					>
						Resume - fa
					</StyledButton>
				</div>
			</div>
		</div>
	);
}
