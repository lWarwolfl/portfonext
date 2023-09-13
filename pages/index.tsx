import * as React from "react";
import Hero from "@/components/landing/Hero";
import Images from "@/components/landing/Images";
import Skills from "@/components/landing/Skills";
import Summary from "@/components/landing/Summary";
import WorkExperience from "@/components/landing/WorkExperience";
import Head from "next/head";
import Languages from "@/components/landing/Languages";

export default function Home() {
	return (
		<>
			<Head>
				<title>Sina Kheiri - React.js developer and UI/UX designer</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<main className="width-fix">
				<Hero />
				<Summary />
				<Skills />
				<WorkExperience />
				<Languages />
				<Images />
			</main>
		</>
	);
}
