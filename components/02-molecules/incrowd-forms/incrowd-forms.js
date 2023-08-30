const IncrowdForm = (props) => {

    const {
        content
    } = props;

    return (
        <>
            <incrowd-forms
                id={content.formId}
                client-id={process.env.NEXT_PUBLIC_CLIENT_ID}
                server="standard"
            ></incrowd-forms>
            <script
                src={process.env.NEXT_PUBLIC_FORMS_SCRIPT_URL}>
            </script>
        </>

    )

}

export default IncrowdForm;