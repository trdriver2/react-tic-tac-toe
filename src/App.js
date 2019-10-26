import React from "react";
import "./App.css";
import Board from "./Board/Board";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Board size={3}></Board>
      </header>
    </div>
  );
}

export default App;
