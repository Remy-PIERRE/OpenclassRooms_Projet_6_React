import { useState } from "react";

/* props.pictures mandatory, props.alternate optionnal */
export default function Carrousel({ pictures, alternate = "#" }) {
  const totalPicturesConter = pictures.length;
  const [actualPictureConter, setActualPictureCounter] = useState(0);

  /* auto changing picture to next, need to clear it each re-rendering */
  const intervalTimer = setTimeout(() => {
    setActualPictureCounter((prevState) => {
      return prevState === totalPicturesConter - 1 ? 0 : prevState + 1;
    });
  }, 5000);

  /*render prev pricture */
  const prevPictureHandler = () => {
    clearInterval(intervalTimer);
    setActualPictureCounter((prevState) => {
      return prevState === 0 ? totalPicturesConter - 1 : prevState - 1;
    });
  };
  /* render next picture */
  const nextPictureHandler = () => {
    clearInterval(intervalTimer);
    setActualPictureCounter((prevState) => {
      return prevState === totalPicturesConter - 1 ? 0 : prevState + 1;
    });
  };

  return (
    <div className="w-full h-[255px] md:h-[415px] mb-12 relative overflow-hidden rounded-[1rem] md::rounded-[2rem]">
      <img
        src={pictures[actualPictureConter]}
        alt={alternate}
        className="w-full h-full object-cover"
      />
      {totalPicturesConter > 1 && (
        <div className="w-full px-4 flex justify-between items-center absolute top-1/2 transform -translate-y-1/2">
          <button onClick={prevPictureHandler}>
            <i className="fa-solid fa-chevron-left text-white text-[2rem] md:text-[4rem] hover:text-main"></i>
          </button>
          <button onClick={nextPictureHandler}>
            <i className="fa-solid fa-chevron-right text-white text-[2rem] md:text-[4rem] hover:text-main"></i>
          </button>
        </div>
      )}
      {totalPicturesConter > 1 && (
        <div className="w-full flex justify-center items-center absolute bottom-[25px] z-10">
          <span className="text-[1.8rem] text-white hover:text-main">{`${
            actualPictureConter + 1
          }/${totalPicturesConter}`}</span>
        </div>
      )}
    </div>
  );
}
