import React from "react";
import styles from "../styles/Title.module.scss";

type Props = {
	title: string;
	description: string;
};

export default function Title({ title, description }: Props) {
	return <h1 className={styles.container}></h1>;
}
