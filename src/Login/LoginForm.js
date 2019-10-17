import React from 'react'

export function LoginForm({ username, password, handleSubmit, handleChange, error }) {
  return (
    <div className="login">
    <h1>Please Login</h1>
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input type="text" value={username} onChange={handleChange} name="username"></input>

      <label>Password</label>
      <input onChange={handleChange} type="password" value={password} name="password"></input>
      {error ? <div className="error">{error}</div> : ''}

      <div className="button">
      <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  )
}
