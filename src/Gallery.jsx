import styled from "styled-components";
import { sculptureList } from "./payload/data";
import { useState } from "react";

const Section = styled.section`
  width: 50%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
`;

function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
        <Section>
        <button onClick={handleNextClick}>Next</button>
        <h2>
          <i>{sculpture.name}</i>
          by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <button onClick={handleMoreClick}>
          {showMore ? "Hide" : "show"} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
        <img src={sculpture.url} alt={sculpture.alt}></img>
      </Section>
    </>
  );
}
export default Gallery;
