import Contact from '@/components/landing/Contact'
import Educations from '@/components/landing/Educations'
import Experiences from '@/components/landing/Experiences'
import Hero from '@/components/landing/Hero'
import Images from '@/components/landing/Images'
import Languages from '@/components/landing/Languages'
import Projects from '@/components/landing/Projects'
import Skills from '@/components/landing/Skills'
import Summary from '@/components/landing/Summary'
import Head from 'next/head'

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
            <Experiences />
            <Projects />
            <Educations />
            <Languages />
            <Contact />
            <Images />
         </main>
      </>
   )
}
