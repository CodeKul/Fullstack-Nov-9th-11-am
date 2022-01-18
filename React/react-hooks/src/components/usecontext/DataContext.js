import React, { Children, createContext, useState } from 'react'

export const contextObject = createContext()
export default function DataContext(props) {

    const [data, setData] = useState(
        {
            fname: "Sanket B",
            city: "Pune",
            designation: "SWE"
        }
    )

    
    return (
        <div>
            <contextObject.Provider  value={data}>
                {props.children}
            </contextObject.Provider>
        </div>
    )
}
