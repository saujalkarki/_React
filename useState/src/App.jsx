// import { useState } from "react";

// import Terminal from "./Terminal";

// /* eslint-disable react/prop-types */
// function App() {
//   return (
//     <>
//       <h1>Hello World</h1>
//       <Menu
//         menulist={["pizza", "momo", "chowmin", " thuppa"]}
//         menu2={<Menu2 />}
//       />
//       <Anything>Hello there</Anything>
//       <TryState />
//       <Try2 />
//       <br />
//       <ConditionalRendering />
//     </>
//   );
// }

// export default App;

// function Menu({ menulist, menu2 }) {
//   return (
//     <>
//       <h2>Menu</h2>
//       <h4>{menulist[0]}</h4>
//       <h4>{menulist[1]}</h4>
//       <h4>{menulist[2]}</h4>
//       <h4>{menulist[3]}</h4>
//       {menu2}
//     </>
//   );
// }

// function Menu2() {
//   return (
//     <>
//       <h2>Menu</h2>
//       <h4>Pizza1</h4>
//       <h4>Pizza2</h4>
//       <h4>Pizza3</h4>
//       <h4>Pizza4</h4>
//     </>
//   );
// }

// function Anything({ children }) {
//   return (
//     <div>
//       <h2>{children}</h2>
//     </div>
//   );
// }

// function TryState() {
//   const [name, setName] = useState("Saujal");
//   const [age, setAge] = useState(21);

//   function handleSubmit(e) {
//     e.preventDefault();

//     setName(e.target.name.value);
//     setAge(e.target.age.value);
//   }

//   return (
//     <>
//       <h1>
//         Hi my name is {name === "" ? "Saujal" : name} and I am{" "}
//         {age === "" ? 21 : age} years old.
//       </h1>
//       <br />
//       <form
//         onSubmit={(e) => {
//           handleSubmit(e);
//         }}
//       >
//         <label htmlFor="name">Name:</label>
//         <input type="text" name="name" id="name" />
//         <label htmlFor="age">Age:</label>
//         <input type="number" name="age" id="age" />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// }

// function Try2() {
//   let [here, setHere] = useState(1);

//   function handleClick() {
//     setHere(here + 1);
//     // setHere((a) => a + 1);
//   }

//   return (
//     <>
//       <h1>Hi {here}</h1>
//       <button
//         onClick={() => {
//           handleClick();
//           handleClick();
//           handleClick();
//         }}
//       >
//         Click Here
//       </button>
//     </>
//   );
// }

// function ConditionalRendering() {
//   const [condition, setCondition] = useState(false);

//   return (
//     <>
//       <input
//         type="checkbox"
//         checked={condition}
//         onChange={() => {
//           setCondition(!condition);
//         }}
//       />
//       <p>Ram {condition ? "just Liked this" : "didn't liked this"} checkbox.</p>
//     </>
//   );
// }

import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>This is main component.</h1>
      {[0, 1, 2, 3, 4, 5].map((ab, indx) => {
        return <Card cardNo={indx + 1} key={ab} />;
      })}
    </>
  );
}

export default App;
