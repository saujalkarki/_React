import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <List />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
  const [descp, setDescp] = useState("");
  const [quant, setQuant] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!descp) return;

    const newItems = {
      id: initialItems.length + 1,
      description: descp,
      quantity: quant,
      packed: false,
    };

    initialItems.push(newItems);

    setDescp("");
    setQuant(1);

    console.log(newItems);
    console.log(initialItems);
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

function List() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((list) => (
          <Item list={list} key={list.description} />
        ))}
      </ul>
    </div>
  );
}

function Item({ list }) {
  return (
    <li>
      <input type="checkbox" name="check?ed" />
      <span style={list.packed ? { textDecoration: "line-through" } : {}}>
        {list.quantity}&nbsp;
        {list.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X item on your list, and you already packed X (X%)</em>
    </footer>
  );
}
