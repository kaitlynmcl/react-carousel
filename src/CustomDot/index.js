import * as React from "react";

const CustomDot = ({ onClick, active, index, carouselState }) => {
  const { currentSlide } = carouselState;
  return (
    <li style={{ background: active ? "none" : "initial" }}>
      <button
        style={{ background: active ? "#e93a3a" : "initial" }}
        onClick={() => onClick()}
      />
    </li>
  );
};

export default CustomDot;