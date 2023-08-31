const IncrowdLiveBlog = (props) => {

    const {
        content
    } = props;

    return (
        <>
            <incrowd-live-blog
                id={content.sourceSystemId}
                client-id={process.env.NEXT_PUBLIC_CLIENT_ID}
                server="standard"
                stage={process.env.NEXT_PUBLIC_ENVIRONMENT = 'stage' ? true : false}></incrowd-live-blog>
            <script
                src={process.env.NEXT_PUBLIC_LIVEBLOG_SCRIPT_URL}>
            </script>
        </>

    )

}

export default IncrowdLiveBlog;