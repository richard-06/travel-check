export function Stats({ item }) {
  const totalItem = item.length;
  const itemPacked = item.filter((item) => item.packed).length;
  const percentage = Math.round((itemPacked / totalItem) * 100);
  if (!totalItem)
    return (
      <footer>
        <p className="stats"> Add some items to the list </p>
      </footer>
    );
  return (
    <footer className="stats">
      {percentage === 100
        ? "Everything is packed and you are ready to go ✈️"
        : `You have ${totalItem} items on you list and you have packed ${itemPacked}
      items(${percentage}%)`}
    </footer>
  );
}
