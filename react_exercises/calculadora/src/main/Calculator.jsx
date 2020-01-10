import React, { useState } from "react";

import "./Calculator.css";
import Display from "./Display";
import Panel from "./ButtonsPannel";

export default function Calculator() {
  const [content, setContent] = useState("");

  function clear(content) {
    setContent(content);
  }

  function appendFunction(newContent) {
    if (String(content).trim() === "Sintaxe Invalida") {
      setContent("");
      return setContent(newContent);
    }

    setContent(content + newContent);
  }

  function calculateResult() {
    try {
      let result = eval(content);
      setContent(result);
    } catch (err) {
      setContent("Sintaxe Invalida");
    }
  }

  return (
    <div className="calculator">
      <Display content={content} />
      <Panel
        clear={clear}
        appendFunction={appendFunction}
        calculateResult={calculateResult}
      />
    </div>
  );
}
