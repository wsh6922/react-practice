import { useEffect, useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "일본",
    };
  }, [isKorea]);

  useEffect(() => {
    console.log(
      "의존성 배열에 요소가 있으니까 초기 렌더링과 의존성 배열안 요소가 변경될 때마다 재랜더링 후 실행",
    );
  }, [location]);

  return (
    <header>
      <h2>How</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <hr></hr>
      <h2>Where</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>Update</button>
    </header>
  );
}

export default UseMemo;
