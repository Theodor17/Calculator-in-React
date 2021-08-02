import React, {Component} from 'react';
import Button from './components/Button';
import Display from './components/Display';
import Keypad from './components/Keypad';
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {
      expresie : ''
    };
  }

  calculare = () => {

    try{
      const rezultat = eval(this.state.expresie);
      this.setState({expresie: ''});
      this.setState ({expresie : rezultat});
    }catch(e){
      this.setState ({expresie : 'error'});
    }
  }

  clickTriggered = (e) => {
    
    const valoare = e.target.getAttribute('data-value');
    
    switch(valoare){

      case 'clear':
        this.setState({expresie : ''});
        break;

      case 'equal':
        this.calculare();
        break;

      default:
        this.setState({expresie : this.state.expresie + valoare});
    }

  }

  render(){

    return(

      <div className = "App">

      <Display val = {this.state.expresie}/>

        <Keypad>

        <div>
        <Button onClick = {this.clickTriggered} label = "7" value = "7"/>
        <Button onClick = {this.clickTriggered} label = "4" value = "4"/>
        <Button onClick = {this.clickTriggered} label = "3" value = "3"/>
        <Button onClick = {this.clickTriggered} label = "+" value = "+"/>
          </div>

        <div>
        <Button onClick = {this.clickTriggered} label = "8" value = "8"/>
        <Button onClick = {this.clickTriggered} label = "5" value = "5"/>
        <Button onClick = {this.clickTriggered} label = "2" value = "2"/>
        <Button onClick = {this.clickTriggered} label = "-" value = "-"/>
          </div>

        <div>
        <Button onClick = {this.clickTriggered} label = "9" value = "9"/>
        <Button onClick = {this.clickTriggered} label = "6" value = "6"/>
        <Button onClick = {this.clickTriggered} label = "1" value = "1"/>
        <Button onClick = {this.clickTriggered} label = "*" value = "*"/>
          </div>
        
        <div>
        <Button onClick = {this.clickTriggered} label = "C" value = "clear"/>
        <Button onClick = {this.clickTriggered} label = "." value = "."/>
        <Button onClick = {this.clickTriggered} label = "=" value = "equal"/>
        <Button onClick = {this.clickTriggered} label = "/" value = "/"/>
          </div>

        
        </Keypad>

      </div>

    );

  }

}


export default App;
