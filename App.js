import React, {Component} from 'react';
import styled from 'styled-components';
 
const Button = styled.button`

  background-color: #7c7e80;
  border-style: dashed;
  color: orange;
  height: 100px;
  width: 100px;
  font-size: 40px;
  border-radius: 100px;
  cursor: pointer;
  
  position: relative;
  left: 10%;
  top: 20%;
`

const Frame = styled.button`

  width: 600px;
  height: 500px;
  background-color: #666362;
  color: white;
  position: absolute;
  top: 30%;
  left: 40%;
`

const Input = styled.input`

  background-color: red;

`

const screen = styled.input`

  color: red;

`

function clicked(){
  alert("You've clicked me!! It hurts!");
}

function App() {
  return (
  
    <div>
  <Frame>

    <div className = "row">
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>/</Button>
    </div>

    <div className = "row">
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>*</Button>
    </div>

    <div className = "row">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>-</Button>
    </div>

    <div className = "row">
      <Button>.</Button>
      <Button>0</Button>
      <Button>=</Button>
      <Button>+</Button>
    </div>

  </Frame>
    </div>

  );
}

export default App;
