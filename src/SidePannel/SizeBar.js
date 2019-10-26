import React from "react";

class SizeBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        placeholder="Board Width"
        onKeyDown={this.props.onKeyDown}
        onChange={this.handelOnChange}
        type="text"
      />
    );
  }
}

export default SizeBar;
