import DescriptionCard from '@/components/DescriptionCard';
import Head from 'next/head';
import * as React from 'react';

export default function Home() {
  return (
		<>
			<Head>
				<title>Sina Kheiry - React.js developer and UI/UX designer</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<main className='width-fix'>
				<DescriptionCard />
				<DescriptionCard />
				<DescriptionCard />
				<DescriptionCard />
			</main>
		</>
	);
}
