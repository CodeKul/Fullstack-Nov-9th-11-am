import React from 'react';
import { useContext } from 'react';
import { dataContext } from './DataContext';

export default function Main({userinfo}) {

  const data = useContext(dataContext)

    console.log("Data inside Main: ", userinfo)
  return <div></div>;
}
