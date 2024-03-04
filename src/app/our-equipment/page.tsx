'use client'

import Navbar from "@/components/Navbar";
import Heading from "@/components/ui/heading";
import { hot, cold, trolleys } from "@/utils/equipments";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect } from "react";
import Image from 'next/image';

export default function Imported() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    const handleTabChange = () => {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <Navbar />

            <main className="bg-background">
                <Heading heading="Our Equipments" text="Maximize Your Potential: Browse Our Equipment Range Now!" />

                <Tabs defaultValue="hot" className="w-full text-center my-7" onValueChange={handleTabChange}>
                    <TabsList className="mb-7">
                        <TabsTrigger value="hot" id="hot">Hot Equipments</TabsTrigger>
                        <TabsTrigger value="cold" id="cold">Cold Equipments</TabsTrigger>
                        <TabsTrigger value="trolleys" id="trolleys">Trolleys</TabsTrigger>
                    </TabsList>
                    <TabsContent value="hot">
                        <section className="flex flex-wrap gap-10 p-5 items-center justify-center lg:w-[90%] mx-auto">
                            {hot.map((item, index) => (
                                <div key={index} className="equipmentcard bg-white flex flex-col items-center p-8 w-[18.75rem] lg:w-[25rem] rounded-md">
                                    <Image src={item.image} alt={item.name} width={250} height={290} className="mb-5" />
                                    <p className="text-center text-bae lg:text-lg font-semibold font-mont text-foreground">{item.name}</p>
                                </div>
                            ))}
                        </section>
                    </TabsContent>
                    <TabsContent value="cold">
                        <section className="flex flex-wrap gap-10 p-5 items-center justify-center lg:w-[90%] mx-auto">
                            {cold.map((item, index) => (
                                <div key={index} className="equipmentcard bg-white flex flex-col items-center p-8 w-full lg:w-[33.125rem] rounded-md mx-5 sm:mx-16 lg:mx-0">
                                    <Image src={item.image} alt={item.name} width={530} height={280} className="object-cover mb-5" />
                                    <p className="text-center text-bae lg:text-lg font-semibold font-mont text-foreground">{item.name}</p>
                                </div>
                            ))}
                        </section>
                    </TabsContent>
                    <TabsContent value="trolleys">
                        <section className="flex flex-wrap gap-10 p-5 items-center justify-center lg:w-[90%] mx-auto">
                            {trolleys.map((item, index) => (
                                <div key={index} className="equipmentcard bg-white flex flex-col items-center p-8 w-[18.75rem] lg:w-[25rem] rounded-md">
                                    <Image src={item.image} alt={item.name} width={250} height={290} className="mb-5" />
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
