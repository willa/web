import Link from 'next/link'
import React, { FunctionComponent } from 'react'

export const Header: FunctionComponent = () => (
  <header className="flex items-center justify-between">
    <Link href="/">
      <a className="flex items-center m-12">
        <img
          alt="Willa"
          className="h-8 w-8 rounded-full bg-gray-100 mr-4"
          src="/img/willa.svg"
        />
        <span className="font-medium text-xl text-black">Willa</span>
      </a>
    </Link>
    <nav className="m-12">
      <Link href="/beta">
        <a
          className="text-black leading-none rounded-full font-medium px-8 py-4"
          style={{
            background: 'linear-gradient(45deg, #feb2b2, #fed7d7)'
          }}>
          Beta
        </a>
      </Link>
    </nav>
  </header>
)
