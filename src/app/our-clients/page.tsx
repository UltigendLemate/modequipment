'use client'

import Navbar from "@/components/Navbar";
import Heading from "@/components/ui/heading";

import { hotels, colleges, hospitals, restaurants, others} from "@/utils/clients";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Clients() {
    

    return (
        <>
            <Navbar />



            <main className="px-28 bg-background">
                <Heading heading="Our Clients" text="Built on trust, driven by results." />

                <Tabs defaultValue="hotels" className="w-full text-center">
                    <TabsList className="">
                        <TabsTrigger value="hotels" id="hotels" className="active">Hotels</TabsTrigger>
                        <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
                        <TabsTrigger value="hospitals">Healthcare</TabsTrigger>                     
                        <TabsTrigger value="colleges">Education</TabsTrigger>
                        <TabsTrigger value="others">Others</TabsTrigger>
                    </TabsList>
                    <TabsContent value="hotels">
                        <section className="flex flex-wrap items-center justify-center mt-10">
                            {
                                hotels.map((hotel, index) => {
                                    return (
                                        <div key={index} className="clientcard w-[170px] h-[120px] rounded-md flex items-center justify-center m-3">
                                            <img src={hotel.image} alt={hotel.name} className="w-[150px] h-[110px] object-cover rounded-md" />
                                        </div>
                                    )
                                })
                            }
                        </section>
                    </TabsContent>
                    <TabsContent value="restaurants">
                        <section className="flex flex-wrap items-center justify-center mt-10">
                            {
                                restaurants.map((restaurant, index) => {
                                    return (
                                        <div key={index} className="clientcard w-[170px] h-[120px] rounded-md flex items-center justify-center m-3">
                                            <img src={restaurant.image} alt={restaurant.name} className="w-[150px] h-[110px] object-cover rounded-md" />
                                        </div>
                                    )
                                })
                            }
                        </section>
                    </TabsContent>
                    
                    <TabsContent value="hospitals">
                        <section className="flex flex-wrap items-center justify-center mt-10">
                            {
                                hospitals.map((hospital, index) => {
                                    return (
                                        <div key={index} className="clientcard w-[170px] h-[120px] rounded-md flex items-center justify-center m-3">
                                            <img src={hospital.image} alt={hospital.name} className="w-[150px] h-[110px] object-cover rounded-md" />
                                        </div>
                                    )
                                })
                            }
                        </section>
                    </TabsContent>
                    <TabsContent value="colleges">
                        <section className="flex flex-wrap items-center justify-center mt-10">
                            {
                                colleges.map((college, index) => {
                                    return (
                                        <div key={index} className="clientcard w-[170px] h-[120px] rounded-md flex items-center justify-center m-3">
                                            <img src={college.image} alt={college.name} className="w-[150px] h-[110px] object-cover rounded-md" />
                                        </div>
                                    )
                                })
                            }
                        </section>
                    </TabsContent>
                    <TabsContent value="others">
                        <section className="flex flex-wrap items-center justify-center mt-10">
                            {
                                others.map((other, index) => {
                                    return (
                                        <div key={index} className="clientcard w-[170px] h-[120px] rounded-md flex items-center justify-center m-3">
                                            <img src={other.image} alt={other.name} className="w-[150px] h-[110px] object-cover rounded-md" />
                                        </div>
                                    )
                                })
                            }
                        </section>
                    </TabsContent>

                </Tabs>
            </main>
        </>
    )
}