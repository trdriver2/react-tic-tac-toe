import React from "react";
import "./App.css";
import Board from "./Board/Board";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 3,
      turn: "X"
    };
  }

  //Arrow functions in react autobind
  toggle = () => {
    if (this.state.turn === "X") {
      this.setState({ turn: "O" });
    } else {
      this.setState({ turn: "X" });
    }
  };

  spaceResize = newSize => {
    this.setState({ size: newSize });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Board
            toggle={this.toggle}
            turn={this.state.turn}
            size={this.state.size}
          ></Board>
        </header>
      </div>
    );
  }
}
export default App;
