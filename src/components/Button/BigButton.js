import React, {Component} from 'react';
import './BigButton.css';

class BigButton extends Component{
    
    render(){

        return(

            <div className = "BigButton"
            
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

export default BigButton;