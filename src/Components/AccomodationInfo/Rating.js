/* props.rating mandatory, props.maxRating optional(max number stars rendered) */
function Rating({ rating, maxRating = 5 }) {
  const stars = [];
  let index = 0;
  while (index < +maxRating) {
    stars.push(
      <i
        className={`fa-sharp fa-solid fa-star text-[1.5rem] md:text-[2.5rem] ${
          rating > index ? "text-main" : "text-starGrey"
        }`}
        key={index}
      ></i>
    );
    index++;
  }
  return (
    <div
      className="flex justify-end items-center gap-[3px] md:gap-[1rem]"
      tabIndex="0"
    >
      {stars}
    </div>
  );
}

export default Rating;
