import React, { useRef, useEffect } from "react";
import styles from "@/styles/layout/Header.module.scss";
import { Button } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import CardTravelRoundedIcon from "@mui/icons-material/CardTravelRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Link from "next/link";
import StyledButton from "@/components/StyledButton";
import Image from "next/image";
import logo from "@/public/image/png/logo.png";

interface Link {
	id: string;
	text: string;
	icon: React.ElementType;
}

export default function Header() {
	const handleClick = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const scrollPosition = element.offsetTop - 100;

			document.body.scrollTo({
				top: scrollPosition,
				behavior: "smooth",
			});
		}
	};

	const links: Link[] = [
		{ id: "summary", text: "Summary", icon: RouteOutlinedIcon },
		{ id: "skills", text: "Skills", icon: HandymanOutlinedIcon },
		{
			id: "workexperience",
			text: "Work Experience",
			icon: CardTravelRoundedIcon,
		},
		{ id: "projects", text: "Projects", icon: DataObjectRoundedIcon },
		{ id: "education", text: "Education", icon: LibraryBooksOutlinedIcon },
		{ id: "languages", text: "Languages", icon: PublicRoundedIcon },
	];

	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (containerRef.current) {
				const scrollYPosition = document.body.scrollTop;

				if (scrollYPosition >= 10) {
					containerRef.current.classList.add(styles.stick);
				} else {
					containerRef.current.classList.remove(styles.stick);
				}
			}
		};

		document.body.addEventListener("scroll", handleScroll);
		handleScroll(); // Handle initial scroll position

		return () => {
			document.body.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div className={styles.header} ref={containerRef}>
				<div className={styles.fix}>
					<Link className={styles.logo} href="/">
						<Image alt="logo" src={logo} className={styles.image}></Image>
					</Link>

					<div className={styles.navbar}>
						{links.map((link, i) => (
							<StyledButton
								className={styles.link}
								idLink={link.id}
								icon={KeyboardArrowRightRoundedIcon}
								staticIcon={link.icon}
								iconSize="large"
								staticIconSize="big"
							>
								{link.text}
							</StyledButton>
						))}

						<Button
							className={styles.upbutton}
							onClick={() => handleClick("top")}
						>
							<KeyboardArrowUpRoundedIcon
								className={`${styles.icon} ${styles.first}`}
							/>
							<KeyboardDoubleArrowUpRoundedIcon
								className={`${styles.icon} ${styles.second}`}
							/>
						</Button>
					</div>

					<StyledButton
						className={styles.button}
						idLink=""
						background="glass"
						icon={KeyboardArrowRightRoundedIcon}
						staticIcon={SendRoundedIcon}
						iconSize="large"
					>
						Contact Me
					</StyledButton>
				</div>
			</div>
			<div id="top" className={styles.dummyheader}>
				<div className={styles.dummy}></div>
			</div>
		</>
	);
}
