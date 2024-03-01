import Navbar from "@/components/Navbar";
import Heading from "@/components/ui/heading";

import { items, precise } from "@/utils/imported";
import { hot, cold } from "@/utils/equipments";
import clsx from "clsx";

export default function Imported() {
    return (
        <>
            <Navbar />

            <main className="bg-background">
                <Heading heading="Our Equipments" text="Maximize Your Potential: Browse Our Equipment Range Now!" />

                <section className=" flex flex-wrap gap-10 p-5 items-center justify-center lg:w-[90%] mx-auto">
                    {hot.map((item, index) => (
                        <div key={index} className="equipmentcard bg-white flex flex-col items-center p-8 w-[300px] lg:w-[400px] rounded-md">

                            <img src={item.image} alt={item.name} className="w-[170px] h-[195px] lg:w-[250px] lg:h-[290px] object-cover mb-5" />
                            <p className="text-center text-bae lg:text-lg font-semibold font-mont text-foreground">{item.name}</p>
                        </div>
                    ))}
                </section>

                <section className=" flex flex-wrap gap-10 p-5 items-center justify-center lg:w-[90%] mx-auto">
                    {cold.map((item, index) => (
                        <div key={index} className="equipmentcard bg-white flex flex-col items-center p-8 w-full lg:w-[530px] rounded-md sm:mx-16 lg:mx-0">
                            <img src={item.image} alt={item.name} className="w-full lg:h-[280px] object-cover mb-5" />
                            <p className="text-center text-bae lg:text-lg font-semibold font-mont text-foreground">{item.name}</p>
                        </div>
                    ))}
                </section>

            </main>
        </>
    )
}