/*
import { useState } from "react";
import { Logo, Form, List, Stats } from "./components";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

// The default App function
export default function App() {
  const [items, setItems] = useState([...initialItems]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    confirm("Are you sure want to clear the list?")
      ? setItems([])
      : setItems(items);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} items={items} />
      <List
        onDeleteItems={handleDeleteItems}
        onChecked={handleChecked}
        onClearClick={handleClearList}
        list={items}
      />
      <Stats items={items} />
    </div>
  );
}
*/

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

// import { Children, useState } from "react";

// const faqs = [
//   {
//     title: "Where are these chairs assembled?",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
//   },
//   {
//     title: "How long do I have to return my chair?",
//     text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
//   },
//   {
//     title: "Do you ship to countries outside the EU?",
//     text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
//   },
// ];

// export default function App() {
//   return <Questions />;
// }

// function Questions() {
//   return (
//     <div className="main">
//       <Question faqs={faqs} />
//     </div>
//   );
// }

// function Question({ faqs }) {
//   const [curOpen, setIsOpen] = useState(0);

//   return (
//     <div className="container">
//       {faqs.map((faq, index) => (
//         <QuestionItem
//           key={index}
//           title={faq.title}
//           index={index}
//           curOpen={curOpen}
//           onOpen={setIsOpen}
//         >
//           {faq.text}
//         </QuestionItem>
//       ))}
//       <QuestionItem
//         // key={faqs.length + 2356}
//         index={5}
//         title="How to Master React?"
//         curOpen={curOpen}
//         onOpen={setIsOpen}
//       >
//         <h4>You can follow the following steps:</h4>
//         <ul style={{ listStyle: "none" }}>
//           <li>Start to think in React</li>
//           <li>Master the state Management</li>
//           <li>Master the props </li>
//         </ul>
//       </QuestionItem>
//     </div>
//   );
// }

// function QuestionItem({ title, index, curOpen, onOpen, children }) {
//   const isOpen = index === curOpen;

//   function handleChange() {
//     onOpen(isOpen ? null : index);
//   }

//   return (
//     <div className={`questionItem ${isOpen ? "selected" : ""}`}>
//       <div className="question" onClick={handleChange}>
//         <h3 className={`${isOpen ? "selectedH31" : ""}`}>0{index + 1}</h3>
//         <h3 className={`${isOpen ? "selectedH32" : ""}`}>{title}</h3>
//         <span>{isOpen ? "-" : "+"}</span>
//       </div>
//       <div className={`answer ${isOpen ? " " : "hide"}`}>{children}</div>
//     </div>
//   );
// }

// Final Coding Challange  State Management Section

import { useState } from "react";

function App() {
  return (
    <div className="app">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [billAmt, setBillAmt] = useState("");
  const [myPercent, setMyPercent] = useState(0);
  const [friendPercent, setFriendPercent] = useState(0);

  let myPercentPay = Number(((myPercent / 100) * billAmt).toFixed(0));
  let friendPercentPay = Number(((friendPercent / 100) * billAmt).toFixed(0));

  let averagePay = Number(((myPercentPay + friendPercentPay) / 2).toFixed(1));

  function handleReset() {
    setBillAmt("");
    setMyPercent(0);
    setFriendPercent(0);
  }

  return (
    <>
      <Decision
        billAmt={billAmt}
        setBillAmt={setBillAmt}
        myPercent={myPercent}
        setMyPercent={setMyPercent}
        friendPercent={friendPercent}
        setFriendPercent={setFriendPercent}
      />
      <Display billAmt={billAmt} averagePay={averagePay} />
      <Reset onReset={handleReset} />
    </>
  );
}

function Decision({
  billAmt,
  setBillAmt,
  myPercent,
  setMyPercent,
  friendPercent,
  setFriendPercent,
}) {
  return (
    <div>
      <Question>
        <h4>How much was the Bill?</h4>
        <input
          type="number"
          name="bill"
          id="bill"
          placeholder="0"
          value={billAmt}
          onChange={(e) => setBillAmt(Number(e.target.value))}
        />
      </Question>
      <Question>
        <h4>How did you like the service?</h4>
        <select
          name="myInPercent"
          id="myInPercent"
          value={myPercent}
          onChange={(e) => setMyPercent(Number(e.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </Question>
      <Question>
        <h4>How did your friend like the service?</h4>
        <select
          name="friendInPercent"
          id="friendInPercent"
          value={friendPercent}
          onChange={(e) => setFriendPercent(Number(e.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </Question>
    </div>
  );
}

function Question({ children }) {
  return (
    <div className="questions" style={{ display: "flex" }}>
      {children}
    </div>
  );
}

function Display({ billAmt, averagePay }) {
  return (
    <h2>
      You Pay ${billAmt + averagePay} (${billAmt === "" ? 0 : billAmt} + $
      {averagePay} tip)
    </h2>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
