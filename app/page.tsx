import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import PortfolioSection from "@/components/PortfolioSection";


export default function Home() {
  return (
    <div className="min-h-screen">
   <Navbar/>
   <HeroSection/>
   <OurServices/>
   <PortfolioSection/>
   </div>
  );
}
