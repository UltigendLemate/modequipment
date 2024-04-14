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

                            Conventional kitchen planning and layout designing are major concerns before the execution of the kitchen starts. The kitchen's layout must ensure the best space utilization along with easy movement of movable equipment in the kitchen corridors. <br /><br />

                            MOD's design team works hard on the layout designing of every project to ensure the practical implementation of equipment in the provided space. MOD's Design Team has the main aim of making suitable utilization of space so that every section of the kitchen has enough space to perform operations with ease. Every kitchen has an optimal workflow. With the help of skilled kitchen designers, we can design custom kitchen environments based on operational needs and the unique needs of the chef's menu. The result is more efficient, fluid kitchens where inspiration thrives.</p>
                    </TabsContent>

                    <TabsContent value="fresh-air" className="px-5 text-lg grid justify-center">
                        {/* <h3 className="text-2xl mb-5 md:text-4xl font-semibold text-center ">Kitchen is the heart of the Hospitality Industry.</h3> */}
                        <p className="text-left text-xl max-w-screen-lg">

                            In a commercial kitchen, working conditions are especially demanding. There are four main factors affecting thermal comfort: air temperature, radiation, air velocity, and air humidity. At the same time, high emission rates of contaminants are released from the cooking process. Ventilation plays a crucial role in providing comfortable and productive working conditions and in ensuring contaminant removal.
                            <br /><br />
                            The science of commercial kitchen ventilation encompasses both exhausting air and providing replacement air within the cooking area. Whether a restaurant is a small free-standing site or a large institutional kitchen, managing and balancing airflow is a complex issue. Properly ventilating commercial kitchens is challenging, as it involves moving large volumes of air through ductwork and placing equipment in very restricted spaces. Therefore, the proper implementation of exhaust hoods with fresh air supply is necessary for every commercial kitchen to create a healthy environment.
                            <br /><br />
                            MOD offers performance-enhancing ventilation products for commercial kitchens, including centrifugal exhaust blowers for industries, aiming to provide comfortable, energy-efficient, and safe environments. We provide solutions for creating positive indoor experiences for chefs and others working in the kitchen.</p>


                    </TabsContent>


                    <TabsContent value="ducting" className="px-5 text-lg grid justify-center">
                        {/* <h3 className="text-2xl mb-5 md:text-4xl font-semibold text-center ">Kitchen is the heart of the Hospitality Industry.</h3> */}
                        <p className="text-left text-xl max-w-screen-lg">

                            Exhaust System & Ducting in the kitchen are one of the most important parts, ensuring proper working conditions for the chefs and others. Traditionally, the exhaust system just meant the installation of exhaust fans in the kitchen area. But now, in today's world, the change in technology has given a new meaning to the exhaust system and ducting. Exhaust hoods with proper suppression systems are the latest technology, which easily manages to create a healthy working atmosphere in the kitchen by eliminating smoke.</p>

                        <Image src={"/mod_ducting.jpg"} alt="MOD's scientific principle of calculation" className="mt-5" width={1000} height={400} />
                        <span className="text-sm">MOD&apos;s scientific principle of calculation</span>
                    </TabsContent>


                    <TabsContent value="amc" className="px-5 text-lg grid justify-center">
                        {/* <h3 className="text-2xl mb-5 md:text-4xl font-semibold text-center ">Kitchen is the heart of the Hospitality Industry.</h3> */}
                        <p className="text-left text-xl max-w-screen-lg">
                            Keeping your kitchen running smoothly for many years is imperative to the success of your operation. The Happy Kitchen Promise Program is a new offering exclusively from MOD for its valued customers. By extending this promise, we demonstrate that at MOD, we always care for your kitchen needs. It's a promise that ensures complete freedom from all worries related to our products.
                            <br /><br />
                            Happy Kitchen Promise Programs ensures that we are always there at each step.
                            <br /><br />
                            Just pick up a phone, and we are there at your service. We ensure smooth functioning of your product, through assured maintenance visits. Our absolutely genuine spares assurance means that you no longer need to worry over spares!</p>


                    </TabsContent>


                    <TabsContent value="lpg" className="text-lg grid justify-center px-5">
                        <h3 className="text-2xl mb-5 md:text-4xl font-semibold text-center ">L.P.G is the necessity of every Kitchen.</h3>
                        <p className=" text-left text-xl max-w-screen-lg">

                            Ensuring a standardized L.P.G pipeline in the kitchen is the main objective of MOD's Installation team. L.P.G Pipeline Installation requires an experienced workforce to maintain the safety of the kitchen and its equipment.<br /><br />
                            MOD has its own specialized L.P.G Pipeline Installation team who ensure proper fitting as per ISI standards and the safety of the kitchen environment. We use the best quality branded C-class pipelines, pressure regulators, valves, and other supporting components to ensure compliance with safety norms.</p>
                        <h3 className="text-2xl my-5 md:text-4xl font-semibold text-center ">Show In Process</h3>
                        <ul className="list-disc pl-5">
                            <li>Estimating the gas consumption of the kitchen equipments at peak load.</li>
                            <li>Visiting the site to determine technical & practical implementation of L.P.G Pipelines.</li>
                            <li>Creating the detailed CAD layout of pipeline, showing all required stations where L.P.G pipeline will be available in the kitchen.</li>
                        </ul>
                    </TabsContent>
                    
                </Tabs>
            </main>
        </>
    )
}
