import React from "react";
import styles from "@/styles/layout/Header.module.scss";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import CardTravelRoundedIcon from "@mui/icons-material/CardTravelRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import Link from "next/link";
import StyledButton from "@/components/utils/StyledButton";
import useWindowSmallerThan from "@/hooks/useWindowSmallerThan";

interface Link {
	id: string;
	text: string;
	icon: React.ElementType;
}

export default function Menu() {
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

	const isMobile = useWindowSmallerThan({ size: 530 });
	const isTablet = useWindowSmallerThan({ size: 1050 });

	return (
		<div className={styles.navbarcontainer}>
			<div className={styles.navbar}>
				{links.map((link, i) => (
					<StyledButton
						key={i}
						className={styles.link}
						idLink={link.id}
						icon={!isMobile ? KeyboardArrowRightRoundedIcon : undefined}
						staticIcon={link.icon}
						fontSize="small"
						iconSize="large"
						staticIconSize="big"
						disabled={link.id === ""}
						iconButton={isTablet}
						background={isTablet ? "glass" : "transparent"}
					>
						{link.text}
					</StyledButton>
				))}
			</div>
		</div>
	);
}
