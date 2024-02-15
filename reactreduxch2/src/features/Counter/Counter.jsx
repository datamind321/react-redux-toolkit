import React, { useState } from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import { increment,decrement,incrementByAmount } from './counterSlice'


const Counter = () => {
  const counter = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  const changeThemeColor = useSelector((state)=> state.theme.color)
  

  return (
    <div>
    

    <button aria-level='Increment Value' onClick={()=> {dispatch(increment())}}>+</button>
 
    <span style={{color:changeThemeColor}}>Count: {counter}</span>

    
     
    <button aria-level='Deccrement Value' onClick={()=> {dispatch(decrement())}}>-</button>
    
    
    
     <br /> <br />
    <button onClick={()=>{dispatch(incrementByAmount(10))}}>Increment By 10</button>


    </div>
  )
}

export default Counter