import React from 'react'

export function LoginForm({ username, password, handleSubmit, handleChange, error }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input type="text" value={username} onChange={handleChange} name="username"></input>

      <label>Password</label>
      <input onChange={handleChange} type="password" value={password} name="password"></input>
      {error ? <p>{error}</p> : ''}

      <button type="submit">Submit</button>
    </form>
  )
}
