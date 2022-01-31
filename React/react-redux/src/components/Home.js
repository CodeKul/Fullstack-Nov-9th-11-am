import React from 'react';
import { useDispatch } from 'react-redux';
import { bankStore } from '..';



export default function Home() {

  const dispatch = useDispatch()

  const state = bankStore.getState()


  return <div>

    <input type="text" />


    <button onClick={dispatch({type: "deposit"})}>Deposit</button>
    <button>Withdraw</button>
    <button>Interest</button>
    <button>Change Account</button>

  </div>;
}
