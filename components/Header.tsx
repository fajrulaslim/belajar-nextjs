import React from 'react'
import Link from "next/link"

function Header() {
  return (
    <header className='p-2 bg-blue-200 mb-4'>
      <div className="container mx-auto">
        <ul className='flex'>
          <li className='mr-3'><Link href="/">Home</Link></li>
          <li className='mr-3'><Link href="/blogs">Blog</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header