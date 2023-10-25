import { useState } from "react";
import { Form } from "./Form";
import { List } from "./List";
import { Logo } from "./Logo";
import { Stats } from "./Stats";

export default function App() {
  const [item, setItem] = useState([]);

  function deleteAllItems() {
    const confirmed = window.confirm(
      "Do you really wanna delete the list ????"
    );
    if (confirmed) setItem([]);
  }
  function addItem(val) {
    setItem((item) => [...item, val]);
  }

  function checkItem(id) {
    setItem((x) =>
      x.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );
  }

  function handleItemDeletion(id) {
    console.log("deletion");
    console.log(item.filter((item) => item.id !== id));
    console.log(item);
    console.log(id);
    setItem((item) => item.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />
      <List
        item={item}
        deleteFunc={handleItemDeletion}
        toggleFunc={checkItem}
        delFunc={deleteAllItems}
      />
      <Stats item={item} />
    </div>
  );
}
