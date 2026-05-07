import { useState, useEffect } from "react";
import { Button3, Button6 } from "./Button";
import { PlayButton, UploadButton } from "./Button";
import { Button5 } from "./Button";
import { Formmed } from "./Button";
import Gallery from "./Gallery";
import styled from "styled-components";
// import StoryTray from "./StoryTray";

const Page = styled.div`
    display: flex
`;

function App() {
  let time = useTime();

  const isBool = false;

  if (isBool) {
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "100vh",
            textAlign: "center",
            border: "5px solid red",
          }}
        >
          <h1 style={{ padding: "300px" }}>{time.toLocaleTimeString()}</h1>
          <Button3 message={"playing!"}>Play Movie</Button3>
          <Button3 message={"Null"}>Null</Button3>
          <PlayButton movieName={"Kiki's Delivery Service"}></PlayButton>
          <UploadButton></UploadButton>
          <Button5 onSmash={() => alert("smash one")}>smash one</Button5>
          <Button5 onSmash={() => alert("smash two")}>smash two</Button5>
          <div
            style={{ backgroundColor: "lightblue", padding: "20px" }}
            onClick={() => {
              alert("You clicked on the toolbar!");
            }}
          >
            <Button6></Button6>
          </div>
          <Formmed></Formmed>
          <Gallery></Gallery>
        </div>
      </>
    );
  } else {

    
    return (
      <>
        <Page>
          <Gallery></Gallery>
          <Gallery></Gallery>
        </Page>
      </>
    );
  }
}

function useTime() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default App;
