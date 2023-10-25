export function Item({ item, handleItemDeletion, checkItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => checkItem(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleItemDeletion(item.id)}>⚔️</button>
    </li>
  );
}
