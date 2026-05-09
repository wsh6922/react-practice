import { useState } from "react";

function Form5() {
  const [name, setName] = useState("Taylor");

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <p>Hello, {name}.</p>
    </>
  );
}

export default Form5;
