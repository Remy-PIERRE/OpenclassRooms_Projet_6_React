import { Link } from "react-router-dom";

/* props.data mandatory, security layer if undefined / null => render empty cards */
function Cards({ data }) {
  return (
    <div className="py-4 md:p-4 flex justify-center items-center relative">
      <Link
        className="w-full  aspect-w-1 aspect-h-1 overflow-hidden rounded-[1rem]"
        to={`accomodation/${data.id}`}
      >
        <img src={data.cover} alt={data.title} className="object-cover" />
        <p className="h-auto px-3 py-2 absolute bottom-0 top-auto text-white text-[1.8rem] bg-black/[0.3]">
          {data.title}
        </p>
      </Link>
    </div>
  );
}

export default Cards;
