import Colapse from "./Colapse";
/* props.articles mandatory */
function AboutColapseContainer({ articles }) {
  return (
    <div className="w-full md:w-[80%] mx-auto">
      {articles &&
        articles.map(({ title, text }) => (
          <Colapse key={title} title={title} text={text} />
        ))}
    </div>
  );
}

export default AboutColapseContainer;
