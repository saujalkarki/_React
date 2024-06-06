import { useState, useEffect } from "react";

export function UsingEffect() {
  const [state, setState] = useState();

  let clickedHere = (e) => {
    setState(e.target.value);
  };

  useEffect(() => {
    console.log("No dependency Array.");
  });

  useEffect(() => {
    console.log("Empty dependency Array.");
  }, []);

  useEffect(() => {
    console.log("Dependency array with values");
  }, [state]);

  return (
    <>
      <input type="text" onChange={clickedHere} />
      <button>Click here</button>
      <h3>It says : {state}</h3>
    </>
  );
}
