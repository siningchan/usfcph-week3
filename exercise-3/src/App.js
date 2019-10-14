import React, { useState } from "react";
import { Columns, Container, Heading, Section } from "react-bulma-components";
import Orb from "./Orb";
import "./App.css";

const App = () => {
  // Learn more about useState: https://reactjs.org/docs/hooks-state.html
  const [colorCounts, setColorCounts] = useState({
    white: 5,
    red: 0,
    orange: 0,
    yellow: 0,
    green: 0,
    blue: 0,
    purple: 0
  });

  const setColorCount = (newColor, oldColor) => {
    // Clone the old state as a starting place
    const newColorCounts = { ...colorCounts };
    // Increment the new color
    newColorCounts[newColor] += 1;
    // Decrement the old color
    newColorCounts[oldColor] -= 1;
    // Update state to trigger a rerender
    setColorCounts(newColorCounts);
  };

  return (
    <Section>
      <Container>
        <Columns size="mobile" className="is-centered is-vcentered full-page">
          <Columns.Column className="has-text-centered padding">
            <Heading>Magic Orbs</Heading>

            <Orb setColorCount={setColorCount} />
            <Orb setColorCount={setColorCount} />
            <Orb setColorCount={setColorCount} />
            <Orb setColorCount={setColorCount} />
            <Orb setColorCount={setColorCount} />
            {/* Homework: Try adding 5 orbs - hint: you will need to update state */}

            <p className="white">White: {colorCounts.white}</p>
            <p className="red">Red: {colorCounts.red}</p>
            <p className="orange">Orange: {colorCounts.orange}</p>
            <p className="yellow">Yellow: {colorCounts.yellow}</p>
            <p className="green">Green: {colorCounts.green}</p>
            <p className="blue">Blue: {colorCounts.blue}</p>
            <p className="purple">Purple: {colorCounts.purple}</p>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};

export default App;
