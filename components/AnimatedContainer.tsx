import React, { useRef, useEffect } from "react";
import styles from "../styles/AnimatedContainer.module.scss";

type AnimatedContainerProps = {
	children: React.ReactNode;
	animationDirection: "top" | "right" | "bottom" | "left";
	animationSpeed: "fast" | "medium" | "slow";
};

export default function AnimatedContainer({
	children,
	animationDirection,
	animationSpeed,
}: AnimatedContainerProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (containerRef.current) {
				const containerTop = containerRef.current.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;

				if (containerTop - windowHeight <= -150 || window.innerWidth < 768) {
					containerRef.current.classList.add(styles.show);
				} else {
					containerRef.current.classList.remove(styles.show);
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
		<div
			ref={containerRef}
			className={`${styles.container} ${styles[animationDirection]} ${styles[animationSpeed]}`}
		>
			{children}
		</div>
	);
}
