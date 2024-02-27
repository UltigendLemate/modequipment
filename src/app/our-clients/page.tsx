import Navbar from "@/components/Navbar";
import Heading from "@/components/ui/heading";

const hotels = [
    {
        name: "The Lalit",
        image: "/lalit.png"
    },
    {
        name: "Oberoi Hotels",
        image: "/oberoi.png"
    },
    {
        name: "Taj Hotels",
        image: "/taj.png"
    },
    {
        name: "Radisson",
        image: "/radisson.png"
    },
    {
        name: "Hyatt",
        image: "/hyatt.png"
    },
    {
        name: "Jaypee",
        image: "/jaypee.png"
    },
    {
        name: "ITC",
        image: "/itc.png"
    },
    {
        name: "Le Meridien",
        image: "/lemeridien.png"
    },
    {
        name: "WelcomHeritage",
        image: "/welcomheritage.png"
    },
    {
        name: "Imperial",
        image: "/imperial.png"
    },
    {
        name: "Claridges",
        image: "/claridges.png"
    }
];

export default function Clients() {
    return (
        <>
            <Navbar />

            <main className="px-28">
                <Heading heading="Our Clients" text="Built on trust, driven by results." />
                <section className="flex flex-wrap items-center justify-center">
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
            </main>
        </>
    )
}