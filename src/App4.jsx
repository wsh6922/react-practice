import { useState } from "react";

function App() {
  const ID = "manddo";
  const PW = "1234";

  const [login, setLogin] = useState({
    id: "",
    pw: "",
  });

  const handleIdChanged = (e) => {
    setLogin((prev) => ({ ...prev, id: e.target.value }));
  };

  const handlePWChanged = (e) => {
    setLogin((prev) => ({ ...prev, pw: e.target.value }));
  };

  const handleLoginClicked = () => {
    if (ID === login.id && PW === login.pw) {
      alert("로그인 성공!");
      setLogin({ id: "", pw: "" });
    } else {
      alert("로그인 실패하였습니다.");
    }
  };

  return (
    <main>
      <input
        type="text"
        placeholder="아이디를 입력하세요."
        onChange={handleIdChanged}
        value={login.id}
      ></input>
      <input
        type="text"
        placeholder="비밀번호를 입력하세요."
        onChange={handlePWChanged}
        value={login.pw}
      ></input>
      <button onClick={handleLoginClicked}>Login</button>
    </main>
  );
}

export default App;
