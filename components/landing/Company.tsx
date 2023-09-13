import React from "react";
import Image from "next/image";
import styles from "@/styles/landing/WorkExperience.module.scss";
import StyledCard from "@/components/StyledCard";
import { WorkExperience } from "./WorkExperience";

interface Props {
	company: WorkExperience;
	i: number;
}

export default function Company({ company, i }: Props) {
	return (
		<>
			<a href={company.link} target="_blank" className={styles.companycontainer} key={i}>
				<div className={styles.imagecontainer}>
					<Image src={company.logo} alt={company.alt} className={styles.image} />
				</div>
				<div className={styles.text}>{company.name}</div>
				<company.icon
					style={{
						color: `var(--${company.color}-color)`,
					}}
					className={styles.icon}
				/>
			</a>
			{company.experiences.map((experience, index) => {
				return (
					<StyledCard
						className={styles.experience}
						key={index}
						variant="smallfull"
						glow={company.color}
					>
						<company.listicon
							style={{
								color: `var(--${company.color}-color)`,
							}}
							className={styles.icon}
						/>
						<span className={styles.text}>{experience}</span>
					</StyledCard>
				);
			})}
		</>
	);
}
