import React, { useEffect } from 'react';
import api from '../services/apicalls';


export default function UsersInfo() {

let data = {
    name: "Sanket",
    city:"Pune"
}

useEffect(() => {
 let xyz = api.get("/users")
 .then((response)=>{
console.log(response.data)
 })

 api.get("/comments")
 .then((response)=>{
    console.log(response.data)
     })

     api.post("/users", data)


     api.get("/photos")
     .then((response)=>{
        console.log(response.data)
         })

 


}, []);


  return <div></div>;
}
