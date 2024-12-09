
import React from 'react'
import { Button } from './ui/button'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import { Menu } from 'lucide-react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
  

const Navbar = () => {
  return (
    <nav>
       <div className='w-full px-4   shadow-md flex justify-between items-center bg-sky-950 h-24'>
        {/* Logo */}
      <div className="text-2xl font-bold  flex gap-0 ">
        <Image
          src="/logowithoutbackground.png"
          alt="FM Studio Logo"
          width={150}
          height={150}
          // className="max-h-12 object-contain"
        />
       
      </div>
       
      {/* Navigation Links */}
      <ul className="hidden sm:flex space-x-6 text-gray-700 bg-amber-100 pt-5 m-4 pb-5  px-10 rounded-xl" >
        <li>
            <Link href="/" className="hover:text-gray-900 transition text-lg font-body font-medium">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-900 transition text-lg font-body font-medium">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-gray-900 transition text-lg font-body font-medium">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-900 transition text-lg font-body font-medium">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu for Mobile */}
      <div className="sm:hidden text-amber-100">
      <Sheet >
  <SheetTrigger>
 <Menu/>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
    </SheetHeader>
    <SheetDescription>
    <Button
        asChild
        className="flex items-center gap-2 bg-green-500 text-white hover:bg-green-600"
      >
        <a
          href="https://wa.me/<YOUR_PHONE_NUMBER>?text=Hi! Let's Talk."
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={18} /> Let&apos;s Talk
        </a>
      </Button>
    </SheetDescription>
    <ul className="flex flex-col items-center space-y-4 text-amber-100">
        <li>
            <Link href="/" className="hover:text-gray-900 transition font-body ">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-amber-200 tansition font-body">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-gray-900 transition font-body">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-900 transition font-body">
            Contact
          </Link>
        </li>
      </ul>
    
  </SheetContent>
</Sheet>

       </div>

      {/* WhatsApp Button */}
      <Button
        asChild
        className="hidden sm:flex items-center gap-2 bg-green-500 text-white hover:bg-green-600"
      >
        <a
          href="https://wa.me/<YOUR_PHONE_NUMBER>?text=Hi! Let's Talk."
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={18} /> Let&apos;s Talk
        </a>
      </Button>
       </div>
    </nav>
  )
}

export default Navbar