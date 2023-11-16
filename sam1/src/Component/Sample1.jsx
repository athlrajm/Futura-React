import React from 'react'
import { useSelector } from 'react-redux'
function Sample1() {
    const value=useSelector(state=>state.datas.info)
    console.log("!!!",value)
  return (
    <div>
     <h1>{value[0].title}</h1>
    </div>
  )
}

export default Sample1