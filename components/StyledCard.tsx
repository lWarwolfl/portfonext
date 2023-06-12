import React, { useRef, useState } from "react";
import styles from "../styles/StyledCard.module.scss";

type Props = {
	id?: string;
	className?: string;
	variant: string;
	children: React.ReactNode;
};

export default function StyledCard({ id, className, variant, children }: Props) {
	const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
	const containerRef = useRef<HTMLDivElement>(null);

	function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
		if (containerRef.current && window.innerWidth > 768) {
			const containerRect = containerRef.current.getBoundingClientRect();
			const mouseX = event.clientX - containerRect.left;
			const mouseY = event.clientY - containerRect.top;

			let multiplier = 2;
			let offset = 125;

			if (variant === "small") {
				multiplier = 8;
				offset = 100;
			}
			
			if (variant === "smallfull") {
				multiplier = 5;
				offset = 75;
			}	

			const xSkew =
				((mouseX - containerRect.width / 2) / (containerRect.width / 2)) *
				multiplier;
			const ySkew =
				((mouseY - containerRect.height / 2) / (containerRect.height / 2)) *
				multiplier;
			containerRef.current.style.transform = `perspective(1000px) rotateX(${ySkew}deg) rotateY(${-xSkew}deg)`;
			setGlowPosition({ x: mouseX - offset, y: mouseY - offset });
		}
	}

	function handleMouseLeave() {
		if (containerRef.current) {
			containerRef.current.style.transform = "";
		}
	}

	return (
		<div
			id={id}
			className={`${className} ${styles.container} ${
				variant === "narrowbottom" && styles.narrowbottom
			} ${variant === "small" && styles.small} ${
				variant === "smallfull" && styles.smallfull
			}`}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			ref={containerRef}
		>
			<div
				className={styles.glow}
				style={{ top: `${glowPosition.y}px`, left: `${glowPosition.x}px` }}
			></div>
			{children}
		</div>
	);
}
