import { useEffect, useState } from "react";

const App10 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleIncreaseClick = () => {
    console.log("count 값이 바뀜");
    setCount((prev) => prev + 1);
  };

  const handleInputChange = (e) => {
    console.log("input 값이 바뀜");
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("렌더링 완료");
  }, []);

  return (
    <>
      <div>
        <h3>{count}</h3>
        <button onClick={handleIncreaseClick}>+1</button>
        <h3 />
        <input type="text" onChange={handleInputChange} />
        <h3>{text}</h3>
      </div>
    </>
  );
};

export default App10;
