import React from "react";
import styles from "../styles/Summary.module.scss";
import StyledCard from "./StyledCard";
import Title from "./Title";

export default function Summary() {
	const content = <div></div>;
	return (
		<div id="summary" className={styles.container}>
			<Title title="Summary" description="so you can know me better" />
			<StyledCard id="summarycard" content={content} />
		</div>
	);
}
