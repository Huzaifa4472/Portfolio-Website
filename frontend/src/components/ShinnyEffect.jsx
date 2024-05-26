import React from "react";

const ShinnyEffect = ({ left, right, top, size = 500 }) => {
  const positionStyled = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: -1,
  };
  if (left !== undefined) {
    positionStyled.left = `${left}px`;
  }
  if (right !== undefined) {
    positionStyled.right = `${right}px`;
  }
  return (
    <div className="shinny-effect" style={positionStyled}>
      Shinny Effect
    </div>
  );
};

export default ShinnyEffect;
