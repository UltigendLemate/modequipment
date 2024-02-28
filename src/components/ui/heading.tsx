export default function Heading({heading, text}: {heading: string, text: string}) {
    return (
        <div className="text-primary font-mont my-10 flex flex-col items-center text-center px-5">
            <div className="flex gap-3 items-center justify-center md:w-[45%] w-full">
                <div className="w-full h-[3px] bg-primary rounded-full" />
                <h2 className="md:text-2xl text-lg uppercase text-nowrap text-foreground">{heading}</h2>
                <div className="w-full h-[3px] bg-primary rounded-full" />
            </div>
            <h3 className="md:text-5xl text-3xl font-semibold">{text}</h3>
        </div>
    )
}