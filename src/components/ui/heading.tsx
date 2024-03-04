export default function Heading({heading, text}: {heading: string, text: string}) {
    return (
        <div className="text-primary font-poppins py-10 flex flex-col items-center mx-10">
            <div className="flex gap-3 items-center justify-center w-[90%] sm:w-[45%]">
                <div className="w-full h-[3px] bg-primary rounded-full" />
                <h1 className="text-xl sm:text-2xl uppercase text-nowrap text-foreground">{heading}</h1>
                <div className="w-full h-[3px] bg-primary rounded-full" />
            </div>
            <p className="text-3xl md:text-4xl font-semibold text-center">{text}</p>
        </div>
    )
}