import React, { useState } from 'react'

export default function CounterFunction() {

   let initialState = {
       count:0
   }
    const [counter, setCounter] = useState({initialState})
    console.log(counter)

    const handleIncrement = () => {
        setCounter( initialState.count + 1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div>

            <h1>Function Component</h1>
            <h1>Counter : {counter}</h1>

            <button onClick={handleIncrement}>Increment</button>

            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}
