import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import CustomHead from '@/components/utils/CustomHead'
import { WebGLParticles } from '@/components/utils/Particles'
import useWindowSize from '@/lib/useWindowSize'
import clsx from 'clsx'
import { Poppins, Roboto_Mono } from 'next/font/google'

const sans = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
})

const mono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})

interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const isMobile = useWindowSize()

  return (
    <>
      <CustomHead />
      <WebGLParticles size={isMobile ? 260 : 200} />
      <main className={clsx(sans.variable, mono.variable)}>
        <Header />
        <div className="width-fix">
          {children}
          <Footer />
        </div>
      </main>
    </>
  )
}
