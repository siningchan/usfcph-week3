import React, { useState } from "react";
import { Columns, Container, Heading, Section } from "react-bulma-components";
import "./App.css";

const App = () => {
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
  // Learn more about useState: https://reactjs.org/docs/hooks-state.html
  const [orbColor, setOrbColor] = useState("white");

  // Create a Function that we will call when the orb is clicked on
  // The Function will change the orb's color to the next one in the Array
  // When we exhaust the Array of colors, the orb will go back to white
  const changeColor = () => {
    // // Find what the next color in the list is
    const newColor =
      colors[colors.findIndex(color => color === orbColor) + 1] || "white";
    // Update state, forcing our app to rerender
    setOrbColor(newColor);
  };

  return (
    <Section>
      <Container>
        <Columns size="mobile" className="is-centered is-vcentered full-page">
          <Columns.Column className="has-text-centered padding">
            <Heading>The Magic Orb</Heading>

            <svg width="100" height="100" id="orb" onClick={changeColor}>
              <circle cx="50" cy="50" r="50" stroke="black" fill={orbColor} />
            </svg>

            <p>The orb is {orbColor}</p>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
}

export default App;
