import { useEffect, useRef, useState } from "react";

const App11 = () => {
  const [text, setText] = useState("");
  const textRef = useRef();

  const handleInputChange = (e) => {
    textRef.current = e.target.value;
  };

  const handleSendClick = () => {
    setText(textRef.current);
  };

  useEffect(() => {
    console.log("렌더링!");
  }, [text]);

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSendClick}>전송</button>
      <h3>전송된 단어 : {text}</h3>
    </div>
  );
};

export default App11;
