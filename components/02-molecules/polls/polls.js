const Poll = (props) => {

    const {
        content
    } = props;
    console.log(content);
    return (
        <>
            <incrowd-poll
                id={content.pollId}
                client-id="SA20"
                server="standard"
            ></incrowd-poll>
            <script
                type="text/javascript"
                src="https://polls-stage.incrowdsports.com/js/index.js"
            ></script>
        </>

    )

}

export default Poll;