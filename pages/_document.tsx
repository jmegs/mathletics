
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className='text-hiContrast bg-surface-0 text-2xl'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
