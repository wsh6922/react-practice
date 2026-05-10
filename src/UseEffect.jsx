import { useState, useEffect } from "react";
import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  background-color: pink;
  border-radius: 50%;
  opacity: 0.6;
  pointer-events: none;
  left: -20px;
  top: -20px;
  width: 40px;
  height: 40px;
  transform: ${(props) =>
    `translate(${props.$position.x}px, ${props.$position.y}px)`};
`;

function UseEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return <Div $position={position}></Div>;
}

function UseEffect2() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     if (count !== 0) {
  //       alert("count가 변경될때마다 리렌더링 된 후 useEffect안 alert 실행");
  //     }
  //   }, [count]);

  //   useEffect(() => {
  //     alert(
  //       "dependencies 의존성 배열이 비어있기 때문에 초기 렌더링이 된 후에만 useEffect 실행",
  //     );
  //   }, []);

//   useEffect(() => {
//     alert(
//       "dependencies 의존성 배열이 없기 때문에 모든 렌더링, 리렌더링마다 동작",
//     );
//   });

  return (
    <div>
      <h1>coount: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export { UseEffect, UseEffect2 };
