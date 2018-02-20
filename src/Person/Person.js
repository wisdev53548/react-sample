import React from 'react'

const person = props => {
  return (
    <div>
      <h2>{props.name} has been with the company for {props.yearsAtCompany} years.</h2>
      <p>{props.children}</p>
    </div>
  )
}

export default person