import React from "react";
import arrowimg from "./images/icon-arrow-down.svg";
import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
        </button>
      </header>
      {showInfo ? <p>{info}</p> : ""}
      <hr />
    </article>
  );
};

export default Question;
