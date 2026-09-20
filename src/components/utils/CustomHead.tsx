import preview from '@public/image/png/preview.png'
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
    title: 'Sina Kheiri | Software Engineer',
    description:
      'Software engineer with 5+ years of experience building performant applications. Frontend-focused with Next.js and TypeScript, and back-end/full-stack with Node.js and ASP.NET.',
    url: router.asPath,
    image: preview.src,
    twitterCardType: 'summary_large_image',
    keywords: [
      'Sina',
      'Kheiri',
      'Portfonext',
      'Software Engineer',
      'Front-end',
      'Full-stack',
      'Next.js',
      'React.js',
      'TypeScript',
      'Node.js',
      'ASP.NET',
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
      <meta name="viewport" content="width=device-width, height=device-height" />
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      <meta name="author" content="Sina Kheiri" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta property="twitter:card" content={seo.twitterCardType} />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={seo.image} />
    </Head>
  )
}
