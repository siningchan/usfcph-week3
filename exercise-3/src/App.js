import React, { useState } from "react";
import { Columns, Container, Heading, Section } from "react-bulma-components";
import Orb from "./Orb";
import "./App.css";

const App = () => {
  const [colorCounts, setColorCounts] = useState({
    white: 5,
    red: 0,
    orange: 0,
    yellow: 0,
    green: 0,
    blue: 0,
    purple: 0
  });

  return (
    <Section>
      <Container>
        <Columns size="mobile" className="is-centered is-vcentered full-page">
          <Columns.Column className="has-text-centered padding">
            <Heading>Magic Orbs</Heading>

            <Orb colorCounts={colorCounts} setColorCounts={setColorCounts} />
            <Orb colorCounts={colorCounts} setColorCounts={setColorCounts} />
            <Orb colorCounts={colorCounts} setColorCounts={setColorCounts} />
            <Orb colorCounts={colorCounts} setColorCounts={setColorCounts} />
            <Orb colorCounts={colorCounts} setColorCounts={setColorCounts} />

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
