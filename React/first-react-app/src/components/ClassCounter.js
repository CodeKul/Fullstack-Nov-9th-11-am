import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(){
        super()
        this.state =  {
            count: 0
        };

    }

    handleIncrement = ()=>{
        this.setState({count: this.state.count+1})

    }

    handleDecrement = ()=>{
        this.setState({count: this.state.count-1})
    }

    componentDidMount(){
        console.log("Component did Mounted")
    }

    shouldComponentUpdate(){
        return true
    }

    componentDidUpdate(){
        console.log("component updated")
    }

    

    render() {
        console.log("Mounting Component")
        return (
            <div>
                <h1>Class Component</h1>
                <h3>Component life Cycle methods</h3>

                <h1>Counter : {this.state.count}</h1>

                <button onClick={this.handleIncrement}>Increment</button>

                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
}
