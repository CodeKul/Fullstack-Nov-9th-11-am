import React , { Component} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FunctionComponent from './FunctionComponent';
import './Class.css'

class ClassComponent extends Component {


    render() {
        console.log("Mounting component")
        return (
            <div>
                <h1 style={{color: 'green'}}>Home</h1>

                <FunctionComponent/>

                <DatePicker/>
            </div>
        )
    }
}

export default ClassComponent;
