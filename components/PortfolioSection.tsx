
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import { Dialog, DialogOverlay, DialogContent, DialogTitle } from '@radix-ui/react-dialog';

// Dynamically import the React Photo Viewer library
// const Viewer = dynamic(() => import('react-viewer'), { ssr: false });

const categories: { name: string; id: 'wedding' | 'corporate' | 'podcast' }[] = [
  { name: 'Wedding', id: 'wedding' },
  { name: 'Corporate', id: 'corporate' },
  { name: 'Podcast', id: 'podcast' },
];

// Example images for each category
const categoryImages = {
  wedding: [
    { src: '/bg1.jpg', alt: 'Wedding Image 1' },
    { src: '/bg1.jpg', alt: 'Wedding Image 1' },
    { src: '/bg1.jpg', alt: 'Wedding Image 1' },
    { src: '/images/wedding2.jpg', alt: 'Wedding Image 2' },
    { src: '/images/wedding3.jpg', alt: 'Wedding Image 3' },
  ],
  corporate: [
    { src: '/images/corporate1.jpg', alt: 'Corporate Image 1' },
    { src: '/images/corporate2.jpg', alt: 'Corporate Image 2' },
    { src: '/images/corporate3.jpg', alt: 'Corporate Image 3' },
  ],
  podcast: [
    { src: '/images/podcast1.jpg', alt: 'Podcast Image 1' },
    { src: '/images/podcast2.jpg', alt: 'Podcast Image 2' },
    { src: '/images/podcast3.jpg', alt: 'Podcast Image 3' },
  ],
};

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<'wedding' | 'corporate' | 'podcast'>('wedding');
    const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeViewer = () => setIsOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % categoryImages[activeCategory].length);

  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + categoryImages[activeCategory].length) % categoryImages[activeCategory].length);

  };

  
  


  return (
    <section className="bg-sky-950 text-amber-100  min-h-screen flex flex-col items-center py-5">
      <div className=" mx-auto px-6 mt-4">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Portfolio of our Best Photography Services in Karachi
        </h2>
        <p className="text-center text-lg md:text-xl mt-4">
          Karachi’s leading photographers, passionate about capturing your
          special day and its timeless moments. Explore our diverse categories
          below.
        </p>
</div>
<div className='w-[90%] flex flex-col mx-auto mt-5'>
        {/* Categories */}
        <div className=" container flex justify-center space-x-6 mt-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              className={`text-lg font-semibold pb-2 border-b-4 ${
                activeCategory === category.id
                  ? 'border-amber-100 text-amber-100'
                  : 'border-transparent text-amber-100/70 hover:text-amber-100 hover:border-amber-100'
              } transition`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
          </div>
        
        

        {/* Images */}
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6  items-center place-items-center mt-10">
          {categoryImages[activeCategory].map((image, index) => (
            <div
              key={index}
              className=" cursor-pointer   aspect-[2/3] w-full relative overflow-hidden "
              onClick={() => openViewer(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="w-full h-full  transition-transform duration-300 group-hover:scale-105 group-hover:opacity-80"
                
              />
              
            
            </div>
          ))}
        </div>
        </div>
      

        
        {/* Image Viewer Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-70" />
        <DialogContent className="fixed inset-0 flex items-center justify-center">
          {/* Accessible Title */}
          <DialogTitle className="sr-only">Image Viewer</DialogTitle>
          <div className="relative">
            <Image
              src={categoryImages[activeCategory][currentIndex].src}
              alt={categoryImages[activeCategory][currentIndex].alt}
              className="rounded-lg max-w-[90vw] max-h-[80vh] object-contain"
              width={800}
              height={800}
            />
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={closeViewer}
            >
              ✕
            </button>
            <button
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl"
              onClick={prevImage}
            >
              ←
            </button>
            <button
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl"
              onClick={nextImage}
            >
              →
            </button>
          </div>
        </DialogContent>
      </Dialog>
      

    </section>
  );
}







// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import { Dialog, DialogContent, DialogOverlay, DialogTitle } from '@radix-ui/react-dialog';

// const images = [
//   { src: '/bg1.jpg', alt: 'Image 1' },
//   { src: '/images/image2.jpg', alt: 'Image 2' },
//   { src: '/images/image3.jpg', alt: 'Image 3' },
// ];

// export default function PhotoGallery() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const openViewer = (index: number) => {
//     setCurrentIndex(index);
//     setIsOpen(true);
//   };

//   const closeViewer = () => setIsOpen(false);

//   const nextImage = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="bg-gray-100 py-12">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-6">Photo Gallery</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="group relative cursor-pointer overflow-hidden rounded-lg"
//               onClick={() => openViewer(index)}
//             >
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                 width={500}
//                 height={500}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Image Viewer Modal */}
//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogOverlay className="fixed inset-0 bg-black bg-opacity-70" />
//         <DialogContent className="fixed inset-0 flex items-center justify-center">
//           {/* Accessible Title */}
//           <DialogTitle className="sr-only">Image Viewer</DialogTitle>
//           <div className="relative">
//             <Image
//               src={images[currentIndex].src}
//               alt={images[currentIndex].alt}
//               className="rounded-lg max-w-[90vw] max-h-[80vh] object-contain"
//               width={800}
//               height={800}
//             />
//             <button
//               className="absolute top-2 right-2 text-white text-xl"
//               onClick={closeViewer}
//             >
//               ✕
//             </button>
//             <button
//               className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl"
//               onClick={prevImage}
//             >
//               ←
//             </button>
//             <button
//               className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl"
//               onClick={nextImage}
//             >
//               →
//             </button>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
