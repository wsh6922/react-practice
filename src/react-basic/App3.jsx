import { useState } from "react";
import MovingDot from "./MovingDot";
import Form from "./Form";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <main>
        <h1>{number}</h1>
        <button
          onClick={() => {
            setNumber((number) => number + 5);
            setNumber((number) => number + 5);
            setNumber((number) => number + 5);
            setTimeout(() => {
              alert(number);
            }, 3000);
          }}
        >
          +5
        </button>
        <MovingDot></MovingDot>
        <Form></Form>
      </main>
    </>
  );
}

export default App;