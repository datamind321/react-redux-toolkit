import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTheme } from './themeSlice'
const Theme = () => {
  const[color,setColor] = useState('white')
  const dispatch = useDispatch()
  return (
    <div>
     
     <input type="text" onChange={(e)=>{setColor(e.target.value)}} />
     <button onClick={() => {dispatch(changeTheme(color))}}>Change Text Color</button>    

    </div>
  )
}

export default Theme