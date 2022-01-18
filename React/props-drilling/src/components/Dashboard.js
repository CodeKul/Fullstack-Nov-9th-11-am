import React from 'react'
import Main from './Main'

export default function Dashboard({propsdata}) {
    return (
        <div>
             {/* <h1>{propsdata.title}</h1>
      <h1>{propsdata.username}</h1>
      <h1>{propsdata.activeProfileId}</h1> */}

      <Main propsdata={propsdata}/>

        </div>
    )
}
