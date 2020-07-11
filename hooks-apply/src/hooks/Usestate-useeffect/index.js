import React, {useState, useEffect} from 'react';

export default function UseStateandEffectExample() {
    const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  
  // Looks like ComponentDidMount
  useEffect(() => {
    console.log('first render');
  }, []);

  //Looks like ComponentWIllMount
  useEffect(() => {
    console.log('counter');
  }, [counter]);

  useEffect(() => {
    console.log('name');
  }, [name]);

  // Looks like ComponentWillUnmount
  useEffect(() => {
    return () => {
      console.log('component will unmount')
    };
  }, );
  

  function handlePlus() {
    // this is the way security to get the value preview and handle it after
    // with this way we get the value of state at the moment of action
    setCounter((prevState) => prevState + 1);
  }

  function handleMinus() {
    setCounter((prevState) => prevState - 1);
  }

  return (
    <div className="App">
      <h1>UseState and UseEffect example</h1>
      <div>
        <h1>
          {counter}
        </h1>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
      </div>
      <br/>
      <div>
        <span>{name}</span>
      </div>
      <br/>
      <div>
        <input type="text" onChange={e => setName(e.target.value)}/>
      </div>
    </div>
  );
}