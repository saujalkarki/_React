import { useState } from "react";
import Item from "./Item.jsx";

// The List section
export function List({ onDeleteItems, onChecked, onClearClick, list }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = list;
  }
  if (sortBy === "description") {
    sortedItems = list
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = list.slice().sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((list) => (
          <Item
            onDeleteItems={onDeleteItems}
            onChecked={onChecked}
            list={list}
            key={list.description + list.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => onClearClick()}>Clear List</button>
      </div>
    </div>
  );
}
