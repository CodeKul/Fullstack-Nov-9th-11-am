import React, { useEffect, useState } from 'react'

export default function Effect() {

    useEffect(() => {
        console.log("Use Effect invoked")

    }, [])

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Use Effect</h1>

            <h1>Counter: {count}</h1>


            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}
