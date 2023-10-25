import { useState } from "react";
import { Item } from "./Item";

export function List({ item, deleteFunc, toggleFunc, delFunc }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedList;
  if (sortBy === "input") sortedList = item;
  if (sortBy === "description") {
    sortedList = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    console.log(sortedList);
    sortedList = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
    console.log(sortedList);
  }
  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            item={item}
            handleItemDeletion={deleteFunc}
            key={item.id}
            checkItem={toggleFunc}
          />
        ))}
      </ul>
      <div className="select">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Item</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button onClick={delFunc}>Clear List</button>
      </div>
    </div>
  );
}
