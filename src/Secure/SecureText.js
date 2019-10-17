import React from 'react'

export function SecureText({ user, handleClick }) {
  return (
    <div className="secure">
      <h1>Welcome, {user + '!'}</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}
