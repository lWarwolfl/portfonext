import { loader } from '@/lib/loader'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#0a0a0b" />
        <link rel="icon" type="image/svg+xml" href="/image/svg/logo.svg" />
        <style>{loader}</style>
      </Head>
      <body>
        <div id="globalLoader">
          <div className="loader">
            <div className="loader-inside"></div>
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
