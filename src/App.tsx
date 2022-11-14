import React, { useState, createContext } from "react";
import "./Styles/App.scss";
import { Button, ButtonGroup } from "react-bootstrap";
import Fade from "react-bootstrap/Fade";
import CheckIsEven from "./Components/CheckIsEven";
import CheckIsOdd from "./Components/CheckIsOdd";

export const checkNumber = createContext<number>(0);

export default function App() {
  const [number, setNumber] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [isEven, setIsEven] = useState<boolean>(true);

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
            <checkNumber.Provider value={number}>
              {isEven === true ? (
                <Fade in={open}>
                  <CheckIsEven />
                </Fade>
              ) : (
                <Fade in={open}>
                  <CheckIsOdd />
                </Fade>
              )}
            </checkNumber.Provider>
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
      </div>
    </>
  );
}
