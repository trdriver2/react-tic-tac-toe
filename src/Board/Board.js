import React from "react";
import Space from "./Space";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: props.size,
      spaceArray: new Array(props.size * props.size).fill(""),
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

  place = id => {
    //let spaceArray = [...this.state.spaceArray]
    if (this.state.spaceArray[id] !== "") return null;
    let spaceArray = [...this.state.spaceArray];
    spaceArray[id] = this.state.turn;
    console.log(id);
    this.setState({
      spaceArray: spaceArray
    });

    this.toggle();
  };

  generateSpaces(length) {
    let spaces = new Array(length * length);
    for (let i = 0; i < length * length; i++) {
      spaces.push(
        //NOTE:KEYS ARNT PASSED AS PROPS
        <Space id={i} key={i} onClick={this.place}>
          {this.state.spaceArray[i]}
        </Space>
      );
    }
    return spaces;
  }

  render() {
    return <div style={BoardStyle}>{this.generateSpaces(this.props.size)}</div>;
  }

  spaceResize(newSize) {
    this.setState({ size: newSize });
  }
}

const BoardStyle = {
  display: "grid",
  position: "absolute",
  gridTemplateColumns: "repeat(3, 30%)",
  gridAutoRows: "30%",
  gridRowGap: "0",
  margin: "0 auto",
  left: "200px",
  width: "100vh",
  height: "100vh"
};

export default Board;
