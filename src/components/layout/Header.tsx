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
import useWindowSmallerThan from "@/hooks/useWindowSmallerThan";

interface Link {
	id: string;
	text: string;
	icon: React.ElementType;
}

export default function Header() {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const isMobile = useWindowSmallerThan({ size: 530 });
	const isTablet = useWindowSmallerThan({ size: 1050 });

	React.useEffect(() => {
		const handleScroll = () => {
			if (containerRef.current) {
				const scrollXPosition = document.body.scrollTop;

				if (scrollXPosition >= 10) {
					containerRef.current.classList.add(styles.stick);
				} else {
					containerRef.current.classList.remove(styles.stick);
				}
			}
		};

		document.body.addEventListener("scroll", handleScroll);
		handleScroll();

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
