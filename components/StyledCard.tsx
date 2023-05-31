import React, { useRef, useState } from "react";
import styles from "../styles/StyledCard.module.scss";

type Props = {
	id?: string;
	variant: string;
	content: React.ReactNode;
};

export default function StyledCard({ id, variant, content }: Props) {
	const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
	const containerRef = useRef<HTMLDivElement>(null);

	function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
		if (containerRef.current && window.innerWidth > 768) {
			const containerRect = containerRef.current.getBoundingClientRect();
			const mouseX = event.clientX - containerRect.left;
			const mouseY = event.clientY - containerRect.top;
			const xSkew =
				((mouseX - containerRect.width / 2) / (containerRect.width / 2)) * 2;
			const ySkew =
				((mouseY - containerRect.height / 2) / (containerRect.height / 2)) * 2;
			containerRef.current.style.transform = `perspective(1000px) rotateX(${ySkew}deg) rotateY(${-xSkew}deg)`;
			setGlowPosition({ x: mouseX - 325, y: mouseY - 325 });
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
			className={`${styles.container} ${
				variant === "narrowbottom" && styles.narrowbottom
			} ${variant === "small" && styles.small}`}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			ref={containerRef}
		>
			<div
				className={styles.glow}
				style={{ top: `${glowPosition.y}px`, left: `${glowPosition.x}px` }}
			></div>
			{content}
		</div>
	);
}
