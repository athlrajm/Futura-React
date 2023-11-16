import React from 'react'
import { Datas } from '../Redux/Api'
import { useDispatch } from 'react-redux'
import Sample1 from './Sample1'
import { dataClear } from '../Redux/DataSlice'
function Redux1() {
    const dispatch=useDispatch()
    const display=(e)=>{
        e.preventDefault();
        Datas(dispatch)

    }
    const remove=(e)=>{
      e.preventDefault();
       dispatch(dataClear())
    }
    
  return (
    <div>
        <button onClick={display}>click</button>
        <button onClick={remove}>remove</button>
        <h1>hello</h1>
        <Sample1/>
        
    </div>
  )
}


export default Redux1