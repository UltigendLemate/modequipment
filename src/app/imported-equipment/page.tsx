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
                <Heading heading="Imported Equipments" text="Shop Our Imported Collection!" />

                <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-8 items-center justify-center w-full sm:w-fit mx-auto">
                    {items.map((item, index) => (
                        <div key={index} className="equipmentcard bg-white flex flex-col justify-between items-center p-8 w-full sm:w-[16rem] lg:w-[18rem] h-full rounded-md">
                            <Image src={item.company} alt={item.name} width={140} height={62} className=""/>
                            <Image src={item.image} alt={item.name} width={170} height={195} className="mb-5 " />
                            <p className="text-center text-lg lg:text-xl font-semibold font-mont text-foreground">{item.name}</p>
                        </div>
                    ))}
                </section>
                <section className="flex flex-col items-center bg-white equipmentcard w-full sm:w-fit mx-auto p-4 sm:p-8 rounded-md mt-10">
                    <Image src="/precise.png" alt="Precise" width={170} height={62} className="mb-5" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
                        {precise.map((item, index) => (
                            <div key={index} className="flex flex-col justify-between items-center gap-5 p-4 sm:p-8 w-[16rem] lg:w-[20rem] h-full rounded-md border-2 border-[#00000019] border-solid">
                                <Image src={item.image} alt={item.name} width={260} height={300} />
                                <p className="text-center text-lg lg:text-xl font-semibold font-mont text-foreground">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col bg-white items-center equipmentcard w-fit mx-auto p-8 rounded-md mt-10 mb-10">
                    <Image src="/jendah.png" alt="Jendah" width={170} height={62} className="mb-5" />

                    <Image src="/jendah_2deck4tray.png" alt="Jendah Oven" width={710} height={528} className="w-[70vw] md:w-auto " />
                    <p className="text-center text-lg lg:text-xl font-semibold font-mont text-foreground">2 deck, 4 tray bakery oven</p>
                </section>
            </main>
        </>
    )
}
