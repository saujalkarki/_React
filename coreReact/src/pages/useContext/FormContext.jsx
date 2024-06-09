import { useState } from "react";
import { counterContext } from "../../context/context";
import { UseContext } from "./UseContext";

export function FormContext() {
  const [data, setData] = useState({ userName: "", password: "" });

  return (
    <>
      <counterContext.Provider value={data}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(data);
          }}
        >
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={(e) => {
              setData({ ...data, userName: e.target.value });
            }}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />

          <button>Submit</button>
        </form>
        <UseContext />
      </counterContext.Provider>
    </>
  );
}
