import React, { useContext } from "react";
import { Fade } from "react-bootstrap";
import { checkNumber } from "../App";
export default function CheckIsOdd() {
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
