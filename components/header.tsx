import Image from 'next/image'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'

export const Header: FunctionComponent = () => (
  <header className="flex items-center justify-between">
    <Link href="/">
      <a className="flex items-center m-12">
        <Image
          alt="Willa"
          className="rounded-full bg-gray-100"
          height={32}
          src="/img/willa.svg"
          width={32}
        />
        <div className="font-medium font-display text-xl text-black ml-4">
          Willa
        </div>
      </a>
    </Link>
    <nav className="m-12">
      <Link href="/beta">
        <a className="bg-gradient-to-br from-red-200 to-red-300 transition-opacity hover:opacity-75 text-black hover:text-black rounded-full font-medium px-8 py-4">
          Beta
        </a>
      </Link>
    </nav>
  </header>
)
