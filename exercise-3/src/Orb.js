import React from "react";

const Orb = ({ orbColor, setOrbColor }) => {
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
    const newColor = colors[colors.findIndex(color => color === orbColor) + 1];

    // Update state, forcing our app to rerender
    // When we exhaust the Array of colors, the orb will go back to white
    setOrbColor(newColor || "white");
  };

  return (
    <svg width="100" height="100" id="orb" onClick={changeColor}>
      <circle cx="50" cy="50" r="50" stroke="black" fill={orbColor} />
    </svg>
  );
};

export default Orb;
