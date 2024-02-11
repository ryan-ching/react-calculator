import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (/^[0-9]$/.test(e.key)) {
        inputRef.current.value =
          inputRef.current.value == 0 ? e.key : inputRef.current.value + e.key;
      } else if (e.key == "*" || e.key == "x") {
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value));
      } else if (e.key == "/") {
        e.preventDefault();
        setResult((result) => result / Number(inputRef.current.value));
      } else if (e.key == "+") {
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value));
      } else if (e.key == "-") {
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value));
      } else if (e.key == "c") {
        e.preventDefault();
        inputRef.current.value = "";
      } else if (e.key == "v") {
        e.preventDefault();
        setResult((result) => 0);
      } else if (e.key == "b") {
        e.preventDefault();
        inputRef.current.value = "";
        setResult((result) => 0);
      }
    };
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult((result) => 0);
  }

  const append = (value, e) => {
    e.preventDefault();
    inputRef.current.value = inputRef.current.value == 0 ? value : inputRef.current.value + value;
  };

  return (
    <div className="App">
      <div>
        <h1>Calculator</h1>
      </div>
      <form>
        <h2>Input</h2>
        <input ref={inputRef} type="text" />
        <h2>Result</h2>
        <p ref={resultRef}>{result}</p>
        <div className="all-buttons">
          <button onClick={(e) => append(7, e)}>7</button>
          <button onClick={(e) => append(8, e)}>8</button>
          <button onClick={(e) => append(9, e)}>9</button>
          <button onClick={minus}>-</button>

          <button onClick={(e) => append(4, e)}>4</button>
          <button onClick={(e) => append(5, e)}>5</button>
          <button onClick={(e) => append(6, e)}>6</button>
          <button onClick={times}>X</button>

          <button onClick={(e) => append(1, e)}>1</button>
          <button onClick={(e) => append(2, e)}>2</button>
          <button onClick={(e) => append(3, e)}>3</button>
          <button onClick={divide}>/</button>

          <button onClick={(e) => append(0, e)}>0</button>
          <button onClick={resetInput}>C</button>
          <button onClick={resetResult}>AC</button>
          <button onClick={plus}>+</button>
        </div>
      </form>
    </div>
  );
}

export default App;
