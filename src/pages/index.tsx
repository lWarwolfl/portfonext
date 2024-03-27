import Educations from '@/components/landing/Educations'
import Experiences from '@/components/landing/Experiences'
import Hero from '@/components/landing/Hero'
import Images from '@/components/landing/Images'
import Languages from '@/components/landing/Languages'
import Projects from '@/components/landing/Projects'
import Skills from '@/components/landing/Skills'
import Summary from '@/components/landing/Summary'
import MainLayout from '@/components/layout/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Summary />
      <Skills />
      <Experiences />
      <Projects />
      <Educations />
      <Languages />
      <Images />
    </MainLayout>
  )
}
