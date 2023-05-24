import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/StyledCard.module.scss";

type Props = {
	id: string;
	narrowbottom: boolean;
	content: React.ReactNode;
};

export default function StyledCard({ id, narrowbottom, content }: Props) {
	const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
	const containerRef = useRef<HTMLDivElement>(null);

	function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
		if (containerRef.current) {
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

	useEffect(() => {
		const handleResize = () => {
			const isDesktop = window.matchMedia("(hover: hover)").matches;
			if (!isDesktop && containerRef.current) {
				containerRef.current.style.transform = "";
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div
			id={id}
			className={`${styles.container} ${narrowbottom && styles.narrowbottom}`}
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
