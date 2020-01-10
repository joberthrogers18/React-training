import React, { useState } from "react";

import "./Calculator.css";
import Display from "./Display";
import Panel from "./ButtonsPannel";

export default function Calculator() {
  const [content, useContent] = useState("");

  return (
    <div className="calculator">
      <Display content={content} />
      <Panel />
    </div>
  );
}
