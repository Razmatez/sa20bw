const Quote = ({content}) => {

  return (
    <div className="border-l-8 darkBlue">
      <p className="italic ml-12">
        {content.text}
      </p>
    </div>
  );
}

export default Quote;
