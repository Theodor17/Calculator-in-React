import React, {Component} from 'react';
import './Button.css';

class Button extends Component{
    
    render(){

        return(

            <div className = "Button"
            
                onClick = {this.props.onClick}
                data-value = {this.props.value}
                data-color = {this.props.color}
                id = {this.props.id}
            >
                
                <link rel="stylesheet" href="https://use.typekit.net/oov2wcw.css"/>

                {this.props.symbol}

            </div>

        );

    }

}

export default Button;