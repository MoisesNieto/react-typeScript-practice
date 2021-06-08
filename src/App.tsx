import React from "react";
import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/counter";

import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";


function App() {
  return (
    <div className="App">
     <h1>React + TypeScript</h1>
     <hr/>
     <Counter />

     <Usuario />
     <h2>useEffect - useRef</h2>
     <hr/>

     <TimerPadre />

     <h2>useReducer</h2>
     <hr />
    <ContadorRed/>
     
    </div>
  );
}

export default App;
