function Colapse({ title, text, list }) {
  return (
    <div className="w-full mx-auto mb-12">
      <details className="group">
        <summary className="w-full py-[15px] px-[20px] flex justify-between items-center bg-main rounded-2xl relative z-10">
          <h1 className="text-white text-[1.3rem] md:text-[1.8rem]" tabIndex="0">
            {title}
          </h1>
          <i className="fa-solid fa-chevron-down group-open:rotate-180 text-white text-[1.8rem]"></i>
        </summary>
        {text && (
          <p
            className="mt-[-15px] p-4 pt-12 bg-bgGrey text-[1.2rem] md:text-[1.8rem] text-main rounded-2xl"
            tabIndex="0"
          >
            {text}
          </p>
        )}
        {list && (
          <ul className="mt-[-15px] p-4 pt-12 bg-bgGrey rounded-2xl">
            {list.map((listElement) => (
              <li key={listElement}>
                <p className="text-[1.2rem] md:text-[1.8rem] text-main" tabIndex="0">
                  {listElement}
                </p>
              </li>
            ))}
          </ul>
        )}
      </details>
    </div>
  );
}

export default Colapse;
