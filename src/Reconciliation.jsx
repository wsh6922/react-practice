import { memo, useState } from "react";

export default function Reconciliation() {
  const [list, setList] = useState(["🍎", "🍌", "🍇"]);

  return (
    <>
      <button onClick={() => setList(["🍓", ...list])}>🍓 추가</button>
      <ul>
        {list.map((item) => (
          <ListItem key={item} item={item} />
        ))}
      </ul>
    </>
  );
}

const ListItem = memo(({ item }) => {
  console.log(`${item} 렌더링`);
  return <li>{item}</li>;
});
