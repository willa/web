import '../styles/tailwind.scss'
import '../styles/global.scss'

import { AppProps } from 'next/app'
import React, { FunctionComponent } from 'react'

import { Footer, Header } from '../components'

const Willa: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
)

export default Willa
