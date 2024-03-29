
import Navbar from "@/components/Navbar";
import Heading from "@/components/ui/heading";

export default function Contact() {

    return (
        <>
            <Navbar />

            <section className="container mx-auto px-4 py-8">

                <Heading text='Feel free to teach out to us' heading='Contact Us' />
                <div className='flex flex-col lg:flex-row  gap-10 items-center justify-around mt-3'>
                    <div className=' rounded-md overflow-hidden flex-shrink w-full md:w-[45rem] lg:w-[55rem] h-[20rem] sm:h-[25rem] md:h-[28rem] lg:h-[32rem]'>
                        <iframe
                            width="100%"
                            height="100%"
                            
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=3A,%20Street%20NO.4,%20Block%20NO.%20RZ,%20Anand%20Parbat%20Industrial%20Area%20New%20Delhi-110005+(Modequipments)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                        >
                        </iframe>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-7 items-center'>
                            <div className='w-[3.4rem] h-[3.4rem] sm:w-[4.1rem] sm:h-[4.1rem] rounded-full bg-primary flex items-center justify-center flex-shrink-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-[40%]'><path className="fill-background" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                            </div>
                            <div className=''>
                                <p className='text-muted-foreground text-xl md:text-2xl font-mont'>Address</p>
                                <p className='text-foreground text-base font-mont font-semibold'>3A, Street NO.4, Block NO. RZ, Anand Parbat Industrial Area, New Delhi-110005</p>
                            </div>
                        </div>
                        <div className='flex gap-7 items-center'>
                            <div className='w-[3.4rem] h-[3.4rem] sm:w-[4.1rem] sm:h-[4.1rem] rounded-full bg-primary flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-[50%]'><path className="fill-background" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                            </div>
                            <div className=''>
                                <p className='text-muted-foreground text-xl md:text-2xl font-mont'>Email</p>
                                <p className='text-foreground text-base sm:text-lg md:text-xl font-mont font-semibold'>modequipment@yahoo.co.uk</p>
                            </div>
                        </div>

                        <div className='flex gap-7 items-center'>
                            <div className='w-[3.4rem] h-[3.4rem] sm:w-[4.1rem] sm:h-[4.1rem] rounded-full bg-primary flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-[40%]'><path className="fill-background" d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>
                            </div>
                            <div className=''>
                                <p className='text-muted-foreground text-xl md:text-2xl font-mont'>Mobile</p>
                                <p className='text-foreground text-base sm:text-lg md:text-xl font-mont font-semibold'>+91-9811085683</p>
                            </div>
                        </div>

                        <div className='flex gap-7 items-center'>
                            <div className='w-[3.4rem] h-[3.4rem] sm:w-[4.1rem] sm:h-[4.1rem] rounded-full bg-primary flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-[45%]'><path className="fill-background" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                            </div>
                            <div className=''>
                                <p className='text-muted-foreground text-xl md:text-2xl font-mont'>Telephone</p>
                                <p className='text-foreground text-base sm:text-lg md:text-xl font-mont font-semibold'>+91-11-28763958,28762343</p>
                            </div>
                        </div>

                        <div className='flex gap-7 items-center'>
                            <div className='w-[3.4rem] h-[3.4rem] sm:w-[4.1rem] sm:h-[4.1rem] rounded-full bg-primary flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-[45%]'><path className="fill-background" d="M128 64v96h64V64H386.7L416 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L432 18.7C420 6.7 403.7 0 386.7 0H192c-35.3 0-64 28.7-64 64zM0 160V480c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zm480 32H128V480c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM256 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM224 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                            </div>
                            <div className=''>
                                <p className='text-muted-foreground text-xl md:text-2xl font-mont'>Fax</p>
                                <p className='text-foreground text-base sm:text-lg md:text-xl font-mont font-semibold'>+91-11-28762342</p>
                            </div>
                        </div>




                    </div>
                </div>



            </section>
        </>
    )
}