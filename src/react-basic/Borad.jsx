import Square from "./Square";

function Board({ xIsNext, squares, onPlay }) {
  const onSquareClick = (index) => {
    const newSquares = squares.slice(); // 배열을 직접 접근해서 수정하기 보다는 복사해서 사용할 것, 객체도 마찬가지

    if (xIsNext) {
      newSquares[index] = "O";
    } else {
      newSquares[index] = "X";
    }
    onPlay(newSquares);
  };

  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next: " + (xIsNext ? "O" : "X");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          className="square"
          value={squares[0]}
          onSquareClick={() => {
            onSquareClick(0);
          }}
        ></Square>
        <Square
          className="square"
          value={squares[1]}
          onSquareClick={() => {
            onSquareClick(1);
          }}
        ></Square>
        <Square
          className="square"
          value={squares[2]}
          onSquareClick={() => {
            onSquareClick(2);
          }}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          className="square"
          value={squares[3]}
          onSquareClick={() => {
            onSquareClick(3);
          }}
        ></Square>
        <Square
          className="square"
          value={squares[4]}
          onSquareClick={() => {
            onSquareClick(4);
          }}
        ></Square>
        <Square
          className="square"
          value={squares[5]}
          onSquareClick={() => {
            onSquareClick(5);
          }}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          className="square"
          value={squares[6]}
          onSquareClick={() => onSquareClick(6)}
        ></Square>
        <Square
          className="square"
          value={squares[7]}
          onSquareClick={() => onSquareClick(7)}
        ></Square>
        <Square
          className="square"
          value={squares[8]}
          onSquareClick={() => onSquareClick(8)}
        ></Square>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const answer = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i <= answer.length; i++) {
    const [a, b, c] = answer[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // null이 아니고 O인지 X인지는 위 조건문에서 검사
    }

    return null; // 명시적으로 falsy인 null을 반환
  }
}

export default Board;
