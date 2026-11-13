import List from "./List";
import CounterList from "./CounterList";
import { List2 } from "./List";
import { Form2, Form3, Form4 } from "./Form2";
import Form5 from "./Form5";
import { createContext, useContext, useState } from "react";
import UseReducer from "./UseReducer";
import styled from "styled-components";

const ThemeContext = createContext(null);

function App() {
  const [version, setVersion] = useState(0);
  const [theme, setTheme] = useState("light");
  let isBool = false;

  function handleReset() {
    setVersion(version + 1);
  }

  if (isBool) {
    return (
      <>
        <List></List>
        <CounterList></CounterList>
        <List2></List2>
        <Form2></Form2>
        <Form3></Form3>
        <Form4></Form4>
        <br></br>
        <div>
          <button onClick={handleReset}>Reset</button>
          <Form5 key={version}></Form5>
        </div>
        <br></br>
        <UseReducer></UseReducer>
      </>
    );
  } else {
    return (
      <>
        <ThemeContext.Provider value={theme}>
          <Form></Form>
          <label>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) => {
                setTheme(e.target.checked ? "dark" : "light");
              }}
            ></input>
            Use dark mode
          </label>
        </ThemeContext.Provider>
      </>
    );
  }
}

function Form() {
  return (
    <>
      <Panel title="Welcome">
        <Button>Sign up</Button>
        <Button>Login</Button>
      </Panel>
    </>
  );
}

const Sec = styled.section`
  border: 1px solid black;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 10px;
`;

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <Sec className={className}>
      <h1>{title}</h1>
      {children}
    </Sec>
  );
}

const Btn = styled.button`
  border: 1px solid #777;
  padding: 5px;
  margin-right: 10px;
  margin-top: 10px;
`;

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return <Btn className={className}>{children}</Btn>;
}

export default App;
