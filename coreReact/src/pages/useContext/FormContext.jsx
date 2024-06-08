import { createContext, useState } from "react";

const SubmitContext = createContext();

export function FormContext() {
  const [data, setData] = useState({ userName: "", password: "" });

  console.log(SubmitContext.value);
  console.log(data);

  return (
    <>
      <SubmitContext.Provider value={data}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
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

          <label htmlFor="password">UserName</label>
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
      </SubmitContext.Provider>
    </>
  );
}

export default SubmitContext;
