import React from "react";
import SizeBar from "./SizeBar";

class SidePannel {
  constructor(props) {
    super(props);
  }

  enter = e => {
    if (e.key === "Enter") this.setState({ size: this.props.size });
  };
  render() {
    return <SizeBar></SizeBar>;
  }
}

export default SidePannel;
