import preview from '@public/image/jpg/preview.jpg'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface CustomHeadProps {
  title?: string
  description?: string
  image?: string
  url?: string
  twitterCardType?: 'summary' | 'summary_large_image' | 'app' | 'player'
  keywords?: string[]
}

export default function CustomHead(props: CustomHeadProps) {
  const router = useRouter()

  const seo = {
    title: 'Sina Kheiri - Front-end Developer | Next.js/React.js | Typescript | Three.js | Web3',
    description:
      'As a Front-end developer with 5 years of experience, I possess a diverse skill set in my field of work. - Proficient in Next.js, React, and TypeScript, with experience in Supabase And Web3. - Committed to delivering clean code, high-quality projects, and exceptional user interfaces, all while maintaining performance and Always staying up-to-date to align with best practices. - Beginner but enthusiast in 3d web apps using Three.js. Familiar with UI design, including the creation of user personas, wireframes, prototypes, and high-fidelity designs using Figma and Adobe XD.',
    url: router.asPath,
    image: preview.src,
    twitterCardType: 'summary',
    keywords: [
      'Sina',
      'Kheiri',
      'Portfonext',
      'Front-end',
      'Next.js',
      'React.js',
      'Typescript',
      'Three.js',
      'Web3',
      'Development',
      'Software',
    ],
    ...props,
  } satisfies CustomHeadProps

  return (
    <Head>
      {/* Primary Meta Tags */}
      <meta name="viewport" content="width=device-width, height=device-height" />
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      <meta name="author" content="Sina Kheiri" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter */}
      <meta property="twitter:card" content={seo.twitterCardType} />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={seo.image} />
    </Head>
  )
}
