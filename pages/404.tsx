import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Error: NextPage = () => (
  <>
    <Head>
      <title>Not found / Willa</title>
    </Head>

    <main className="items-center justify-center text-center p-8">
      <Image
        alt="Willa"
        className="h-40 w-40 rounded-full bg-gray-100"
        height={160}
        src="/img/willa.svg"
        width={160}
      />
      <h1 className="text-5xl font-bold my-8">Not found</h1>
      <h3 className="text-3xl font-semibold">Holy moly!</h3>
      <p className="mt-4">We can&#39;t find what you were looking for.</p>
      <p className="mt-2">
        The authorities have been informed and we&#39;re looking into it right
        now.
      </p>
    </main>
  </>
)

export default Error
