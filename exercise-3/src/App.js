import React, { useState } from "react";
import { Columns, Container, Heading, Section } from "react-bulma-components";
import Orb from "./Orb";
import "./App.css";

const App = () => {
  // Learn more about useState: https://reactjs.org/docs/hooks-state.html
  const [orbColor, setOrbColor] = useState("white");

  return (
    <Section>
      <Container>
        <Columns size="mobile" className="is-centered is-vcentered full-page">
          <Columns.Column className="has-text-centered padding">
            <Heading>The Magic Orb</Heading>

            <Orb orbColor={orbColor} setOrbColor={setOrbColor} />

            <p>The orb is {orbColor}</p>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};

export default App;
