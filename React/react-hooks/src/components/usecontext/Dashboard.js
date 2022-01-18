import React, { useContext } from 'react'
import { contextObject } from './DataContext'

export default function Dashboard() {
const data = useContext(contextObject)

console.log(data)
    return (
        <div>
            {data.fname}
        </div>
    )
}
