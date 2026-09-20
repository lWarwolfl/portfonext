import Experiences from '@/components/landing/Experiences'
import Hero from '@/components/landing/Hero'
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
    </>
  )
}
