/* props.tags mandatory */
function Tags({ tags }) {
  return (
    <div className="flex flex-wrap gap-[15px]">
      {tags.map((tag) => (
        <span
          className="min-w-[80px] md:min-w-[115px] h-[25px] px-4 flex justify-center items-center bg-main rounded-[1rem]"
          key={tag}
          tabIndex="0"
        >
          <p className="text-[1rem] md:text-[1.4rem] text-white">{tag}</p>
        </span>
      ))}
    </div>
  );
}

export default Tags;
