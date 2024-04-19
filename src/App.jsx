import "./App.css";
import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import { HayMasDeDiez, HayMenosDeDiez } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const addOne = () => {
    setCount((cuenta) => cuenta + 1);
  };
  const minusOne = () => {
    setCount((cuenta) => cuenta - 1);
  };

  const isCountHigherThan10 = count > 10;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>La clasesita para Majo</h1>
      <h2>La cuenta es: {count}</h2>
      <div className="card">
        <button onClick={addOne}>SUMAR UNO </button>
        <button style={{ marginLeft: 50 }} onClick={minusOne}>
          RESTAR UNO{" "}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {isCountHigherThan10 ? <HayMasDeDiez /> : <HayMenosDeDiez />}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
