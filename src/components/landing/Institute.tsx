import React from "react";
import Image from "next/image";
import styles from "@/styles/landing/Education.module.scss";
import StyledCard from "@/components/utils/StyledCard";
import { Education } from "./Education";

interface Props {
	institute: Education;
}

export default function Institute({ institute }: Props) {
	return (
		<StyledCard className={styles.education} variant="smallfull" glow={institute.color}>
			<div className={styles.imagecontainer}>
				<Image src={institute.logo} alt={institute.alt} className={styles.image} />
			</div>
			<span className={styles.text}>{institute.name}</span>
		</StyledCard>
	);
}
