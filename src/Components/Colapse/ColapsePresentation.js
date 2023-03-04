import { useState } from "react";

function Colapse() {
  /* state */
  const [open, setopen] = useState(false);

  /* handler */
  const clickHandler = () => {
    setopen((prevState) => {
      return prevState ? false : true;
    });
  };

  /* render */
  return (
    <div>
      <h1 onClick={clickHandler}>Titre du colapse</h1>

      {open && <p>texte du colapse</p>}
    </div>
  );
}

export default Colapse;