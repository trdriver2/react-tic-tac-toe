import React from "react";

function Space(props) {
  return (
    <button
      style={SpaceStyle}
      type="button"
      onClick={() => props.onClick(props.id)}
    >
      {props.children}
    </button>
  );
}

const SpaceStyle = {
  padding: 0,
  fontSize: "1000%"
};

export default Space;
