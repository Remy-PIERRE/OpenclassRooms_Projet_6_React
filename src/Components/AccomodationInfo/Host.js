/* props.name, props.picture mandatory */
function Host({ name, picture }) {
  return (
    <div className="flex justify-end items-center">
      <p className="pr-[1.5rem] text-end text-[1.8rem] text-main" tabIndex="0">
        {name}
      </p>
      <img src={picture} alt={name} className="w-[64px] h-auto rounded-full" />
    </div>
  );
}

export default Host;
