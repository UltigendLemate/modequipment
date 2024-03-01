import Navbar from "@/components/Navbar";
import Heading from "@/components/ui/heading";

import { items, precise } from "@/utils/imported";
import { hot, cold, trolleys } from "@/utils/equipments";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import clsx from "clsx";

export default function Imported() {
    return (
        <>
            <Navbar />



            <main className="bg-background">
                <Heading heading="Our Equipments" text="Maximize Your Potential: Browse Our Equipment Range Now!" />

                <Tabs defaultValue="hot" className="w-full text-center my-7">
                    <TabsList className="mb-7">
                        <TabsTrigger value="hot" id="hotels">Hot Equipments</TabsTrigger>
                        <TabsTrigger value="cold">Cold Equipments</TabsTrigger>
                        <TabsTrigger value="trolleys">Trolleys</TabsTrigger>

                    </TabsList>
                    <TabsContent value="hot">
                        <section className=" flex flex-wrap gap-10 p-5 items-center justify-center lg:w-[90%] mx-auto">
                            {hot.map((item, index) => (
                                <div key={index} className="equipmentcard bg-white flex flex-col items-center p-8 w-[300px] lg:w-[400px] rounded-md">

                                    <img src={item.image} alt={item.name} className="w-[170px] h-[195px] lg:w-[250px] lg:h-[290px] object-cover mb-5" />
                                    <p className="text-center text-bae lg:text-lg font-semibold font-mont text-foreground">{item.name}</p>
                                </div>
                            ))}
                        </section>
                    </TabsContent>
                    <TabsContent value="cold">
                        <section className=" flex flex-wrap gap-10 p-5 items-center justify-center lg:w-[90%] mx-auto">
                            {cold.map((item, index) => (
                                <div key={index} className="equipmentcard bg-white flex flex-col items-center p-8 w-full lg:w-[530px] rounded-md mx-5 sm:mx-16 lg:mx-0">
                                    <img src={item.image} alt={item.name} className="w-full lg:h-[280px] object-cover mb-5" />
                                    <p className="text-center text-bae lg:text-lg font-semibold font-mont text-foreground">{item.name}</p>
                                </div>
                            ))}
                        </section>
                    </TabsContent>

                    <TabsContent value="trolleys">
                        <section className=" flex flex-wrap gap-10 p-5 items-center justify-center lg:w-[90%] mx-auto">
                            {trolleys.map((item, index) => (
                                <div key={index} className="equipmentcard bg-white flex flex-col items-center p-8 w-[300px] lg:w-[400px] rounded-md">

                                    <img src={item.image} alt={item.name} className="w-[170px] h-[195px] lg:w-[250px] lg:h-[290px] object-cover mb-5" />
                                    <p className="text-center text-bae lg:text-lg font-semibold font-mont text-foreground">{item.name}</p>
                                </div>
                            ))}
                        </section>
                    </TabsContent>
                </Tabs>
            </main>
        </>
    )
}