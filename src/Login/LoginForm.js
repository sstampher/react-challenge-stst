import React from 'react';

export function LoginForm({username, password, handleSubmit}){
  return <form onSubmit={handleSubmit}>
    <label>
      Username
      </label>
    <input 
      type="text"
      value={username}>
    </input>


    <label>
      Password
      </label>
    <input 
      type="password"
      value={password}>
    </input>

    <button type="submit">Submit</button>

  </form>
}