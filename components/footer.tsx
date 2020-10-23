import Link from 'next/link'
import React, { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => (
  <footer className="flex flex-col p-12 text-sm items-center lg:items-start lg:flex-row lg:justify-between">
    <p className="text-gray-700">&copy; {new Date().getFullYear()} / Willa</p>
    <nav className="flex flex-col items-center lg:items-start mt-4 lg:mt-0 lg:ml-8">
      <Link href="/help">
        <a className="text-gray-700 hover:text-gray-800 duration-200">Help</a>
      </Link>
      <Link href="/roadmap">
        <a className="text-gray-700 hover:text-gray-800 duration-200 mt-2">
          Roadmap
        </a>
      </Link>
      <Link href="/privacy">
        <a className="text-gray-700 hover:text-gray-800 duration-200 mt-2">
          Privacy policy
        </a>
      </Link>
    </nav>
  </footer>
)
