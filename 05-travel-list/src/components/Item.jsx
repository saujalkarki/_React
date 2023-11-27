// The Items section-----default export
export default function Item({ onDeleteItems, onChecked, list }) {
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
