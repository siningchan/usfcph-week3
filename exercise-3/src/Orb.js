import React, { useState } from "react";

const Orb = ({ setColorCount }) => {
  // Learn more about useState: https://reactjs.org/docs/hooks-state.html
  const [orbColor, setOrbColor] = useState("white");

  // Make an array of all the colors the orb can be
  const colors = [
    "white",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple"
  ];

  // Create a Function that we will call when the orb is clicked on
  // The Function will change the orb's color to the next one in the Array
  const changeColor = () => {
    // // Find what the next color is
    const nextColor = colors[colors.findIndex(color => color === orbColor) + 1];
    const newColor = nextColor || "white";

    // Update the counter from App
    setColorCount(newColor, orbColor);

    // Update state, forcing our app to rerender
    // When we exhaust the Array of colors, the orb will go back to white
    setOrbColor(newColor);
  };

  return (
    <svg width="100" height="100" id="orb" onClick={changeColor}>
      <circle cx="50" cy="50" r="50" stroke="black" fill={orbColor} />
    </svg>
  );
};

export default Orb;
