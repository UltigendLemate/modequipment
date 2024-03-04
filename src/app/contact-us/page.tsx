import Navbar from "@/components/Navbar";

export default function Contact() {
    return (
        <>
            <Navbar />

            <div className="container mx-auto px-4 py-8">

                <div className="flex flex-wrap justify-around font-poppins items-center mt-10">
                    <div className="mb-2 lg:pr-4 ">
                        <div className="w-fit mb-4 lg">
                            <div className="flex gap-3 items-center">
                                <h1 className="text-2xl uppercase text-nowrap text-foreground">Contact Us</h1>
                                <div className="w-full h-[3px] bg-primary rounded-full" />
                            </div>
                            <p className="text-4xl font-semibold text-primary">Feel free to reach out to us.</p>
                        </div>

                        <p className="mb-2"><strong>Address:</strong> 3A, Street NO.4, Block NO. RZ, Anand Parbat Industrial Area, New Delhi-110005</p>
                        <p className="mb-2"><strong>Email:</strong> modequipment@yahoo.co.uk</p>
                        <p className="mb-2"><strong>Mobile:</strong> +91-9811085683</p>
                        <p className="mb-2"><strong>Telephone:</strong> +91-11-28763958,28762343</p>
                        <p className="mb-2"><strong>Fax:</strong> +91-11-28762342</p>
                    </div>
                    <div className="w-[25rem] lg:w-[30%]">
                        <div className="bg-white clientcard rounded-lg p-6">
                            <h2 className="text-3xl font-bold mb-4 font-mont text-foreground">Get in Touch</h2>
                            <form>
                                <div className="mb-3">
                                    <input
                                        className="appearance-none rounded-md w-full text-foreground border border-muted py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-muted-foreground"
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        className="appearance-none rounded-md block w-full text-foreground border border-muted py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-muted-foreground"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className="appearance-none rounded-md block w-full text-foreground border border-muted py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-muted-foreground"
                                        id="message"
                                        rows={6}
                                        placeholder="Message"
                                    ></textarea>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className="bg-primary hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}