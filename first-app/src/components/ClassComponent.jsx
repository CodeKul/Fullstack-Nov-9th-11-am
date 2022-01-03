import React, { Component } from 'react'

export default class ClassComponent extends Component {

componentWillMount(){
    console.log("Component will mount")
    return true
}
    
    componentDidMount(){
        console.log("Component Mounted")
    }

    render() {
        console.log("Component Mounting")
        return (
            <div>
                <h1>Class Component</h1>
            </div>
        )
    }
}
