import React from 'react';
import Main from './Main';
import SideNav from './SideNav';

export default function Dashboard({ xyz }) {

    console.log("Data inside Dashboard: ", xyz)
    return <div>

        <h1>{xyz.title}</h1>

        <Main userinfo={xyz} />

        <SideNav data={xyz}/>
    </div>;
}
