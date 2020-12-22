import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

type Props = {
  code: number
}

const Error: NextPage<Props> = ({ code }) => (
  <>
    <Head>
      <title>{code || 'Error'} / Willa</title>
    </Head>

    <main className="items-center justify-center text-center p-8">
      <Image
        alt="Willa"
        className="h-40 w-40 rounded-full bg-gray-100"
        height={160}
        src="/img/willa.svg"
        width={160}
      />
      <h1 className="text-5xl font-bold my-8">{code || 'Error'}</h1>
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

export default Error
