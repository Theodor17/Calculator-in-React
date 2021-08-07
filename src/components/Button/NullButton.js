import React, {Component} from 'react';
import './NullButton.css';

class NullButton extends Component{
    
    render(){

        return(

            <div className = "NullButton"
            
                onClick = {this.props.onClick}
                data-value = {this.props.value}
                data-color = {this.props.color}
            >
                
                <link rel="stylesheet" href="https://use.typekit.net/oov2wcw.css"/>

                {this.props.symbol}

            </div>

        );

    }

}

export default NullButton;