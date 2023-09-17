import React from 'react'
import Button from './Button';
import styled from 'styled-components';

export default function Recommended() {
  return (
    <Container>
      <h1>Recommended For You</h1>
      <div className="div">
        <Button/>
      </div>
    </Container>
  )
}


const Container = styled.div`
width: 100%;
height: 100vh;

background-color: #77db99;


h1{
    text-decoration: underline;
    text-align: center;
    padding: 3rem 0rem 0rem 0rem;
}

.div{
    margin: 2rem auto;
    width: 80%;
    
}


`;