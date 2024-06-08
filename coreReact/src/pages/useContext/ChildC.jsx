import { useContext } from "react";
import SubmitContext from "./FormContext";

export function ChildC() {
  const dataC = useContext(SubmitContext);

  console.log(dataC);

  return (
    <>
      <h1>useName:{}</h1>
      <h1>password:{}</h1>
    </>
  );
}
