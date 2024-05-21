import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { show_Label } from '../Redux_toolkit/showLabelSlice'

const Contact = () => {
  const dispatch =useDispatch()

  const handleShowLable=(evt)=>{
     const checkboxvalue=evt.target.checked
     dispatch(show_Label(checkboxvalue))

  }
  const showLabel=useSelector((state)=>state.show_label)
  return (
    <div>
         <input type="checkbox" checked={showLabel} onChange={handleShowLable} />ShowLabel

    </div>
  )
}

export default Contact