import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Li = styled.li`
  margin-bottom: 40px;
  list-style: none;
`;

const P = styled.a`
  font-size: 20px;
`;

const Div = styled.div`
  opacity: 0;
`;

const postsPerPage = 10;

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ref = useRef(null);

  async function fetchPosts(page) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    const newData = result.slice(0, page * postsPerPage);
    setData(newData);
  }

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const target = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentPage((prev) => prev + 1);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      },
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [data]);
  return (
    <>
      <main>
        <ul>
          {data.map((d, i) => (
            <Li key={d.id}>
              {}
              <P>
                {d.id}.{d.title}
              </P>
              <span>{d.body}</span>
              {i === data.length - 1 && <Div ref={ref}>LAST PAGE</Div>}
            </Li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
