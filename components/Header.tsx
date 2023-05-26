import React from "react";
import styles from "../styles/Header.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";
import hollowplanets from "../public/image/png/hollowplanets.png";
import planet1 from "../public/image/svg/planet1.svg";
import planet2 from "../public/image/svg/planet2.svg";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import CardTravelRoundedIcon from "@mui/icons-material/CardTravelRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import Link from "next/link";

interface Link {
	id: string;
	text: string;
	icon: React.ElementType;
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
		{ id: "skill", text: "Skills", icon: HandymanOutlinedIcon },
		{
			id: "workexperience",
			text: "Work Experience",
			icon: CardTravelRoundedIcon,
		},
		{ id: "project", text: "Projects", icon: DataObjectRoundedIcon },
		{ id: "education", text: "Education", icon: LibraryBooksOutlinedIcon },
		{ id: "language", text: "Languages", icon: PublicRoundedIcon },
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
						<Link className={styles.logo} href="/">
							<div className={styles.image}></div>
						</Link>
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
