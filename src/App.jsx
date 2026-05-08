import List from "./List";
import CounterList from "./CounterList";
import { List2 } from "./List";
import { Form2, Form3, Form4 } from "./Form2";

function App() {
  let isBool = false;

  if (isBool) {
    return (
      <>
        <List></List>
        <CounterList></CounterList>
        <List2></List2>
      </>
    );
  } else {
    return (
      <>
        <Form2></Form2>
        <Form3></Form3>
        <Form4></Form4>
      </>
    );
  }
}

export default App;
