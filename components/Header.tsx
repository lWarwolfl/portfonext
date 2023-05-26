import React from "react";
import styles from "../styles/Header.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";
import hollowplanets from "../public/image/png/hollowplanets.png";
import planet1 from "../public/image/svg/planet1.svg";
import planet2 from "../public/image/svg/planet2.svg";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";

interface Link {
	id: string;
	text: string;
	icon?: React.ElementType;
}

export default function Header() {
	const handleClick = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const links: Link[] = [
		{ id: "summary", text: "Summary", icon: RouteOutlinedIcon },
		{ id: "skills", text: "Skills", icon: FitnessCenterRoundedIcon },
		{
			id: "workexperience",
			text: "Work Experience",
			icon: WorkRoundedIcon,
		},
		{ id: "projects", text: "Projects", icon: SettingsSuggestRoundedIcon },
		{ id: "education", text: "Education", icon: SchoolRoundedIcon },
		{ id: "language", text: "Language", icon: PublicRoundedIcon },
	];

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
						<a className={styles.logo} href="/">
							<div className={styles.image}></div>
						</a>
						{/* <div className={styles.text}>Mohamad Sina Kheiry</div> */}
					</div>
					<div className={styles.navbar}>
						{links.map((link) => (
							<div className={styles.linkcontainer} key={link.id}>
								{link.icon && (
									<link.icon className={`${styles.icon} ${styles.static}`} />
								)}
								<Button
									className={styles.link}
									onClick={() => handleClick(link.id)}
								>
									{link.text}
								</Button>
								<KeyboardArrowRightRoundedIcon className={styles.icon} />
								<div className={styles.bar}></div>
							</div>
						))}
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
