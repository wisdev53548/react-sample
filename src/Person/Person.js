import React from 'react'

const person = props => {
  return (
    <div>
      <h2 onClick={props.click}>{props.name} has been with the company for {props.yearsAtCompany} years.</h2>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} />
    </div>
  )
}

export default person