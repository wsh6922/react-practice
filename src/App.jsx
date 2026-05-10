import { UseRef, Form } from "./UseRef";
import Stopwatch from "./Stopwatch";
import { UseEffect, UseEffect2 } from "./useEffect";
import UseMemo from "./UseMemo";

function App() {
  let isBool = false;

  if (isBool) {
    return (
      <>
        <UseRef></UseRef>
        <Stopwatch></Stopwatch>
        <Form></Form>
        <br></br>
        <UseEffect></UseEffect>
        <br></br>
        <UseEffect2></UseEffect2>
      </>
    );
  } else {
    return <UseMemo></UseMemo>;
  }
}

export default App;
