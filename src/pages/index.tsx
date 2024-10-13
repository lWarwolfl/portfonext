import Educations from '@/components/landing/Educations'
import Experiences from '@/components/landing/Experiences'
import Hero from '@/components/landing/Hero'
import Images from '@/components/landing/Images'
import Languages from '@/components/landing/Languages'
import Projects from '@/components/landing/Projects'
import Skills from '@/components/landing/Skills'
import Summary from '@/components/landing/Summary'

export default function Home() {
  return (
    <>
      <Hero />
      <Summary />
      <Skills />
      <Experiences />
      <Projects />
      <Educations />
      <Languages />
      <Images />
    </>
  )
}
