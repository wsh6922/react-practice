import { useState } from "react";
import styled from "styled-components";

const PointerMovie = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

function MovingDot() {
  const [postion, setPostion] = useState({
    x: 0,
    y: 0,
  });

  return (
    <>
      <PointerMovie
        onPointerMove={(e) => {
          setPostion({
            x: e.clientX,
            y: e.clientX,
          });
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${postion.x}px, ${postion.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        ></div>
      </PointerMovie>
    </>
  );
}

export default MovingDot;
