export function Button() {
  function handleClick() {
    alert("clicked!!!");
  }

  return <button onClick={handleClick}>Click</button>;
}

export default function Button2() {
  return <button onClick={() => alert("clicked")} Click></button>;
}

export function Button3({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

function Button4({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export function PlayButton({ movieName }) {
  function handleButton() {
    alert(`Playing ${movieName}`);
  }

  return <Button4 onClick={handleButton}>Play "{movieName}"</Button4>;
}

export function UploadButton() {
  return <Button4 onClick={() => alert("clicked!!!!")}>haholula</Button4>;
}

export function Button5({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

export function Button6() {
  return <button onClick={(e) => {e.stopPropagation(); alert("Playing!")}}>Play Movie</button>
}

export function Formmed() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      alert("Submitting!");
    }}>
      <input></input>
      <button>send</button>
    </form>
  )
}