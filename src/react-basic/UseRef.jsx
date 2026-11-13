import { useRef } from "react";

function UseRef() {
  const ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }

  return <button onClick={handleClick}>Click</button>;
}

function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef}></input>
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}

export { UseRef, Form };