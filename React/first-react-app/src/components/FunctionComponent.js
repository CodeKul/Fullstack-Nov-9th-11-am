import React, { useState } from 'react'
import '../Function.css'

export default function FunctionComponent() {
    const [data, setData] = useState(0)

    console.log(data)

    const display = ()=>{
        console.log("Hii...")
        setData(123)
    }
    return (
        <div>
            <h1>Function Component</h1>
            <button onClick={display}>Display</button>
        </div>
    )
}
