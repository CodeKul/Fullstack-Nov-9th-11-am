import React, { useReducer } from 'react';
import { useState } from 'react/cjs/react.production.min';
import { countReducer } from './reducers/countReducer';


// usestate is based on usereducer



export default function ReducerCounter() {


   // const [count, setCount] = useState()
    const [count, sendAction] = useReducer(countReducer, {
        count: 0,
        incBy: 1
    })

    console.log(count)

    return <div>


        <h1>Reducer Counter</h1>

        <h4>Increase By {count.incBy}</h4>

        <input
            type="range"
            value={count.incBy}
            min="1" max="20"
            name="" id=""
            onChange={(e) => {
                sendAction({ type: "update", payload: Number(e.target.value) })
            }} />


        <h1>{count.count}</h1>

        <button onClick={() => {
            sendAction({ type: "increment" })
        }}>Increment</button>
        <button onClick={() => {
            sendAction({ type: "decrement" })
        }} >Decrement</button>
        <button
            onClick={() => {
                sendAction({ type: "reset" })
            }}>Reset</button>


    </div>;
}
