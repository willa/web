import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Willa: Simple expense tracking</title>
    </Head>

    <main className="items-center justify-center text-center">
      <Image
        alt="Willa"
        className="rounded-full bg-gray-100"
        height={160}
        src="/img/willa.svg"
        width={160}
      />
      <h1 className="text-4xl font-semibold mt-8">Willa</h1>
      <p className="text-gray-600">Simple expense tracking</p>

      <section className="mt-24 flex flex-col lg:flex-row items-center justify-center">
        <Image
          height={2026 * 0.8}
          src="/img/screenshots/2-items.png"
          width={1000 * 0.8}
        />
        <figure className="my-12 lg:my-0 lg:mx-12">
          <Image
            height={2026}
            src="/img/screenshots/1-accounts.png"
            width={1000}
          />
        </figure>
        <Image
          height={2026 * 0.7}
          src="/img/screenshots/3-item.png"
          width={1000 * 0.7}
        />
      </section>
    </main>
  </>
)

export default Home
