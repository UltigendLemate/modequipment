'use client'
import { HeroParallax } from '@/components/ui/hero-parallax';
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';




const slides = [
  {
    title: "Crafting Culinary Dreams, One Kitchen at a Time",
    subtitle: "Innovative Solutions for Every Budget.",
    image: "/3.png"
  },
  {
    title: "Expert Design & Installation",
    subtitle: "Your One-Stop Shop for Commercial Kitchens.",
    image: "/4.jpg"
  },
  {
    title: "Global Sourcing, Local Expertise",
    subtitle: "Equipment Solutions for Every Need.",
    image: "/1.png"
  },
  {
    title: "Build the Kitchen of Your Dreams",
    subtitle: "Trusted Partner from Start to Finish.",
    image: "/2.png"
  },

]



export default function Home() {
  return (
    <main className="bg-background text-foreground ">
      <Navbar />

      {/* <HeroParallax products = {products}/> */}

      <section className='w-full h-screen'>
        <Swiper pagination={{ clickable: true }} modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true} className="h-[90vh]">
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="h-full w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}>
                <div className='absolute top-0 left-0 z-[5] bg-blue-950 w-full h-full opacity-55' />
                <div className="h-full w-full flex flex-col justify-center items-center md:text-center px-5 space-y-2 md:space-y-5">
                  <h1 className="md:text-6xl text-2xl text-[29px] font-bold text-white z-10">{slide.title}</h1>
                  <p className="md:text-2xl text-md w-full text-white z-10">{slide.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      

    </main>
  );
}
