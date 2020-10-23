import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Privacy: NextPage = () => (
  <>
    <Head>
      <title>Privacy policy / Willa</title>
    </Head>

    <main>
      <h1 className="text-4xl font-semibold leading-tight">Privacy policy</h1>
      <p className="text-sm text-gray-700 mt-2">
        Last updated on October 23, 2020
      </p>
      <h2 className="text-2xl font-semibold mt-8">Data collection</h2>
      <p className="mt-2">
        We collect the follow data about you to provide you with the service;
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Your name (optional)</li>
        <li>Your email address</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4">Your name</h3>
      <p className="mt-2">
        Your name is only visible to yourself. Nobody else can see it.
      </p>
      <h3 className="text-xl font-semibold mt-4">Your email address</h3>
      <p className="mt-2">
        Your email address is only visible to yourself. Nobody else can see it.
      </p>
      <p className="mt-4 font-medium">
        We care about your privacy and will never share your personal details
        with anyone else.
      </p>
      <h2 className="text-2xl font-semibold mt-8">Data storage</h2>
      <p className="mt-2">We store all your data in an encrypted database.</p>
      <h2 className="text-2xl font-semibold mt-8">Cookies</h2>
      <p className="mt-2">
        We do not use cookies on our website or in our app.
      </p>
      <h2 className="text-2xl font-semibold mt-8">Third party services</h2>
      <p className="mt-2">
        We use some third party services to help bring you a better experience
        with Willa. These include;
      </p>
      <ul className="list-disc ml-8">
        <li className="mt-2">
          <a
            className="text-teal-700"
            href="https://firebase.google.com/support/privacy"
            rel="noreferrer"
            target="_blank">
            Firebase
          </a>
          , for authentication and analytics
        </li>
        <li className="mt-2">
          <a
            className="text-teal-700"
            href="https://sentry.io/privacy"
            rel="noreferrer"
            target="_blank">
            Sentry
          </a>
          , for crashes
        </li>
      </ul>
    </main>
  </>
)

export default Privacy
