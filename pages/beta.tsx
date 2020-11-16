import { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'

const Beta: NextPage = () => {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [platform, setPlatform] = useState('ios')

  return (
    <>
      <Head>
        <title>Beta / Willa</title>
      </Head>

      <main>
        <h1 className="text-4xl font-semibold leading-tight">Beta</h1>
        <p className="mt-2">
          If you&#39;re interested in beta testing Willa, please sign up using
          the form below.
        </p>

        <form
          className="mt-12"
          onSubmit={async (event) => {
            event.preventDefault()

            if (loading) {
              return
            }

            setDone(false)
            setLoading(true)

            if (!name || !email || !platform) {
              return
            }

            await fetch('https://flyfly.dev/f/bujjwg', {
              body: JSON.stringify({
                email,
                name,
                platform
              }),
              headers: {
                'content-type': 'application/json'
              },
              method: 'post'
            })

            setName('')
            setEmail('')
            setPlatform('ios')

            setDone(true)
            setLoading(false)
          }}>
          {done && (
            <div
              className="rounded-full px-6 py-4 mb-12"
              onClick={() => setDone(false)}
              style={{
                background: 'linear-gradient(45deg, #9ae6b4, #c6f6d5)'
              }}>
              Thank you for singing up! We&#39;re sending out invites all the
              time. Stay tuned for yours.
            </div>
          )}
          <label>
            <strong>What&#39;s your name?</strong>
            <input
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
              required
              type="text"
              value={name}
            />
          </label>
          <label>
            <strong>Where should we send the invite?</strong>
            <input
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              required
              type="email"
              value={email}
            />
          </label>
          <label>
            <strong>What device do you use?</strong>
            <select
              onChange={(event) => setPlatform(event.target.value)}
              required
              value={platform}>
              <option>iOS</option>
              <option>Android</option>
              <option>Both</option>
            </select>
          </label>

          <div>
            <button>{loading ? 'Please wait' : 'Submit'}</button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Beta
