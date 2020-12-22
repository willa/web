import { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'

const Help: NextPage = () => {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('Help')
  const [message, setMessage] = useState('')

  return (
    <>
      <Head>
        <title>Help / Willa</title>
      </Head>

      <main>
        <h1 className="text-4xl font-semibold">Help</h1>
        <p className="mt-2">
          If you need help using Willa or have some feedback, fill out this form
          and we&#39;ll get back to you soon!
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

            if (!name || !email || !reason || !message) {
              return
            }

            await fetch('https://flyfly.dev/f/z3ibjp', {
              body: JSON.stringify({
                email,
                message,
                name,
                reason
              }),
              headers: {
                'content-type': 'application/json'
              },
              method: 'post'
            })

            setName('')
            setEmail('')
            setReason('Help')
            setMessage('')

            setDone(true)
            setLoading(false)
          }}>
          {done && (
            <div
              className="bg-gradient-to-br from-green-200 to-green-300 rounded-xl px-6 py-4 mb-12"
              onClick={() => setDone(false)}>
              Thank you for reaching out! Someone will get in touch with you
              shortly.
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
            <strong>How can we reach you?</strong>
            <input
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              required
              type="email"
              value={email}
            />
          </label>
          <label>
            <strong>What is this about?</strong>
            <select
              onChange={(event) => setReason(event.target.value)}
              required
              value={reason}>
              <option>Help</option>
              <option>Support</option>
              <option>Feedback</option>
            </select>
          </label>
          <label>
            <strong>What would you like to say?</strong>
            <textarea
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Message"
              required
              value={message}
            />
          </label>

          <div>
            <button>{loading ? 'Please wait' : 'Submit'}</button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Help
