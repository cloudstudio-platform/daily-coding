import Document, { Html, Head, Main, NextScript } from 'next/document'
import siteMetadata from '@/data/siteMetadata'

class MyDocument extends Document {
  render() {
    return (
      <Html lang={siteMetadata.language} className="scroll-smooth">
        <Head>
          <link
            rel="icon"
            type="image/x-icon"
            href="https://help-assets.codehub.cn/enterprise/new-static/images/cs/favicon.ico"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="https://help-assets.codehub.cn/enterprise/new-static/images/cs/favicon.ico"
          />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <body className="bg-white text-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
