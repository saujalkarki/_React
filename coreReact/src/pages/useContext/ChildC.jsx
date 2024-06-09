import { useContext } from "react";
import { counterContext } from "../../context/context";

export function ChildC() {
  const data = useContext(counterContext);
  console.log(data);
  return (
    <>
      <h1>ID:{data.userName}</h1>
      <h1>PassWord:{data.password}</h1>
    </>
  );
}
