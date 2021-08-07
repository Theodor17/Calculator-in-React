import React, {Component} from 'react';
import './BaraDR.css';

class BaraDR extends Component{

    render(){

        return(

            <div className = "BaraDR"
                data-position = {this.props.position}
            >

            </div>

        );

    }

}

export default BaraDR;