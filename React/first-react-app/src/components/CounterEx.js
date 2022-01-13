import React, { Component } from 'react'



class CounterEx extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }


    handleIncrement = () => {
        this.setState({count: this.state.count +1})
    }

    handleDecrement = () => {
        this.setState({count: this.state.count -1})
    }

    componentWillMount(){
        console.log("Component will mount")
    }

    componentDidMount(){
        console.log("Component Mounted")
    }

    shouldComponentUpdate(){
        return true;
    }

    render() {
        console.log("Mounting of component")
        console.log(this.state.count)
        return (
            <div>
                <h1>Counter App</h1>
                <h1>Counter : {this.state.count} </h1>


                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
}

export default CounterEx;
