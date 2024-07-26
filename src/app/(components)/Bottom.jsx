import React from 'react'
import Link from 'next/link'

const Bottom = () => {
  return (
    <footer className="  shadow bg-black text-white">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <Link
        href="/"
        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      >
        <img src="/logo.png" className='w-[10%]' alt="" />
      </Link>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <Link href="/" className="hover:underline text-white me-4 md:me-6">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline text-white me-4 md:me-6">
            About
          </Link>
        </li>
        <li>
          <Link href="/s/all" className="hover:underline text-white me-4 md:me-6">
          Listings
          </Link>
        </li>
        <li>
          <Link href="/register" className="hover:underline text-white">
            Register
          </Link>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-hray-200 sm:text-center dark:text-gray-400">
      © 2024{" "}
      <a href="https://flowbite.com/" className="hover:underline">
        AlbaniaRentalTourism
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>

  )
}

export default Bottom