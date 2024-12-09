'use client'

import Image from 'next/image'
import React, { use, useEffect, useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const HeroSection = () => {
    const images=[
        '/bg1.jpg',
        '/bg2.jpg',
        '/_MG_0029.JPG',
        '/drone.jpg',
        '/bg3.jpg'

    ]
    const [currentImageIndex,setCurrentImageIndex]=useState(0)
    const [fadeIn,setFadeIn]=useState(false)
    useEffect(()=>{
      const interval=setInterval(()=>{
        setCurrentImageIndex((prevIndex)=>(prevIndex+1)%images.length)
      },5000)
      return()=>clearInterval(interval)

    },[images.length])

    useEffect(()=>{
      setFadeIn(true);
      const timer=setTimeout(() => setFadeIn(false), 2000)
      return () => clearTimeout(timer)
    },[currentImageIndex])
  return (
    <section>
      <div className='relative w-full min-h-screen flex items-center justify-center'>
    {/* background image */}
    <div className='absolute inset-0 z-0'>
      <Image
      src={images[currentImageIndex]}
      alt='background'
      layout='fill'
      className={`object-cover transition-opacity duration-4000 ${fadeIn ? 'fade-in' : ''}`}
      />
      <div className="absolute inset-0 bg-black opacity-50" /> {/* Overlay */}
    </div>
    {/* hero content */}
    <div className='relative z-10 flex flex-col items-center justify-center h-[50%] text-center text-amber-100 px-4 w-[50]%'>
      <h1 className="text-3xl font-bold md:text-5xl xl:text-6xl font-heading ">FM Studio Production</h1>
      <p className="mt-4 text-lg md:text-2xl font-body">Event Photography & Videography Studio Where We Offer Memories For Every One</p>
   
<Button
asChild
className='mt-6 flex items-center gap-2 bg-amber-100 text-sky-950  text-base font-bold  border-2 border-amber-100 shadow-lg transition duration-300 hover:bg-amber-100 hover:text-sky-950 hover:shadow-[0_0_20px_5px_rgba(255,255,0,0.4)]'>
  <Link  href="https://wa.me/<YOUR_PHONE_NUMBER>?text=Hi! I'm interested in your services." target="_blank" rel="noopener noreferrer">
  
  <FaWhatsapp size={25}  />
  
   WhatsApp Us
 
    </Link>
    
</Button>
</div>
      </div>
    </section>
  )
}

export default HeroSection