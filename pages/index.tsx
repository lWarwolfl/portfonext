import Hero from "@/components/Hero";
import Particle from "@/components/Particle";
import Head from "next/head";
import * as React from "react";

export default function Home() {
	return (
		<>
			<Head>
				<title>Sina Kheiri - React.js developer and UI/UX designer</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<main className="width-fix">
				<Hero />
			</main>
			<Particle />
		</>
	);
}
