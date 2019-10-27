import React from "react";
import "./App.css";
import Board from "./Board/Board";
import SidePannel from "./SidePannel/SidePannel";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 3,
      turn: "X",
      play: true
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

  checkEnter = e => {
    if (e.key === "Enter") {
      this.setState({ size: this.props.size });
    }
  };

  gameOver = () => this.setState({ play: false });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Board
            toggle={this.toggle}
            turn={this.state.turn}
            size={this.state.size}
            gameOver={this.gameOver}
            play={this.state.play}
          />
          <SidePannel size={this.state.size} />
        </header>
      </div>
    );
  }
}
export default App;
