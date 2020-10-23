import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Roadmap: NextPage = () => (
  <>
    <Head>
      <title>Roadmap / Willa</title>
    </Head>

    <main>
      <h1 className="text-4xl font-semibold leading-tight">Roadmap</h1>
      <p className="mt-2">
        This is the Willa roadmap. We track what we&#39;re building here. Grayed
        sections have been released and the others are in development.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Graphs &#8212; v3</h2>
        <ul className="list-disc ml-8 mt-2">
          <li>Graphs to make sense of your spending</li>
          <li className="mt-2">Daily, weekly, and monthly charts</li>
          <li className="mt-2">Filter by time or categories</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Collaboration &#8212; v2</h2>
        <ul className="list-disc ml-8 mt-2">
          <li>Invite, view, and remove users</li>
          <li className="mt-2">
            Push notifications when other users add to shared accounts
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <header className="flex flex-col lg:flex-row items-start lg:items-center">
          <h2 className="text-2xl font-semibold">MVP &#8212; v1</h2>
          <div
            className="leading-none mt-2 lg:mt-0 lg:ml-8 bg-orange-400 text-sm px-3 py-2 rounded-full"
            style={{
              background: 'linear-gradient(45deg, #9ae6b4, #c6f6d5)'
            }}>
            Coming soon
          </div>
        </header>
        <p className="mt-2">First release with the basic features.</p>
        <ul className="list-disc ml-8 mt-2">
          <li>Sign in</li>
          <li className="mt-2">Create, update, and delete accounts</li>
          <li className="mt-2">Create, update, and delete items</li>
        </ul>
      </section>
    </main>
  </>
)

export default Roadmap
