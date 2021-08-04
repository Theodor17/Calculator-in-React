import React, {Component} from 'react';
import './BaraST.css';

class BaraST extends Component{

    render(){

        return(

            <div className = "BaraST"
                data-position = {this.props.position}
            >

            </div>

        );

    }

}

export default BaraST;