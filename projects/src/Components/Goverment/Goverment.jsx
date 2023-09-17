import React from "react";
import styled from "styled-components";
import Data from "./Data";

import { useState } from "react";

export default function Goverment() {
  const [showForm, setShowForm] = useState(false);

  const handleFormButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
    {<div>{showForm && <Data />}</div>}
    <Section>
      
      <nav>
        <button
          style={{ padding: "0.4rem 1.5rem" }}
          onClick={handleFormButtonClick}
        >
          Data
        </button>
        <button style={{ padding: "0.4rem 1.5rem", marginLeft: "1rem" }}>
          Received Order
        </button>
      </nav>
    </Section>
    </>
  );
}

const Section = styled.div`
  width: 100%;
  height: 100vh;

  background-color: green;

  nav {
    width: 100%;
    padding: 1rem;

    background-color: red;

    button {
      border: none;
      background-color: blue;
      color: white;
      font-size: 1rem;
    }
  }
`;
