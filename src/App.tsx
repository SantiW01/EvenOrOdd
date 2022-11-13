import React, { useState, useContext, createContext } from "react";
import "./Styles/App.scss";
import { Button, ButtonGroup } from "react-bootstrap";
import Fade from "react-bootstrap/Fade";
export default function App() {
  const [number, setNumber] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [isEven, setIsEven] = useState<boolean>(true);
  const checkNumber = createContext<number>(number);

  function CheckIsEven(): any {
    const number: number = useContext(checkNumber);
    if (number % 2 === 0) {
      return (
        <>
          <p>You won!</p>
        </>
      );
    } else {
      return (
        <>
          <p>You lose! Better luck next time.</p>
        </>
      );
    }
  }

  function CheckIsOdd(): any {
    const number: number = useContext(checkNumber);

    if (number % 2 !== 0) {
      return (
        <>
          <p>You won!</p>
        </>
      );
    } else {
      return (
        <>
          <p>You lose! Better luck next time.</p>
        </>
      );
    }
  }

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="h1 col-auto p-5 text-center">Is Even or Odd</p>
        <ButtonGroup
          onClick={() => {
            setOpen(!open);
            open === false
              ? setNumber(Math.floor(Math.random() * 100 + 1))
              : setNumber(0);
          }}
          aria-controls="testing"
          aria-expanded={open}
          className="grid gap-4"
        >
          <Button onClick={() => setIsEven(!false)} className="btn">
            Even
          </Button>
          <button
            onClick={() => setIsEven(!true)}
            className="btn border-solid tx-bg-orange-600"
          >
            Odd
          </button>
        </ButtonGroup>
        <Fade in={open}>
          <p className="h1 font-bold text-xl mb-2 col-auto p-5 text-center">
            {number}
          </p>
        </Fade>
        <Fade in={open}>
          <button
            onClick={() => {
              setOpen(!open);
              setIsEven(isEven == true);
            }}
            className=""
          >
            Reset
          </button>
        </Fade>
        <Fade in={open}>
          <checkNumber.Provider value={number}>
            {isEven === true ? <CheckIsEven /> : <CheckIsOdd />}
          </checkNumber.Provider>
        </Fade>
      </div>
    </>
  );
}
