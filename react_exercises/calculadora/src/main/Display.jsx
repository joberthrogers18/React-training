import React from "react";

import "./Calculator.css";

export default function Display({ content }) {
  return (
    <div className="display">
      <h1>{content}</h1>
    </div>
  );
}
