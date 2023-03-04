/* props.title, props.location mandatory */
function Title({ title, location }) {
  return (
    <div>
      <h1 className="text-[1.8rem] md:text-[3.6rem] text-main" tabIndex="0">
        {title}
      </h1>
      <p className="mb-8 text-[1.4rem] md:text-[1.8rem] text-main" tabIndex="0">
        {location}
      </p>
    </div>
  );
}

export default Title;
