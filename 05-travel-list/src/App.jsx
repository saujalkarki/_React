import { useState } from "react";

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
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} items={items} />
      <List
        onDeleteItems={handleDeleteItems}
        onChecked={handleChecked}
        list={items}
      />
      <Stats items={items} />
    </div>
  );
}

// The Logo section
function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form({ onAddItems, items }) {
  const [descp, setDescp] = useState("");
  const [quant, setQuant] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!descp) return;

    const newItems = {
      id: items.length + 1,
      description: descp,
      quantity: quant,
      packed: false,
    };

    setDescp("");
    setQuant(1);

    onAddItems(newItems);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        name="quantity"
        id="quantity"
        value={quant}
        onChange={(e) => setQuant(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((opt) => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={descp}
        onChange={(e) => setDescp(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}

// The List section
function List({ onDeleteItems, onChecked, list }) {
  return (
    <div className="list">
      <ul>
        {list.map((list) => (
          <Item
            onDeleteItems={onDeleteItems}
            onChecked={onChecked}
            list={list}
            key={list.description + list.id}
          />
        ))}
      </ul>
    </div>
  );
}

// The Items section
function Item({ onDeleteItems, onChecked, list }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={list.packed}
        name="check?ed"
        value={list.packed}
        onChange={() => onChecked(list.id)}
      />
      <span style={list.packed ? { textDecoration: "line-through" } : {}}>
        {list.quantity}&nbsp;
        {list.description}
      </span>
      <button onClick={() => onDeleteItems(list.id)}>❌</button>
    </li>
  );
}

// The stats
function Stats({ items }) {
  let itemPacked = items.filter((item) => item.packed).length;
  let itemPackedPercent = (itemPacked / items.length) * 100;
  let isPercentDecimal = !Number.isInteger(itemPackedPercent);

  return (
    <footer className="stats">
      {items.length ? (
        <em>
          💼 You have {items.length} item on your list,
          {itemPacked
            ? ` And you already packed ${itemPacked} item (${
                isPercentDecimal
                  ? itemPackedPercent.toFixed(1)
                  : itemPackedPercent
              }%)`
            : " And you haven't packed any item yet."}
        </em>
      ) : (
        <em>Let's have some packings.💼</em>
      )}
    </footer>
  );
}

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
