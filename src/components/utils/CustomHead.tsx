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
    title: 'Full-stack Developer | Next.js | Typescript | Postgres | Drizlle',
    description:
      'Full-stack developer with 5 years of experience in building performant applications. Skilled in Next.js and TypeScript with more focus on front-end. Experienced in back-end projects using Postgres paired with Drizzle. Committed to staying up-to-date and having an eye for detail while operating in fast paced and Agile environments.',
    url: router.asPath,
    image: preview.src,
    twitterCardType: 'summary',
    keywords: [
      'Sina',
      'Kheiri',
      'Portfonext',
      'Full-stack',
      'Front-end',
      'Back-end',
      'Next.js',
      'React.js',
      'Typescript',
      'Three.js',
      'Postgres',
      'Drizzle',
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
