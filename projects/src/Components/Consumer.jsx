import styled from "styled-components";
import Button from "./Button";
import ConsumerForm from "./ConsumerForm";
import { useState } from "react";

export default function Consumer() {
  const [showForm, setShowForm] = useState(false);

  const handleFormButtonClick = () => {

    setShowForm(!showForm);
  };

  return (
    <Container>
        {
             <div>{showForm && <ConsumerForm />}</div>
        }
      <div className="item">
        <button type="submit" onClick={handleFormButtonClick}>
          Add Details
        </button>
      </div>

      <Button />

     
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #80c780;

  .item {
    width: 100%;
    padding: 1rem;

    display: flex;
    justify-content: flex-end;

    button {
      padding: 1rem;
    }
  }
`;
