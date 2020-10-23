import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Willa: Simple expense tracking</title>
    </Head>

    <main className="items-center justify-center text-center">
      <img
        alt="Willa"
        className="h-40 w-40 rounded-full bg-gray-100"
        src="/img/willa.svg"
      />
      <h1 className="text-4xl font-semibold mt-8">Willa</h1>
      <p className="text-gray-600">Simple expense tracking</p>

      <section className="mt-24 flex flex-col lg:flex-row items-center justify-center">
        <img
          className="max-w-full lg:mr-12"
          src="/img/screenshots/items.png"
          style={{
            width: '24rem'
          }}
        />
        <img
          className="max-w-full my-12 lg:my-0"
          src="/img/screenshots/accounts.png"
          style={{
            width: '30rem'
          }}
        />
        <img
          className="max-w-full lg:ml-12"
          src="/img/screenshots/item.png"
          style={{
            width: '20rem'
          }}
        />
      </section>
    </main>
  </>
)

export default Home
