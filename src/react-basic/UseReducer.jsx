import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { age: state.age + 1 };
    case "changeName":
      return { ...state, name: state.newName };
    default:
      throw new Error("Unknown action " + action.type);
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { name: "mandoo", age: 0 });

  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment age
      </button>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "changeName", newName: e.target.value })
        }
      />
      <p>Hello! You are {state.age}.</p>
    </>
  );
}

export default UseReducer;
