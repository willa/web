import Link from 'next/link'
import React, { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => (
  <footer className="flex flex-col m-12 text-sm items-center lg:items-start lg:flex-row lg:justify-between">
    <div className="text-gray-600">
      <p>&copy; {new Date().getFullYear()} Willa</p>
      <div className="flex items-center mt-2">
        <a
          href="https://vercel.com/?utm_source=willapay&amp;utm_campaign=oss"
          rel="noreferrer"
          target="_blank">
          <img src="/img/powered-by-vercel.svg" />
        </a>
      </div>
    </div>

    <nav className="flex flex-col items-center lg:items-start mt-8 lg:mt-0">
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
