import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class BanqiDocument extends Document {
  static async getInitialProps (context: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = context.renderPage

    try {
      context.renderPage = async () =>
        await originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(context)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()]
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
        <Html lang="pt-br">
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
    )
  }
}
