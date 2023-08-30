const IncrowdLiveBlog = (props) => {

    const {
        content
    } = props;

    return (
        <>
            <incrowd-live-blog
                id={content.sourceSystemId}
                client-id="SA20"
                server="standard"
                stage></incrowd-live-blog>
            <script
                src="https://live-blog.incrowdsports.com/index.js">

            </script>
        </>

    )

}

export default IncrowdLiveBlog;