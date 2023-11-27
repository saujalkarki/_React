// import { useState } from "react";
// import { Logo, Form, List, Stats } from "./components";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

// // The default App function
// export default function App() {
//   const [items, setItems] = useState([...initialItems]);

//   function handleAddItems(item) {
//     setItems((items) => [...items, item]);
//   }

//   function handleDeleteItems(id) {
//     setItems((items) => items.filter((item) => item.id !== id));
//   }

//   function handleChecked(id) {
//     setItems((items) =>
//       items.map((item) =>
//         item.id === id ? { ...item, packed: !item.packed } : item
//       )
//     );
//   }

//   function handleClearList() {
//     confirm("Are you sure want to clear the list?")
//       ? setItems([])
//       : setItems(items);
//   }

//   return (
//     <div className="app">
//       <Logo />
//       <Form onAddItems={handleAddItems} items={items} />
//       <List
//         onDeleteItems={handleDeleteItems}
//         onChecked={handleChecked}
//         onClearClick={handleClearList}
//         list={items}
//       />
//       <Stats items={items} />
//     </div>
//   );
// }

/*
// coding challange 1

import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App() {
  return (
    <div>
      <FlashCard />
    </div>
  );
}

function FlashCard() {
  const [selectedId, setSelectedId] = useState();

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          onClick={() => {
            setSelectedId(question.id !== selectedId ? question.id : null);
          }}
          className={selectedId === question.id ? "selected" : ""}
          key={question.id}
        >
          <p>
            {selectedId === question.id ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
*/

// coding challange-----------------------------------------------------------------
// import { useState } from "react";

// export default function App() {
//   return (
//     <>
//       <Count />
//     </>
//   );
// }

// function Count() {
//   const [slider, setSlider] = useState(1);
//   const [input, setInput] = useState(0);

//   let date = new Date();
//   date.setDate(date.getDate() + input);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div className="sliderInput">
//         <input
//           type="range"
//           name="slider"
//           id="slider"
//           min={1}
//           max={10}
//           value={slider}
//           onChange={(e) => {
//             setSlider(Number(e.target.value));
//           }}
//         />
//         <label htmlFor="slider">{slider}</label>
//       </div>

//       <div className="inputPM">
//         <button
//           onClick={() => {
//             setInput((i) => (i -= slider));
//           }}
//         >
//           -
//         </button>
//         <input
//           value={input}
//           type="number"
//           onChange={(e) => {
//             setInput(Number(e.target.value));
//           }}
//         />
//         <button
//           onClick={() => {
//             setInput((i) => (i += slider));
//           }}
//         >
//           +
//         </button>
//       </div>

//       <div className="dispRen">
//         <p>
//           {(input === 0
//             ? "Today is "
//             : input > 0
//             ? `${input} day from today is `
//             : `${Math.abs(input)} day ago from today was `) +
//             date.toDateString()}
//         </p>
//       </div>

//       {slider !== 1 || input !== 0 ? (
//         <div className="resetInp">
//           <button
//             onClick={() => {
//               setInput((i) => (i = 0));
//               setSlider((s) => (s = 1));
//             }}
//           >
//             Reset
//           </button>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }

// coding challange *--------------------------------------------------------------------------------

export default function App() {
  return <Questions />;
}

function Questions() {
  return (
    <div className="main">
      <Question />
      <Question />
      <Question />
    </div>
  );
}

function Question() {
function plusClicked(){
  
}

  return (
    <div className="container">
      <div className="question">
        <h3>01</h3>
        <h3>Where are these chairs assembled?</h3>
        <span style={{ cursor: "pointer" }} onClick={}>+</span>
      </div>
      <div className="answer">
        <p className="hide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          sapiente laborum quod? Vitae qui soluta doloremque perspiciatis.
          Exercitationem, id aliquam.
        </p>
      </div>
    </div>
  );
}
