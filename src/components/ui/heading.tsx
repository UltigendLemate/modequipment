export default function Heading({heading, text}: {heading: string, text: string}) {
    return (
        <div className="text-primary font-poppins my-10 flex flex-col items-center">
            <div className="flex gap-3 items-center justify-center w-[45%]">
                <div className="w-full h-[3px] bg-primary rounded-full" />
                <h1 className="text-2xl uppercase text-nowrap text-foreground">{heading}</h1>
                <div className="w-full h-[3px] bg-primary rounded-full" />
            </div>
            <p className="text-4xl font-semibold text-center">{text}</p>
        </div>
    )
}