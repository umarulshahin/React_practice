import React from 'react'

const Info = (props) => {
  const{
    onClick,
    showLabel
  }=props
    console.log("info Component")
  return (
    <div>
    <h1>{showLabel.key}</h1>    
    </div>
  )
}

export default Info;