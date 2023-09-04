import React from 'react'

import type { AppProps } from 'next/app'
import { GlobalStyles } from './_document.styles'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
