import React, { useState } from 'react'

export default function Form() {

    const  [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const handleName = (e)=>{
        setName(e.target.value)
        console.log(name)
    }


    const handleEmail = (e)=>{
        setEmail(e.target.value)
        console.log(email)
    }


    const handlePassword = (e)=>{
        setPassword(e.target.value)
        console.log(password)
    }
    
    return (
        <div>
            
            <label htmlFor="">Name</label>
            <input name="name"  onChange={handleName} type="text" /> <br />

            <label htmlFor="">Email</label>
            <input onChange={handleEmail} type="email" /> <br />

            <label htmlFor="">Password</label>
            <input onChange={handlePassword} type="password" /> <br />


            <button>Submit</button>

        </div>
    )
}
