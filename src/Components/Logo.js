/* props.mainColor optional, boolean */
function Logo({ mainColor }) {
  const logo = ["logoK", "logoHouse", "logoS", "logoA"];

  return (
    <div className="flex items-end gap-[5px] md:gap-[10px]">
      {logo.map((letter) => (
        <span
          key={letter}
          id={letter}
          className={`logoElement ${mainColor ? "bg-main" : "bg-white"}`}
        />
      ))}
    </div>
  );
}

export default Logo;
