import React from "react";
import styles from "@/styles/StyledButton.module.scss";
import { Button } from "@mui/material";
import { Color } from "@/utils/types";
import { useRouter } from "next/router";

interface Props {
	className?: string;
	idLink?: string;
	localLink?: string;
	externalLink?: string;
	download?: boolean;
	children?: React.ReactNode;
	color?: Color;
	staticIconSize?: "small" | "normal" | "big" | "large";
	iconSize?: "small" | "normal" | "big" | "large";
	height?: string;
	barHeight?: string;
	background?: "transparent" | "glass";
	icon: React.ElementType;
	staticIcon: React.ElementType;
}

export default function StyledButton({
	className,
	idLink = "",
	localLink = "",
	externalLink = "",
	download = false,
	children,
	color = "blue",
	iconSize = "normal",
	staticIconSize = "normal",
	height = "40px",
	barHeight,
	background = "transparent",
	icon: IconComponent,
	staticIcon: StaticIconComponent,
}: Props) {
	const router = useRouter();

	const handleLocalClick = () => {
		const element = document.getElementById(idLink);
		if (element) {
			const scrollPosition = element.offsetTop - 100;

			document.body.scrollTo({
				top: scrollPosition,
				behavior: "smooth",
			});
		}
	};

	const handleLocalLinkClick = () => {
		router.push(localLink);
	};

	const handleClick = () => {
		if (idLink !== "") {
			handleLocalClick();
		} else if (localLink != "") {
			handleLocalLinkClick();
		}
	};

	const Content = () => {
		return (
			<>
				<StaticIconComponent
					className={`${styles.icon} ${styles.static} ${
						staticIconSize === "small" ? styles.small : ""
					} ${staticIconSize === "normal" ? styles.normal : ""} ${
						staticIconSize === "big" ? styles.big : ""
					} ${staticIconSize === "large" ? styles.large : ""}`}
					style={{ color: `var(--${color}-color)` }}
				/>
				<div className={styles.text}>{children}</div>
				<IconComponent
					className={`${styles.icon} ${
						iconSize === "small" ? styles.small : ""
					} ${iconSize === "normal" ? styles.normal : ""} ${
						iconSize === "big" ? styles.big : ""
					} ${iconSize === "large" ? styles.large : ""}`}
					style={{ color: `var(--${color}-color)` }}
				/>
				{barHeight ? (
					<div
						className={styles.bar}
						style={{
							backgroundImage: `var(--gradient-${color})`,
							height: barHeight,
						}}
					></div>
				) : null}
			</>
		);
	};

	return (
		<>
			{externalLink !== "" ? (
				<a
					href={externalLink}
					target="_blank"
					rel={`${download ? "noopener noreferrer" : ""}`}
					className={`${className} ${styles.button} ${
						background === "glass" ? styles.glass : ""
					}`}
					style={{ height: height }}
				>
					<Content />
				</a>
			) : (
				<Button
					onClick={handleClick}
					className={`${className} ${styles.button} ${
						background === "glass" ? styles.glass : null
					}`}
					style={{ height: height }}
				>
					<Content />
				</Button>
			)}
		</>
	);
}
