import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'


const OurServices:React.FC = () => {
    const catogries=[
      {
        title:"Wedding",
        image:"/_MG_0029.JPG",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      },
      {
        title:"Wedding",
        image:"/images/wedding.jpg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      },
      {
        title:"Wedding",
        image:"/images/wedding.jpg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      },
    ]
  return (
    <section className='bg-sky-950 text-amber-100 py-16 min-h-screen'>
      <div className=" container  text-center text-amber-100 px-4 w-[70%] mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:4xl font-bold mt-0 ">Our Services</h1>
        <h2 className=" mb-6 mt-4 text-3xl md:text-4xl font-extrabold tracking-wide font-heading ">Best Wedding Photography in Karachi</h2>
        <p className=" mx-1 px-1 text-base md:text-lg font-light leading-relaxed font-body mb-1">
        At Bluesky Production, we take pride in having Karachi&ops; most celebrated wedding photographers. 
          We recognize the immense importance of capturing your special day and deliver exceptional service to 
          preserve its most precious moments.
        </p>

      </div>
      
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 w-[60%] mx-auto">
        {catogries.map((catagrie,index)=>(
        
      <Card key={index} className="h-full w-full max-w-sm mx-auto group overflow-hidden border border-transparent rounded-lg bg-sky-950 hover:border-amber-100 transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_20px_5px_rgba(255,255,0,0.2)]">
 
  <CardHeader>
  <div className="aspect-[4/5] relative overflow-hidden">
    <Image
    src={catagrie.image}
    alt={catagrie.title}
    layout='fill'
    className='object-cover w-full   group-hover:scale-105 transition-transform duration-300'
    />
    </div>
    
  </CardHeader>
  <CardContent className='flex items-center mt-2 flex-col'>
  
    <CardTitle>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
      <h3 className="text-amber-100 text-2xl font-bold group-hover:text-amber-200 transition-colors duration-300">{catagrie.title}</h3>
    
    </CardTitle>
    <CardDescription >Card Description</CardDescription>
  </CardContent>
  
</Card>
))}

      </div>
    </section>
  )
}

export default OurServices