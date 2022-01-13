import React, { useState } from 'react'

export default function RegForm() {

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        gender: ""
    })

    const [data, setData] = useState({})

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        
        setData({...formData})
        console.log(data)
    }

    console.log(formData)
    return (
        <div>


            <form action="">
                <label htmlFor="">Full Name</label>
                <input value={formData.fullname} name='fullname' onChange={handleInput} type="text" />

                <br />
                <label htmlFor="">Email</label>
                <input value={formData.email} name='email' onChange={handleInput} type="email" id="" />

                <br />
                <label htmlFor="">Password</label>
                <input value={formData.password} name='passwords' onChange={handleInput} type="password" id="" />

                <br />

                <label htmlFor="">Gender</label>
                <input onChange={handleInput} checked={formData.gender === "male"} value="male" type="radio" name="gender" id="" />
                <label htmlFor="">Male</label>

                <input onChange={handleInput} checked={formData.gender === "female"} value="female" type="radio" name="gender" id="" />
                <label htmlFor="">Female</label>
                <button onClick={handleSubmit} type='button'>Submit</button>
            </form>



            <p>Full Name : {data.fullname} </p>
            <p>Email : {data.email}</p>
            <p>Password : {data.password}</p>
            <p>Gender : {data.gender}</p>


            <p>Full Name : {formData.fullname} </p>
            <p>Email : {formData.email}</p>
            <p>Password : {formData.password}</p>
            <p>Gender : {formData.gender}</p>
        </div>
    )
}
