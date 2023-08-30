const IncrowdForm = (props) => {

    const {
        content
    } = props;

    return (
        <>
            <incrowd-forms
                id={content.formId}
                client-id="SA20"
                server="standard"
            ></incrowd-forms>
            <script
                src="https://forms-stage.incrowdsports.com/js/index.js">
            </script>
        </>

    )

}

export default IncrowdForm;