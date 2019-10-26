import React from "react";
import Space from "./Space";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.spaceArray = new Array(props.size * props.size).fill("");
  }

  place = id => {
    if (this.spaceArray[id] !== "") {
      return null;
    }
    this.spaceArray[id] = this.props.turn;
    console.log(id);
    this.props.toggle();
  };

  generateSpaces(length) {
    let spaces = new Array(length * length);
    for (let i = 0; i < length * length; i++) {
      spaces.push(
        //NOTE:KEYS ARNT PASSED AS PROPS
        <Space id={i} key={i} onClick={this.place}>
          {this.spaceArray[i]}
        </Space>
      );
    }
    return spaces;
  }

  render() {
    return <div style={BoardStyle}>{this.generateSpaces(this.props.size)}</div>;
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
