import React, {Component} from 'react';
import './Box.css';

class Box extends Component{

    render(){

        return(

            <div className = "Box"> 

                <link rel="stylesheet" href="https://use.typekit.net/oov2wcw.css"/>
                {this.props.value}
                
            </div>

        )

    }

}

export default Box;