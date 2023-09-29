import React from "react";
import styles from "@/styles/layout/Header.module.scss";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Link from "next/link";
import StyledButton from "@/components/StyledButton";
import Image from "next/image";
import logo from "@/public/image/png/logo.png";
import Menu from "./Menu";

interface Link {
	id: string;
	text: string;
	icon: React.ElementType;
}

export default function Header() {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const [isTablet, setIsTablet] = React.useState(false);
	const [isMobile, setIsMobile] = React.useState(false);

	React.useEffect(() => {
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
		handleScroll();

		setIsTablet(window.innerWidth <= 1050);
		setIsMobile(window.innerWidth <= 530);

		const handleResize = () => {
			setIsTablet(window.innerWidth <= 1050);
			setIsMobile(window.innerWidth <= 530);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			document.body.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<div className={styles.header} ref={containerRef}>
				<div className={styles.fix}>
					<Link className={styles.logo} href="/">
						<Image alt="logo" src={logo} className={styles.image}></Image>
					</Link>

					{!isMobile ? <Menu /> : null}

					<StyledButton
						className={styles.upbutton}
						idLink="top"
						icon={!isMobile ? KeyboardDoubleArrowUpRoundedIcon : undefined}
						staticIcon={KeyboardArrowUpRoundedIcon}
						iconSize="big"
						staticIconSize="big"
						background="glass"
						iconButton
					/>

					<StyledButton
						className={styles.button}
						idLink=""
						background="glass"
						icon={!isMobile ? KeyboardArrowRightRoundedIcon : undefined}
						staticIcon={SendRoundedIcon}
						fontSize="small"
						iconSize="large"
						iconButton={isTablet}
						disabled
					>
						Contact Me
					</StyledButton>
				</div>
			</div>
			<div id="top" className={styles.dummyheader}>
				<div className={styles.dummy}></div>
			</div>
			{isMobile ? <Menu /> : null}
		</>
	);
}
