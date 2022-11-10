import React, { useState } from "react";
import "./Styles/App.scss";
import { Button, ButtonGroup } from "react-bootstrap";
import Fade from "react-bootstrap/Fade";
export default function App() {
  const [number, setNumber] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="">
        <p className="h1">Guess if the number is Even or Odd</p>
        <ButtonGroup
          onClick={() => {
            setOpen(!open);
            open == false
              ? setNumber(Math.floor(Math.random() * 100 + 1))
              : setNumber(0);
          }}
          aria-controls="testing"
          aria-expanded={open}
          className=""
        >
          <Button className="">Even</Button>
          <Button className="">Odd</Button>
        </ButtonGroup>
        <Fade in={open} timeout={100}>
          <p className="">{number}</p>
        </Fade>
      </div>
    </>
  );
}
