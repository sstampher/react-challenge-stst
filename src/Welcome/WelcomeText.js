import React from 'react'

export function WelcomeText({ user, handleClick }) {
  return (
    <div>
      <h1>Welcome, {user}</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}
