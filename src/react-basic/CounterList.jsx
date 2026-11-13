import { useState } from "react";

let initialCounters = [0, 0, 0];

function CounterList() {
  const [counters, setCounters] = useState(initialCounters);

  const handleIncrementClick = (index) => {
    const nextCounters = counters.map((c, i) => {
      console.log(c);
      if (i === index) return c + 1;
      else return c;
    });
    return setCounters(nextCounters);
  };

  return (
    <ul>
      {counters.map((counter, index) => (
        <li key={index}>
          {counter}
          <button
            onClick={() => {
              handleIncrementClick(index);
            }}
          >
            +1
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CounterList;
