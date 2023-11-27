import { useState } from "react";

// The Form section
export function Form({ onAddItems, items }) {
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
