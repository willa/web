import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

interface Props {
  code: number
}

const Error: NextPage<Props> = ({ code }) => (
  <>
    <Head>
      <title>{code || 'Error'} / Homemade</title>
    </Head>

    <main className="items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold mb-8">{code || 'Error'}</h1>
      <h3 className="text-3xl font-semibold">Holy moly!</h3>
      {code === 404 ? (
        <>
          <p className="mt-4">We can&apos;t find what you were looking for.</p>
          <p className="mt-2">
            The authorities have been informed and we&apos;re looking into it
            right now.
          </p>
        </>
      ) : (
        <p className="mt-4">
          Something terrible happened. Step away from your computer and lock the
          doors.
        </p>
      )}
    </main>
  </>
)

Error.getInitialProps = async ({ err }) => {
  const code = err?.statusCode ?? 404

  return {
    code
  }
}

export default Error
