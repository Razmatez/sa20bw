export default function Page() {
    return (
        <div className="flex flex-col overflow-hidden height-full w-full">
            <iframe src={process.env.NEXT_PUBLIC_TICKETPROS_IFRAME} className="grow border-0"></iframe>
        </div>
    )
}
