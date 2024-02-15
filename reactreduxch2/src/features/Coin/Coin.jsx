import React, { useState } from 'react'
import {  useSelector } from 'react-redux'


const Coin = () => {
  const coin = useSelector((state)=> state.counter.count)
  const changeThemeColor = useSelector((state)=> state.theme.color)
  return (
    <div>
        <span style={{color:changeThemeColor}}>Coin: {coin}</span>
        </div>
  )
}


export default Coin