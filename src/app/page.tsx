'use client'
import { HeroParallax } from '@/components/ui/hero-parallax';
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Heading from '@/components/ui/heading';
import Link from 'next/link';




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

      <section className='w-full '>
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


     

      <section >
        <Heading heading='About Us' text='What is Mod Equipment all about?'/>
        <div className='flex flex-col md:flex-row px-5 md:px-10 gap-8 '>
        <Image src='/5.jpg' width={600} height={1000} alt="about us image"/>

<div className='flex flex-col justify-center'>
          <p className='text-lg'>MOD Kitchen Equipment Pvt Ltd is a top player in the category Kitchen Equipment Dealers in the Delhi. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Delhi. Over the course of its journey, this business has established a firm foothold in its industry. <br/> <br/>The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company.</p>
            <div className='flex md:gap-7 gap-3 my-5 text-center flex-col md:flex-row text-secondary text-lg '>
              <Link href={'/e-catalog'} className='bg-foreground px-5 py-2 rounded-md md:w-2/5'>Read More</Link>
              <Link href={'/contact'} className='bg-primary px-5 py-2 rounded-md md:w-2/5'>Contact Us</Link>
            </div>
          </div>

        </div>
      </section>

      <section className='my-10 md:my-24'>
        <div className='mx-auto max-w-screen-xl px-10 bg-primary h-60 md:h-52 text-secondary md:text-4xl text-2xl text-center flex justify-center items-center'>
          <h3>We produce solutions with our products for the commercial kitchens of more than <b>130</b> countries in <b>5</b> continents.</h3>
        </div>
      </section>



      <section className='h-screen w-full'></section>
    

      

    </main>
  );
}
