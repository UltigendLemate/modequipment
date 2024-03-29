'use client'
import { HeroParallax } from '@/components/ui/hero-parallax';
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { slides, whyus, testimonials } from '@/utils/home';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Heading from '@/components/ui/heading';
import Link from 'next/link';








export default function Home() {
  return (
    <main className="bg-background text-foreground ">
      <Navbar />

      {/* <HeroParallax products = {products}/> */}

      <section className='w-full -z-10'>
        <Swiper pagination={{ clickable: true }} modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
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
        <Heading heading='About Us' text='What is Mod Equipment all about?' />
        <div className='flex flex-col md:flex-row px-5 md:px-10 gap-8 '>
          <Image src='/5.jpg' width={600} height={1000} alt="about us image" />

          <div className='flex flex-col justify-center'>
            <p className='text-lg'>MOD Kitchen Equipment Pvt Ltd is a top player in the category Kitchen Equipment Dealers in the Delhi. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Delhi. Over the course of its journey, this business has established a firm foothold in its industry. <br /> <br />The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company.</p>
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


      <section className='bg-background max-w-screen-xl mx-auto'>
        <Heading heading='Why us?' text='Why is Mod Equipment the best?' />
        <div className="md:flex grid grid-cols-2 md:flex-row md:flex-wrap md:gap-16 gap-5 px-5 justify-center ">
          {whyus.map((item, index) => (
            <div key={index} className='flex flex-col items-center gap-3'>
              <div className='md:w-[220px] w-full px-4 aspect-square'>
                <lord-icon
                  src={`https://cdn.lordicon.com/${item.icon}.json`}
                  trigger="loop"
                  delay="1000"
                  colors="primary:#303192,secondary:#242424"
                  style={{ width: '100%', height: '100%' }}
                />

              </div>
              <h5 className='text-base md:text-2xl font-medium text-center'>{item.title}</h5>
            </div>
          ))}
        </div>


      </section>


      <section className='my-40 max-w-screen-xl mx-auto'>


        <Heading text='What Our Clients Say' heading='testimonials' />
        <div className='columns-3 space-y-6'>
          {testimonials.map((t, index) => (
            <div key={index} className='  p-6 bg-accent border-2 rounded-lg shadow-md'>
              <p className='text-card-foreground'>{t.text}</p>
              <div className=''>
                <p className='font-medium text-primary'>- {t.name}, {t.designation}</p>
              </div>
            </div>
          )
          )}
        </div>

      </section>



      <section className='h-screen w-full'></section>


      <section className="container mx-auto px-4 py-8">

        <Heading text='Feel free to teach out to us' heading='Contact Us' />

        {/* <form className='w-[60%] mx-auto'>
          <div className='flex gap-3 w-full'>
            <div className="mb-3 w-full ">
              <input
                className="appearance-none rounded-md w-full text-foreground border border-muted-foreground py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-2"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-3 w-full">
              <input
                className="appearance-none rounded-md block w-full text-foreground border border-muted-foreground py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-2"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="mb-3">
            <textarea
              className="appearance-none rounded-md block w-full text-foreground border border-muted-foreground py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-2"
              id="message"
              rows={6}
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-primary hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl w-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form> */}



        <div className='flex gap-10 items-center justify-around mt-3'>
          <Image src='/contactus.png' width={1000} height={600} alt="contact us image" className='w-[30rem] h-fit hidden lg:block'/>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-7 items-center'>
              <div className='w-[4rem] h-[4rem] sm:w-[5.6rem] sm:h-[5.6rem] rounded-full bg-primary flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-[50%]'><path fill="#e0e0e0" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
              </div>
              <div className=''>
                <p className='text-muted-foreground text-xl md:text-2xl font-mont'>Email</p>
                <p className='text-foreground text-base sm:text-lg md:text-xl font-mont font-semibold'>modequipment@yahoo.co.uk</p>
              </div>
            </div>

            <div className='flex gap-7 items-center'>
              <div className='w-[4rem] h-[4rem] sm:w-[5.6rem] sm:h-[5.6rem] rounded-full bg-primary flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-[45%]'><path fill="#e0e0e0" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
              </div>
              <div className=''>
                <p className='text-muted-foreground text-xl md:text-2xl font-mont'>Telephone</p>
                <p className='text-foreground text-base sm:text-lg md:text-xl font-mont font-semibold'>+91-11-28763958,28762343</p>
              </div>
            </div>

            <div className='flex gap-7 items-center'>
              <div className='w-[4rem] h-[4rem] sm:w-[5.6rem] sm:h-[5.6rem] rounded-full bg-primary flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-[45%]'><path fill="#e0e0e0" d="M128 64v96h64V64H386.7L416 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L432 18.7C420 6.7 403.7 0 386.7 0H192c-35.3 0-64 28.7-64 64zM0 160V480c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zm480 32H128V480c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM256 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM224 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
              </div>
              <div className=''>
                <p className='text-muted-foreground text-xl md:text-2xl font-mont'>Fax</p>
                <p className='text-foreground text-base sm:text-lg md:text-xl font-mont font-semibold'>+91-11-28762342</p>
              </div>
            </div>

            <div className='flex gap-7 items-center'>
              <div className='w-[4rem] h-[4rem] sm:w-[5.6rem] sm:h-[5.6rem] rounded-full bg-primary flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-[40%]'><path fill="#e0e0e0" d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>
              </div>
              <div className=''>
                <p className='text-muted-foreground text-xl md:text-2xl font-mont'>Mobile</p>
                <p className='text-foreground text-base sm:text-lg md:text-xl font-mont font-semibold'>+91-9811085683</p>
              </div>
            </div>

            <div className='flex gap-7 items-center'>
              <div className='w-[4rem] h-[4rem] sm:w-[5.6rem] sm:h-[5.6rem] rounded-full bg-primary flex items-center justify-center flex-shrink-0'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-[40%]'><path fill="#e0e0e0" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
              </div>
              <div className=''>
                <p className='text-muted-foreground text-xl md:text-2xl font-mont'>Address</p>
                <p className='text-foreground text-base font-mont font-semibold'>3A, Street NO.4, Block NO. RZ, Anand Parbat Industrial Area <br /> New Delhi-110005</p>
              </div>
            </div>
          </div>
        </div>



      </section>



    </main>
  );
}
