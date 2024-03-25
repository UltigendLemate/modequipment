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
                <Heading heading="Our Equipments" text="Browse Our Equipment" />

                <Tabs defaultValue="hot" className="w-full text-center my-7" onValueChange={handleTabChange}>
                    <TabsList className="mb-7">
                        <TabsTrigger value="hot" id="hot">Hot Equipments</TabsTrigger>
                        <TabsTrigger value="cold" id="cold">Cold Equipments</TabsTrigger>
                        <TabsTrigger value="trolleys" id="trolleys" className="min-w-[7.5rem]">Trolleys</TabsTrigger>
                    </TabsList>
                    <TabsContent value="hot">
                        <section className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10 p-5 items-center justify-center mx-auto w-fit">
                            {hot.map((item, index) => (
                                <div key={index} className="equipmentcard bg-white flex flex-col items-center justify-between p-8 w-[15rem] md:w-[18.75rem] lg:w-[22rem] rounded-md h-full">
                                    <Image src={item.image} alt={item.name} width={250} height={290} className="mb-5 object-cover" />
                                    <p className="text-center text-bae lg:text-lg font-semibold font-mont text-foreground">{item.name}</p>
                                </div>
                            ))}
                        </section>
                    </TabsContent>
                    <TabsContent value="cold">
                        <section className="grid md:grid-cols-2 gap-10 p-5 items-center justify-center mx-10 md:mx-auto w-fit md:px-5">
                            {cold.map((item, index) => (
                                <div key={index} className="equipmentcard bg-white flex flex-col items-center justify-between p-8 w-full md:w-[23rem] lg:w-[29rem] rounded-md h-full">
                                    <Image src={item.image} alt={item.name} width={530} height={280} className="object-cover mb-5" />
                                    <p className="text-center text-bae lg:text-lg font-semibold font-mont text-foreground">{item.name}</p>
                                </div>
                            ))}
                        </section>
                    </TabsContent>
                    <TabsContent value="trolleys">
                        <section className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10 p-5 items-center justify-center mx-auto w-fit">
                            {trolleys.map((item, index) => (
                                <div key={index} className="equipmentcard bg-white flex flex-col items-center justify-between p-8 w-[15rem] md:w-[18.75rem] lg:w-[22rem] rounded-md h-full">
                                    <Image src={item.image} alt={item.name} width={250} height={290} className="mb-5 object-cover" />
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
