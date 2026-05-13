import { UseRef, Form } from "./UseRef";
import Stopwatch from "./Stopwatch";
import { UseEffect, UseEffect2 } from "./useEffect";
import UseMemo from "./UseMemo";
import Game from "./Game";

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
        <UseMemo></UseMemo>;
      </>
    );
  } else {
    return (
      <Game></Game>
    )
  }
}

export default App;
