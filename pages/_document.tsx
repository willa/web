import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class Homemade extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />

        <body className="container mx-auto">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Homemade
