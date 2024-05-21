import React from 'react'

const Info = (props) => {
  const{
    onClick,
  }=props
    console.log("info Component")
  return (
    <div>
    <h1>{onClick}</h1>    
    </div>
  )
}

export default Info;