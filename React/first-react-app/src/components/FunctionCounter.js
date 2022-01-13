import React, { useState } from 'react'

export default function FunctionCounter() {

    const [counter, setCounter] = useState(0)

    console.log(counter)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    return (

        <div>
            {console.log("Component Mounting")}
            <h1>Class Component</h1>
            <h3>Component life Cycle methods</h3>

            <h1>Counter : {counter}</h1>

            <button onClick={handleIncrement}>Increment</button>

            <button onClick={handleDecrement}>Decrement</button>

        </div>

    )
}
