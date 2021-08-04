import React, {Component} from 'react';
import Button from './components/Button/Button';
import BigButton from './components/Button/BigButton';
import NullButton from './components/Button/NullButton';
import DisplayBottom from './components/DisplayBottom/DisplayBottom';
import DisplayTop from './components/DisplayTop/DisplayTop';
import Box from './components/DisplayTop/Box';
import Keypad from './components/Keypad/Keypad';
import BaraST from './components/Bara/BaraST';
import BaraDR from './components/Bara/BaraDR';
import * as math from 'mathjs'
import './App.css';

const plus_minus_log2 = ["+/-", "log2"];
const percent_log10 = ["%", "log10"];
const divide_pow2 = ["/", "^2"];
const mult_powx = ["*", "^"];
const minus_sqrt = ["-", "sqrt"];
const plus_xthrt = ["+", "^(1 / "];

class App extends Component{

  constructor(){
    super();
    this.state = ({
      expresie: '',
      expresie_all: '',
      clast: 0,
      index: 0,
      parentheses: 0
    })
  }

  calculare = () => {
      
    let temp = math.format(math.evaluate(this.state.expresie), {notation: 'fixed', precision: 10});

    while(temp[temp.length - 1] == "0" || temp[temp.length - 1] == ".")
      temp = temp.substr(0, temp.length - 1);
      
      this.setState({expresie: temp});
  }

  clickTriggered = e => {

    let valoare = e.target.getAttribute('data-value');

    switch(this.state.index){

      case 1:
        switch(valoare){
          
          case '*(-1)':
            valoare = 'log2(';
            break;
          
          case '/100':
            valoare = 'log10(';
            break;
          
          case '/':
            valoare = '^2';
            break;

          case '*':
            valoare = '^(';
            break;

          case '-':
            valoare = 'sqrt(';
            break;

          case '+':
            valoare = '^(1 / ';
            break;
        }
        break;

      default:
        
    }

    switch(valoare){
      
      case 'clear':
        this.setState({expresie: ''});
        this.setState({expresie_all: ''});
        break;
      
      case 'clear_last':
        switch(this.state.clast){
          
          case 0:
            this.setState({expresie: this.state.expresie.substr(0, this.state.expresie.length - 1)});
            this.setState({expresie_all: this.state.expresie_all.substr(0, this.state.expresie_all.length - 1)});
            break;
          
          default:
            this.setState({expresie: ''});
            this.setState({expresie_all: ''});
            break;
        }
        break;

      case '+/-':
        switch(this.state.index){
        
          case 0:
            this.setState({expresie: this.state.expresie + "*(-1)"});
            this.setState({expresie_all: this.state.expresie_all + "*(-1)"});
            break;

          default:
            this.setState({expresie: this.state.expresie + "log2("});
            this.setState({expresie_all: this.state.expresie_all + "log2("});
            this.setState({parentheses: this.state.parentheses + 1});
            break;
        }
        this.setState({clast: 0});
        break;

      case 'equal':
        this.setState({expresie_all: "(" + this.state.expresie_all + ")"});
        this.setState({clast: 1});
        this.calculare();
        break;

      case 'Switch':
        if(this.state.index == 0)
          this.setState({index: 1});
        else this.setState({index: 0});
        this.setState({clast: 0});
        break;

      case '( )':
        if(this.state.parentheses == 0){
          this.setState({expresie: this.state.expresie + "("});
          this.setState({expresie_all: this.state.expresie_all + "("});
          this.setState({parentheses: this.state.parentheses + 1});
        }else if(this.state.parentheses != 0){
          this.setState({expresie: this.state.expresie + ")"});
          this.setState({expresie_all: this.state.expresie_all + ")"});
          this.setState({parentheses: this.state.parentheses - 1});
        }
        this.setState({clast: 0});
        break;

      default:
          this.setState({expresie: this.state.expresie + valoare});
          this.setState({expresie_all: this.state.expresie_all + valoare});
          if(valoare == "log2(" || valoare == "log10(" || valoare == "^(" || valoare == "sqrt(" || valoare == "^(1 / ")
            this.setState({parentheses: this.state.parentheses + 1});
          this.setState({clast: 0});
    }

  }

  
  render(){
  
  return (

    <div className = "App">
    <BaraST/>
    <BaraDR/>

    <DisplayTop value = {this.state.expresie}/>

    <Box value = "="/>
    <DisplayBottom value = {this.state.expresie_all}/>

      <Keypad>
    
      <div>
        <Button onClick = {this.clickTriggered} symbol = "CE" value = "clear" id = "CE" />
        <Button onClick = {this.clickTriggered} symbol = "7" value = "7" color id = "7" />
        <Button onClick = {this.clickTriggered}  symbol = "4" value = "4" color id = "4" />
        <Button onClick = {this.clickTriggered}  symbol = "1" value = "1" color id = "1" />
        <Button onClick = {this.clickTriggered}  symbol = "0" value = "0" color id = "0" />
        </div>

      <div>
        <Button onClick = {this.clickTriggered}  symbol = "C" value = "clear_last" id = "clear_last" />
        <Button onClick = {this.clickTriggered}  symbol = "8" value = "8" color id = "8" />
        <Button onClick = {this.clickTriggered}  symbol = "5" value = "5" color id = "5" />
        <Button onClick = {this.clickTriggered}  symbol = "2" value = "2" color id = "2" />
        <Button onClick = {this.clickTriggered}  symbol = "." value = "." color id = "."/>
        </div>


      <div>
        <Button onClick = {this.clickTriggered}  symbol = {plus_minus_log2[this.state.index]} value = "*(-1)" id = "+/-" />
        <Button onClick = {this.clickTriggered}  symbol = "9" value = "9" color id = "9" />
        <Button onClick = {this.clickTriggered}  symbol = "6" value = "6" color id = "6" />
        <Button onClick = {this.clickTriggered}  symbol = "3" value = "3" color id = "3"/>
        <Button onClick = {this.clickTriggered}  symbol = "=" value = "equal" id = "=" />
        </div>


      <div>
        <Button onClick = {this.clickTriggered}  symbol = {percent_log10[this.state.index]} value = "/100" id = "%" />
        <Button onClick = {this.clickTriggered}  symbol = {divide_pow2[this.state.index]} value = "/" id = "/" />
        <Button onClick = {this.clickTriggered}  symbol = {mult_powx[this.state.index]} value = "*" id = "*" />
        <Button onClick = {this.clickTriggered}  symbol = {minus_sqrt[this.state.index]} value = "-" id = "-" />
        <Button onClick = {this.clickTriggered}  symbol = {plus_xthrt[this.state.index]} value = "+" id = "+" />
        </div>
      
        <BigButton onClick = {this.clickTriggered} symbol = "Switch" value = "Switch" color/>
        <NullButton onClick = {this.clickTriggered} symbol = "( )" value = "( )" color />
        </Keypad>

      

      </div>

    );
  }
}

export default App;
