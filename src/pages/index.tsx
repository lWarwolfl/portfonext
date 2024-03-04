import Contact from '@/components/landing/Contact'
import Educations from '@/components/landing/Educations'
import Experiences from '@/components/landing/Experiences'
import Hero from '@/components/landing/Hero'
import Images from '@/components/landing/Images'
import Languages from '@/components/landing/Languages'
import Projects from '@/components/landing/Projects'
import Skills from '@/components/landing/Skills'
import Summary from '@/components/landing/Summary'
import Header from '@/components/layout/Header'
import Particle from '@/components/utils/Particle'
import localFont from 'next/font/local'
import Head from 'next/head'

export const font = localFont({
  src: [
    {
      path: '../../public/fonts/Mona-Sans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Mona-Sans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Mona-Sans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Mona-Sans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Mona-Sans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Mona-Sans-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Mona-Sans-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})

export default function Home() {
  return (
    <main className={font.className}>
      <Head>
        <title>Sina Kheiri - js developer and UI/UX designer</title>
        <meta name="viewport" content="width=device-width, height=device-height" />
      </Head>

      <Particle />
      <Header />
      <div className="width-fix">
        <Hero />
        <Summary />
        <Skills />
        <Experiences />
        <Projects />
        <Educations />
        <Languages />
        <Contact />
        <Images />
      </div>
    </main>
  )
}
