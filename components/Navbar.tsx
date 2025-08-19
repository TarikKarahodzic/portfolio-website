'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className=" fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-moss">My Portfolio</span>
        </Link>

        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div
          className={`${isOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 rounded md:p-0 text-xl ${pathname === "/"
                  ? "text-primary md:bg-transparent"
                  : "hover:bg-primary md:hover:bg-transparent dark:text-moss dark:hover:text-primary"
                  }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-2 px-3 rounded md:p-0 text-xl ${pathname === "/about"
                  ? "text-primary md:bg-transparent"
                  : "hover:bg-primary md:hover:bg-transparent dark:text-moss dark:hover:text-primary"
                  }`}
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`block py-2 px-3 rounded md:p-0 text-xl ${pathname === "/projects"
                  ? "text-primary md:bg-transparent"
                  : "hover:bg-primary md:hover:bg-transparent dark:text-moss dark:hover:text-primary"
                  }`}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
