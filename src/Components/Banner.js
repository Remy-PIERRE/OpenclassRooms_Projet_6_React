/* props.imageUrl mandatory, props.text optionnal */
function Banner({ imageUrl, text }) {
  return (
    <div className="h-[125px] md:h-[225px] mb-16 overflow-hidden rounded-[1rem] md:rounded-[2rem] relative">
      <img className="w-full h-auto mt-[-25%] brightness-75" src={`/images/${imageUrl}`} alt="#" />
      {text && <h1 className="md:w-3/4 px-[10%] md:px-0 text-4xl md:text-7xl md:text-center absolute top-1/2 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 text-white">{text}</h1>}
    </div>
  );
}

export default Banner;
