import React, {Component} from 'react';
import './DisplayTop.css';

class DisplayTop extends Component{
    
    render(){

        return(

            <div className = "DisplayTop">

                <link rel="stylesheet" href="https://use.typekit.net/oov2wcw.css"/>
                
                {this.props.value}

            </div>

        );

    }

}

export default DisplayTop;