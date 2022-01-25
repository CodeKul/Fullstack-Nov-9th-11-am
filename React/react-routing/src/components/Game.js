import React, { useRef } from 'react';

export default function Game() {

    let inputRef = useRef();

    let inputValue = inputRef.current.value


    const checkAnswer = () => {
        if (inputValue === "React") {
            console.log("Matched")
        }
    }
    return (<div>
        <h1>Guess the Frontend Library ?</h1>

        <input ref={inputRef} type="text" />

        <button onClick={checkAnswer()}>Check Answer</button>


    </div>)
}
