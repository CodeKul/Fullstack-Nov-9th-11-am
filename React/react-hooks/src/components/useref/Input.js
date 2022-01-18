import React, { createRef, useRef, useState } from "react";

export default function Input({type}) {
  const [input, setInput] = useState("");

  const InputRef = useRef();
  console.log(InputRef);


  const changeColor = ()=>{
InputRef.current.style.backgroundColor="blue";
InputRef.current.style.color="white";
console.log(InputRef.current)

  }

//   console.log(InputRef.current.value);
  return (
    <div>
      {/* <input ref={InputRef} value={input} type="text" /> */}

      <p ref={InputRef}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        sint quaerat odio veniam, doloremque dolorum debitis nulla labore dolor
        expedita asperiores beatae? Dolorum eius, provident fugiat doloremque
        tenetur fugit nobis!
      </p>

      <button onClick={changeColor}>Change Background</button>
    </div>
  );
}
