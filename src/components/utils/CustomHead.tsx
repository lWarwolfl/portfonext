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
    title: 'Sina Kheiri - Front-end developer(Next.js/React.js)',
    description:
      'As a Next.js/React.js developer with 4 years of experience in frontend development, I possess a diverse skill set of 25+ technical abilities. With a strong focus on delivering high-quality code and exceptional user interfaces, I am committed to staying up-to-date with the latest industry trends and best practices. I also have the knowledge and skills for UI Design and I have created User personas, Wireframes, High fidelity projects and Prototypes using Figma and Adobe XD.',
    url: router.asPath,
    image: preview.src,
    twitterCardType: 'summary',
    keywords: [
      'front-end',
      'sina',
      'kheiri',
      'next.js',
      'react.js',
      'typescript',
      'web3',
      'development',
      'software engineer',
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
