import React from "react";

// import { Container } from './styles';

export default function Panel(props) {
  return (
    <div className="panel">
      <button className="btn-max-1" onClick={() => props.clear("")}>
        AC
      </button>
      <button className="signals" onClick={() => props.appendFunction("/")}>
        /
      </button>
      <button onClick={() => props.appendFunction("7")}>7</button>
      <button onClick={() => props.appendFunction("8")}>8</button>
      <button onClick={() => props.appendFunction("9")}>9</button>
      <button className="signals" onClick={() => props.appendFunction("*")}>
        *
      </button>
      <button onClick={() => props.appendFunction("4")}>4</button>
      <button onClick={() => props.appendFunction("5")}>5</button>
      <button onClick={() => props.appendFunction("6")}>6</button>
      <button className="signals" onClick={() => props.appendFunction("-")}>
        {" "}
        -{" "}
      </button>
      <button onClick={() => props.appendFunction("1")}>1</button>
      <button onClick={() => props.appendFunction("2")}>2</button>
      <button onClick={() => props.appendFunction("3")}>3</button>
      <button className="signals" onClick={() => props.appendFunction("+")}>
        +
      </button>
      <button className="btn-max-2" onClick={() => props.appendFunction("0")}>
        0
      </button>
      <button onClick={() => props.appendFunction(".")}>.</button>
      <button className="signals" onClick={props.calculateResult}>
        {" "}
        ={" "}
      </button>
    </div>
  );
}
