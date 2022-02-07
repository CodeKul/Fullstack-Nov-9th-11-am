import React from 'react';
import { createContext } from 'react';


export const dataContext = createContext()
export default function DataProvider(props) {

    const data = "Codekul"
    
    return <div>


        <dataContext.Provider value={data}>
            {props.children}
        </dataContext.Provider>
    </div>;
}
