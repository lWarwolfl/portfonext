import React from "react";
import styles from "../styles/StyledCard.module.scss";

type Props = {
	id: string;
	content: React.ReactNode;
};

export default function StyledCard({ id, content }: Props) {
	return <div id={id} className={styles.container}></div>;
}
