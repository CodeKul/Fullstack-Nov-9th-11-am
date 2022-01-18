import React from 'react'

export default function Main({propsdata}) {
    return (
        <div>
             <h1>{propsdata.title}</h1>
      <h1>{propsdata.username}</h1>
      <h1>{propsdata.activeProfileId}</h1>
        </div>
    )
}
