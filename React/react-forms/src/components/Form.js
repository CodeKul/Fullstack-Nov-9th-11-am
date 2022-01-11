import React, { useState } from 'react'

export function Form() {

    const  [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const handleName = (e)=>{
        setName(e.target.value)
        console.log(name)
    }
    
    return (
        <div>
            
            <label htmlFor="">Name</label>
            <input name="name"  onChange={handleName} type="text" /> <br />

            <label htmlFor="">Email</label>
            <input type="email" /> <br />

            <label htmlFor="">Password</label>
            <input type="password" /> <br />


            <button>Submit</button>

        </div>
    )
}
