import { element } from 'prop-types';
import React, {Component} from 'react';
import styled from 'styled-components';
import './App.css'

const box = () => {
  <div className = "box">
    <p> i'm a box</p>
  </div>
}

const box2 = () => {
  <div className = "box2">

  </div>
}


function App() {
  return (


    <div className = "box">

  <div className = "box2">  

    </div>

      <div className = "row">

        <button className = "Button">7</button>
        <button className = "Button">8</button>
        <button className = "Button">9</button>
        <button className = "Button">/</button>

      </div>

      <div className = "row">

        <button className = "Button">4</button>
        <button className = "Button">5</button>
        <button className = "Button">6</button>
        <button className = "Button">*</button>

      </div>

      <div className = "row">

        <button className = "Button">1</button>
        <button className = "Button">2</button>
        <button className = "Button">3</button>
        <button className = "Button">-</button>

      </div>

      <div className = "row">

        <button className = "Button">.</button>
        <button className = "Button">0</button>
        <button className = "Button">=</button>
        <button className = "Button">+</button>

      </div>
      
    </div>
  );
}

export default App;
