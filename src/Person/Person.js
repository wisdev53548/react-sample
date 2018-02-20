import React from 'react'

const person = () => {
  return (
    <div>
      <h2>I am a worker</h2>
      <p>I've been working here for {Math.floor(Math.random() * 10)} years.</p>
    </div>
  )
}

export default person