'use client'

import Navbar from "@/components/Navbar";
import Heading from "@/components/ui/heading";
import { hot, cold, trolleys } from "@/utils/equipments";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect } from "react";
import Image from 'next/image';

export default function Design() {
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
                <Heading heading="Our services" text="MOD offers all kinds of solutions" />

                <Tabs defaultValue="kitchen-layout" className="w-full my-7 " onValueChange={handleTabChange}>
                    <TabsList className="mb-7 block lg:inline-flex bg-transparent h-auto lg:h-10 text-center w-full">
                        <TabsTrigger value="kitchen-layout" id="kitchen-layout" className="bg-muted">Kitchen Layout Solutions</TabsTrigger>
                        <TabsTrigger value="lpg" id="lpg" className="bg-muted">LPG Pipeline</TabsTrigger>
                        <TabsTrigger value="ducting" id="ducting" className="min-w-[7.5rem] bg-muted">Exhaust System Ducting</TabsTrigger>
                        <TabsTrigger value="fresh-air" id="fresh-air" className="min-w-[7.5rem] bg-muted">Fresh Air Supply System</TabsTrigger>
                        <TabsTrigger value="amc" id="amc" className="min-w-[7.5rem] bg-muted" >AMC</TabsTrigger>
                    </TabsList>
                    <TabsContent value="kitchen-layout" className="text-lg grid justify-center">
                        <h3 className="text-2xl mb-5 md:text-4xl font-semibold text-center ">Kitchen is the heart of the Hospitality Industry.</h3>
                        <p className="px-5 text-left text-xl max-w-screen-lg">

                            Proper Kitchen Planning & Layout Designing is major concern before the execution of kitchen starts. Kitchen&apos;s layout must ensure best space utilization along with easy movement of moveable equipments in the kitchen corridors. <br /><br />

                            MOD&apos;s design team works hard over the layout designing of every project in order to ensure practical implementation of equipments in the space provided. MOD&apos;s Design Team has the main aim to make proper utilization of Space so that every section of kitchen avails enough space to perform operation with ease. Every kitchen has an optimal workflow. With the help of skilled Kitchen designers, we can design custom kitchen environments based on operational need and unique needs of chef&apos;s menu. The result is more efficient, more fluid kitchens where inspiration thrives.</p>
                    </TabsContent>

                    <TabsContent value="fresh-air" className="px-5 text-lg grid justify-center">
                        {/* <h3 className="text-2xl mb-5 md:text-4xl font-semibold text-center ">Kitchen is the heart of the Hospitality Industry.</h3> */}
                        <p className="text-left text-xl max-w-screen-lg">

                        In a commercial kitchen, working conditions are especially demanding. There are four main factors affecting thermal comfort, these being: air temperature, radiation, air velocity and air humidity. At the same time, high emission rates of contaminants are released from the cooking process. Ventilation plays an important role in providing comfortable and productive working conditions and in securing contaminant removal.
<br/><br/>
The science of commercial kitchen ventilation includes both exhausting air as well as providing replacement air within the cooking area. Whether a restaurant is a small free-standing site or a large institutional kitchen, managing and balancing airflow is a complex issue. It is a challenge to properly ventilate commercial kitchens, as they require moving large volumes of air through ductwork and equipment placement in very restricted spaces. So proper implementation of exhaust hoods with fresh air supply is necessary for every commercial kitchen creating a healthy environment.
<br/><br/>
MOD offer performance enhancing ventilation products for commercial kitchen, centrifugal exhaust blowers for industries, for comfortable, energy-efficient, and safe environments for commercial kitchen. We provide solutions for creating a positive indoor environment Experiences for chefs and others working in the kitchen.</p>

                      
                    </TabsContent>


                    <TabsContent value="ducting" className="px-5 text-lg grid justify-center">
                        {/* <h3 className="text-2xl mb-5 md:text-4xl font-semibold text-center ">Kitchen is the heart of the Hospitality Industry.</h3> */}
                        <p className="text-left text-xl max-w-screen-lg">

                        Exhaust System & Ducting in the kitchen is one of the most important part of kitchen ensuring proper working conditions for the chefs & the others.Tradionally exhaust system just meant installation of exhaust fans in kitchen area. But now, in today&apos;s world the change in technology has given a new meaning to the exhaust system & ducting. Exhaust hoods with proper suppression system is the latest technology which easily manages to create an healthy working atmosphere in the kitchen by eliminating smoke.</p>

                        <Image src={"/mod_ducting.jpg"} alt="MOD's scientific principle of calculation" className="mt-5" width={1000} height={400}/>
                        <span className="text-sm">MOD&apos;s scientific principle of calculation</span>
                    </TabsContent>


                    <TabsContent value="amc" className="px-5 text-lg grid justify-center">
                        {/* <h3 className="text-2xl mb-5 md:text-4xl font-semibold text-center ">Kitchen is the heart of the Hospitality Industry.</h3> */}
                        <p className="text-left text-xl max-w-screen-lg">
                        Keeping your kitchen running smoothly for long years is imperative to your operation&apos;s success. Happy Kitchen Promise Programs It is a new way of Kitchen being offered exclusively by MOD for its valued customers. By extending this promise we show that we at MOD always care for your Kitchen needs. It is a promise that ensures complete freedom from all worries related to our product.
                        <br/><br/>
Happy Kitchen Promise Programs ensures that we are always there at each step.
<br/><br/>
Just pick up a phone, and we are there at your service. We ensure smooth functioning of your product, through assured maintenance visits. Our absolutely genuine spares assurance means that you no longer need to worry over spares!</p>

                        
                    </TabsContent>


                    <TabsContent value="lpg" className="text-lg grid justify-center px-5">
                        <h3 className="text-2xl mb-5 md:text-4xl font-semibold text-center ">L.P.G is the necessity of every Kitchen.</h3>
                        <p className=" text-left text-xl max-w-screen-lg">

                            Ensuring a standardized L.P.G pipeline in Kitchen is the main objective of MOD&apos;s Installation team. L.P.G Pipeline Installation needs an experienced workforce in order to maintain Safety of Kitchen & its equipments.<br /><br />
                            MOD has its own specialized L.P.G Pipeline Installation team who ensures proper fitting as per ISI standards & safety of kitchen environment. We use best quality branded C-class pipelines, pressure regulators, valves and other supporting components ensuring the safety norms.</p>
                        <h3 className="text-2xl my-5 md:text-4xl font-semibold text-center ">Show In Process</h3>
                        <ul className="list-disc pl-5">
                            <li>Estimating the gas consumption of the kitchen equipments at peak load.</li>
                            <li>Visiting the site to determine technical & practical implementation of L.P. G Pipelines.</li>
                            <li>Creating the detailed CAD layout of pipeline showing all required stations where L.P.G pipeline will be available in the kitchen.</li>
                        </ul>
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
