import React, {Component} from 'react';
import './DisplayBottom.css';

class DisplayBottom extends Component{
    
    render(){

        return(

            <div className = "DisplayBottom">
                
                <link rel="stylesheet" href="https://use.typekit.net/oov2wcw.css"/>
                {this.props.value}
            </div>

        );

    }

}

export default DisplayBottom;