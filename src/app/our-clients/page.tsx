

import Navbar from "@/components/Navbar";
import Heading from "@/components/ui/heading";
import { clients } from "@/utils/clients";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';

export default function Clients() {

    return (
        <>
            <Navbar />

            <main className="lg:px-28 bg-background">
                <Heading heading="Our Clients" text="Built on trust, driven by results." />

                <Tabs defaultValue="Hotels" className="w-full text-center">
                    <TabsList className="">
                        {
                            clients.map((category, index) => {
                                return (
                                    <TabsTrigger key={index} value={category.title}>{category.title}</TabsTrigger>
                                )
                            })
                        }
                    </TabsList>
                    {
                        clients.map((category, index) => {
                            return (
                                <TabsContent value={category.title} key={index}>
                                    <section className="flex flex-wrap items-center justify-center mt-10">
                                        {
                                            category.items.map((hotel, index) => {
                                                return (
                                                    <div key={index} className="clientcard bg-white w-[40%]  sm:w-[11.25rem] h-[7.5rem] rounded-md flex items-center justify-center m-3">
                                                        <Image src={hotel.image} alt={hotel.name} width={150} height={110} className="object-cover rounded-md" />
                                                    </div>
                                                )
                                            })
                                        }
                                    </section>
                                </TabsContent>
                            )
                        })
                    }
                </Tabs>
            </main>
        </>
    )
}
