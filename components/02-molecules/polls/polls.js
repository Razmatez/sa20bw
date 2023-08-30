const Poll = (props) => {

    const {
        content
    } = props;
    console.log(content);
    return (
        <>
            <incrowd-poll
                id={content.pollId}
                client-id={process.env.NEXT_PUBLIC_CLIENT_ID}
                server="standard"
            ></incrowd-poll>
            <script
                type="text/javascript"
                src={process.env.NEXT_PUBLIC_POLLS_SCRIPT_URL}
            ></script>
        </>

    )

}

export default Poll;