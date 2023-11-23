// import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

// export default function App() {
//   return (
//     <div className="app">
//       <Logo />
//       <Form />
//       <List />
//       <Stats />
//     </div>
//   );
// }

// function Logo() {
//   return <h1>🌴 Far Away 💼</h1>;
// }

// function Form() {
//   const [descp, setDescp] = useState("");
//   const [quant, setQuant] = useState(1);

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!descp) return;

//     const newItems = {
//       id: initialItems.length + 1,
//       description: descp,
//       quantity: quant,
//       packed: false,
//     };

//     initialItems.push(newItems);

//     setDescp("");
//     setQuant(1);

//     console.log(newItems);
//     console.log(initialItems);
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>What do you need for your 😍 trip?</h3>
//       <select
//         name="quantity"
//         id="quantity"
//         value={quant}
//         onChange={(e) => setQuant(Number(e.target.value))}
//       >
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((opt) => (
//           <option value={opt} key={opt}>
//             {opt}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="Item..."
//         value={descp}
//         onChange={(e) => setDescp(e.target.value)}
//       />
//       <button>add</button>
//     </form>
//   );
// }

// function List() {
//   return (
//     <div className="list">
//       <ul>
//         {initialItems.map((list) => (
//           <Item list={list} key={list.description} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Item({ list }) {
//   return (
//     <li>
//       <input type="checkbox" name="check?ed" />
//       <span style={list.packed ? { textDecoration: "line-through" } : {}}>
//         {list.quantity}&nbsp;
//         {list.description}
//       </span>
//       <button>❌</button>
//     </li>
//   );
// }

// function Stats() {
//   return (
//     <footer className="stats">
//       <em>💼 You have X item on your list, and you already packed X (X%)</em>
//     </footer>
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

import { useState } from "react";

export default function App() {
  return (
    <>
      <Count />
    </>
  );
}

function Count() {
  const [slider, setSlider] = useState(1);
  const [input, setInput] = useState(0);

  let date = new Date();
  date.setDate(date.getDate() + input);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="sliderInput">
        <input
          type="range"
          name="slider"
          id="slider"
          min={1}
          max={10}
          value={slider}
          onChange={(e) => {
            setSlider(Number(e.target.value));
          }}
        />
        <label htmlFor="slider">{slider}</label>
      </div>

      <div className="inputPM">
        <button
          onClick={() => {
            setInput((i) => (i -= slider));
          }}
        >
          -
        </button>
        <input
          value={input}
          type="number"
          onChange={(e) => {
            setInput(Number(e.target.value));
          }}
        />
        <button
          onClick={() => {
            setInput((i) => (i += slider));
          }}
        >
          +
        </button>
      </div>

      <div className="dispRen">
        <p>
          {(input === 0
            ? "Today is "
            : input > 0
            ? `${input} day from today is `
            : `${Math.abs(input)} day ago from today was `) +
            date.toDateString()}
        </p>
      </div>

      {slider !== 1 || input !== 0 ? (
        <div className="resetInp">
          <button
            onClick={() => {
              setInput((i) => (i = 0));
              setSlider((s) => (s = 1));
            }}
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
