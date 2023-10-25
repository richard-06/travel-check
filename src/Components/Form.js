import { useState } from "react";

export function Form({ addItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function onSub(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, isPacked: false, id: Date.now() };
    addItem(newItem);
    console.log("item added");

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={onSub}>
      What do you need for your trip?
      <select
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
