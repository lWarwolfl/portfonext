import { loader } from '@/utils/loader'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#0d1117" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <style>{loader}</style>
      </Head>
      <body>
        <div id="globalLoader">
          <svg
            width="110"
            height="110"
            viewBox="0 0 110 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="loaderring"
          >
            <g style={{ mixBlendMode: 'screen' }} opacity="0.5">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M110 55C110 85.3757 85.3757 110 55 110C24.6243 110 0 85.3757 0 55C0 24.6243 24.6243 0 55 0C85.3757 0 110 24.6243 110 55ZM100 55C100 79.8528 79.8528 100 55 100C30.1472 100 10 79.8528 10 55C10 30.1472 30.1472 10 55 10C79.8528 10 100 30.1472 100 55Z"
                fill="url(#paint0_linear_479_7)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_479_7"
                x1="0"
                y1="0"
                x2="110"
                y2="110"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B721FF" />
                <stop offset="0.554" stopColor="#B721FF" stopOpacity="0" />
                <stop offset="1" stopColor="#B721FF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
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
