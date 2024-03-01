import Navbar from "@/components/Navbar";
import Heading from "@/components/ui/heading";

import { items, precise } from "@/utils/imported";
import clsx from "clsx";

export default function Imported() {
    return (
        <>
            <Navbar />

            <main>
                <Heading heading="Our Equipments" text="Maximize Your Potential: Browse Our Equipment Range Now!" />

                <section className=" flex flex-wrap gap-10 p-5 items-center justify-center lg:w-[90%] mx-auto">
                    {items.map((item, index) => (
                        <div key={index} className="clientcard flex flex-col items-center p-8 w-[300px] lg:w-[300px] h- lg:h-[420px] rounded-md">
                            <img src={item.company} alt={item.name} className="w-[100px] h-[37px] lg:w-[170px] lg:h-[62px] object-cover" />
                            <img src={item.image} alt={item.name} className="w-[170px] h-[195px] lg:w-[200px] lg:h-[230px] object-cover mb-5" />
                            <p className="text-center text-lg lg:text-xl font-semibold font-mont text-foreground">{item.name}</p>
                        </div>
                    ))}
                </section>
                <section className="flex flex-col items-center clientcard w-fit xl:mx-auto p-8 rounded-md mt-10 mx-10">
                    <img src="/precise.png" alt="Precise" className="w-[100px] h-[37px] lg:w-[170px] lg:h-[62px] object-cover mb-5" />

                    <div className="flex flex-wrap gap-5 lg:gap-10 items-center justify-center">
                        {precise.map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-5 p-8 w-[300px] lg:w-[350px] h-[350px]  lg:h-[400px] rounded-md border-2 border-[#00000019] border-solid">
                                <img src={item.image} alt={item.name} className="w-[200px] h-[230px] lg:w-[260px] lg:h-[300px] object-cover" />
                                <p className="text-center text-lg lg:text-xl font-semibold font-mont text-foreground">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col items-center clientcard w-fit mx-auto p-8 rounded-md mt-10 mb-10">
                    <img src="/jendah.png" alt="Jendah" className="w-[100px] h-[37px] lg:w-[170px] lg:h-[62px] object-cover mb-5" />

                    <img src="/jendah_2deck4tray.png" alt="Jendah Oven" className="w-[270px] sm:w-[300px] md:w-[50vw] object-cover" />
                    <p className="text-center text-lg lg:text-xl font-semibold font-mont text-foreground">2 deck, 4 tray bakery oven</p>
                </section>
            </main>
        </>
    )
}