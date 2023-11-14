import React from "react";
import Image from "next/image";
import styles from "@/styles/landing/Skills.module.scss";
import StyledCard from "@/components/StyledCard";
import Title from "@/components/Title";
import AnimatedContainer from "@/components/AnimatedContainer";
import LanguageIcon from "@mui/icons-material/Language";
import { Color } from "@/utils/types";
import { languages } from "@/data/languages";

export interface Language {
	name: string;
	color: Color;
	image: string;
	percent: string;
}

export default function Languages() {
	return (
		<div id="languages" className={styles.container}>
			<AnimatedContainer animationDirection="top" animationSpeed="slow">
				<Title title="Languages:" description="The Global Tapestry of My Communication" />

				<div className={styles.skillcontainer}>
					{languages.map((language, i) => {
						return (
							<StyledCard
								glow={language.color}
								className={styles.skill}
								key={i}
								variant="small"
							>
								<div className={styles.data} key={i}>
									<Image
										src={language.image}
										alt={language.name}
										priority={true}
										className={styles.image}
									/>
									<div className={styles.name}>{language.name}</div>
									<LanguageIcon
										style={{
											color: `var(--${language.color}-color)`,
										}}
										className={styles.icon}
									/>
								</div>
								<div className={styles.barcontainer}>
									<div className={styles.percent}>{language.percent}</div>
									<div className={styles.bar}>
										<div
											className={styles.fill}
											style={{
												width: `${language.percent}`,
												backgroundImage: `var(--gradient-${language.color})`,
											}}
										></div>
									</div>
								</div>
							</StyledCard>
						);
					})}
				</div>
			</AnimatedContainer>
		</div>
	);
}
