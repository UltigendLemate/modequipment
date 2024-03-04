import Navbar from "@/components/Navbar";
import Heading from "@/components/ui/heading";
import { items, precise } from "@/utils/imported";
import clsx from "clsx";
import Image from 'next/image';

export default function Imported() {
    return (
        <>
            <Navbar />

            <main className="bg-background">
                <Heading heading="Imported Equipments" text="Global Finds, Local Convenience: Shop Our Imported Collection!" />

                <section className="flex flex-wrap gap-10 p-8 items-center justify-center lg:w-full mx-auto">
                    {items.map((item, index) => (
                        <div key={index} className="equipmentcard bg-white flex flex-col items-center p-8 w-[18.75rem] lg:w-[18.75rem] h- lg:h-[26.25rem] rounded-md">
                            <Image src={item.company} alt={item.name} width={170} height={62} />
                            <Image src={item.image} alt={item.name} width={170} height={195} className="mb-5" />
                            <p className="text-center text-lg lg:text-xl font-semibold font-mont text-foreground">{item.name}</p>
                        </div>
                    ))}
                </section>
                <section className="flex flex-col items-center bg-white equipmentcard w-fit xl:mx-auto p-4 sm:p-8 rounded-md mt-10 mx-10">
                    <Image src="/precise.png" alt="Precise" width={170} height={62} className="mb-5" />

                    <div className="flex flex-wrap gap-5 lg:gap-10 items-center justify-center">
                        {precise.map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-5 p-4 sm:p-8 w-[18.75rem] lg:w-[21.875rem] h-[21.875rem] lg:h-[25rem] rounded-md border-2 border-[#00000019] border-solid">
                                <Image src={item.image} alt={item.name} width={260} height={300} className="w-[170px] sm:w-full"/>
                                <p className="text-center text-lg lg:text-xl font-semibold font-mont text-foreground">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col bg-white items-center equipmentcard w-fit mx-auto p-8 rounded-md mt-10 mb-10">
                    <Image src="/jendah.png" alt="Jendah" width={170} height={62} className="mb-5" />

                    <Image src="/jendah_2deck4tray.png" alt="Jendah Oven" width={710} height={528} className="w-[70vw] md:w-auto object-cover" />
                    <p className="text-center text-lg lg:text-xl font-semibold font-mont text-foreground">2 deck, 4 tray bakery oven</p>
                </section>
            </main>
        </>
    )
}
