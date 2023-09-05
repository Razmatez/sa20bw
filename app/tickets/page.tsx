export default function Page() {
    return (
        <div>
            <iframe src={process.env.NEXT_PUBLIC_TICKETPROS_IFRAME} frameBorder="0"></iframe>
        </div>
    )
}
