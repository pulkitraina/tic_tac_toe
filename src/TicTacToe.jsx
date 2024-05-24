// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./index.css";
import { X, Circle } from "lucide-react";
import { Button } from "../components/ui/button";

// eslint-disable-next-line react/prop-types
function Square({ ind, txt, setTxt, check, isCross, setIsCross }) {
  function handleClick() {
    if (!txt[ind]) {
      setTxt((prev) => {
        const newSqs = [...prev];
        newSqs[ind] = isCross
          ? [<X color="white" fontWeight={600} size={30} />, "X"]
          : [<Circle color="white" fontWeight={600} size={30} />, "O"];
        return newSqs;
      });
    }
  }

  useEffect(() => {
    check();
    setIsCross((prev) => !prev);
  }, [txt]);
  // Very important useEffect is as it ensures synchronous update of state variables

  return (
    <button
      className="w-20 h-20 bg-black rounded-lg hover:scale-90 transition-all duration-150 flex items-center justify-center"
      onClick={handleClick}
    >
      {txt[ind] ? txt[ind][0] : ""}
    </button>
  );
}

export default function TicTacToe() {
  const [data, setData] = useState(new Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [isCross, setIsCross] = useState(true);

  function checkWinner() {
    for (var i = 0; i < 3; i++) {
      // check horizontal
      if (
        data[i * 3] &&
        data[i * 3 + 1] &&
        data[i * 3 + 2] &&
        data[i * 3][1] === data[i * 3 + 1][1] &&
        data[i * 3 + 2][1] === data[i * 3 + 1][1]
      ) {
        setWinner(() => data[i * 3][1]);
        setIsCross(true);
        return;
      }

      // check vertical
      if (
        data[i] &&
        data[i + 3] &&
        data[i + 6] &&
        data[i][1] === data[i + 3][1] &&
        data[i + 6][1] === data[i + 3][1]
      ) {
        setWinner(() => data[i][1]);
        setIsCross(true);
        return;
      }
    }

    if (
      data[0] &&
      data[4] &&
      data[8] &&
      data[0][1] === data[4][1] &&
      data[4][1] === data[8][1]
    ) {
      setWinner(() => data[0][1]);
      setIsCross(true);
      return;
    }

    if (
      data[2] &&
      data[4] &&
      data[6] &&
      data[2][1] === data[4][1] &&
      data[4][1] === data[6][1]
    ) {
      setWinner(() => data[2][1]);
      setIsCross(true);
      return;
    }

    let draw = true;
    for (let i = 0; i < 9; i++)
      if (!data[i]) {
        draw = false;
        break;
      }

    if (draw) {
      setWinner(2);
      return;
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-10">
      <h1 className="text-6xl font-extrabold">TIC-TAC-TOE</h1>
      <div className="tic-tac-toe-container">
        <div
          className="flex flex-col gap-5"
          style={{ display: winner ? "none" : "flex" }}
        >
          <div className="flex gap-5">
            <Square
              ind={0}
              txt={data}
              setTxt={setData}
              check={checkWinner}
              isCross={isCross}
              setIsCross={setIsCross}
            />
            <Square
              ind={1}
              txt={data}
              setTxt={setData}
              check={checkWinner}
              isCross={isCross}
              setIsCross={setIsCross}
            />
            <Square
              ind={2}
              txt={data}
              setTxt={setData}
              check={checkWinner}
              isCross={isCross}
              setIsCross={setIsCross}
            />
          </div>
          <div className="flex gap-5">
            <Square
              ind={3}
              txt={data}
              setTxt={setData}
              check={checkWinner}
              isCross={isCross}
              setIsCross={setIsCross}
            />
            <Square
              ind={4}
              txt={data}
              setTxt={setData}
              check={checkWinner}
              isCross={isCross}
              setIsCross={setIsCross}
            />
            <Square
              ind={5}
              txt={data}
              setTxt={setData}
              check={checkWinner}
              isCross={isCross}
              setIsCross={setIsCross}
            />
          </div>
          <div className="flex gap-5">
            <Square
              ind={6}
              txt={data}
              setTxt={setData}
              check={checkWinner}
              isCross={isCross}
              setIsCross={setIsCross}
            />
            <Square
              ind={7}
              txt={data}
              setTxt={setData}
              check={checkWinner}
              isCross={isCross}
              setIsCross={setIsCross}
            />
            <Square
              ind={8}
              txt={data}
              setTxt={setData}
              check={checkWinner}
              isCross={isCross}
              setIsCross={setIsCross}
            />
          </div>
          <h1 className="w-full flex justify-center items-center gap-3">
            <span className="text-xl font-bold">Next player is:</span>
            <span>{isCross ? <X /> : <Circle />}</span>
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          {winner === "X" || winner === "O" ? (
            <>
              <div className="text-2xl font-bold text-gray-500">
                CONGRATS! <span className="text-yellow-400">{winner}</span> WON
              </div>
              <Button
                onClick={() => {
                  setData(new Array(9).fill(null));
                  setWinner(null);
                }}
              >
                RESET
              </Button>
            </>
          ) : winner === 2 ? (
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold drop-shadow-lg">Match Tied!</h1>
              <Button
                onClick={() => {
                  setData(new Array(9).fill(null));
                  setWinner(null);
                }}
              >
                Reset
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
