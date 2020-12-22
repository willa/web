import Link from 'next/link'
import React, { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => (
  <footer className="flex flex-col m-12 text-sm items-center lg:items-start lg:flex-row lg:justify-between">
    <p className="text-gray-600">&copy; {new Date().getFullYear()} Willa</p>
    <nav className="flex flex-col items-center lg:items-start mt-4 lg:mt-0 lg:ml-8">
      <Link href="/beta">
        <a className="text-gray-600 hover:text-gray-800">Beta</a>
      </Link>
      <Link href="/help">
        <a className="text-gray-600 hover:text-gray-800 mt-2">Help</a>
      </Link>
      <Link href="/privacy">
        <a className="text-gray-600 hover:text-gray-800 mt-2">Privacy policy</a>
      </Link>
      <Link href="https://github.com/willa">
        <a className="text-gray-600 hover:text-gray-800 mt-2">GitHub</a>
      </Link>
    </nav>
  </footer>
)
