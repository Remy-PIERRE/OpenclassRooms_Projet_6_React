import Tags from "./Tags";
import Host from "./Host";
import Rating from "./Rating";
import Title from "./Title";

/* props.annonce mandatory */
function AccomodationInfo({ annonce }) {
  return (
    <div className="flex flex-wrap justify-between mb-12">
      <div className="w-full md:w-[70%] mb-[25px] md:m-0">
        <Title title={annonce.title} location={annonce.location} />
        <Tags tags={annonce.tags} />
      </div>
      <div className="w-full md:w-1/4 flex justify-between items-center md:flex-col-reverse">
        <Rating rating={annonce.rating} maxRating={"5"} />
        <Host name={annonce.host.name} picture={annonce.host.picture} />
      </div>
    </div>
  );
}

export default AccomodationInfo;
