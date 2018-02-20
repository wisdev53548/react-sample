import React from 'react'

const person = props => {
  return (
    <div>
      <h2>{props.name} has been with the company for {(Math.floor(Math.random() * 20) + 1)} years.</h2>
      <p>{props.children}</p>
    </div>
  )
}

export default person