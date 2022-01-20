import React, { useEffect } from 'react';
import apicalls from '../services/apicalls';


export default function UsersInfo() {

let data = {
    name: "Sanket",
    city:"Pune"
}

useEffect(() => {
 let xyz = apicalls.get("/users")
 .then((response)=>{
console.log(response.data)
 })

 apicalls.get("/comments")
 .then((response)=>{
    console.log(response.data)
     })

     apicalls.post("/users", data)


     apicalls.get("/photos")
     .then((response)=>{
        console.log(response.data)
         })

 


}, []);


  return <div></div>;
}
