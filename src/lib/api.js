// Returns a resolved or rejected promise
// Resolved promise contains an object with a user property
export const login = async ({ username, password }) => {
  if (!username || password !== 'postal') throw new Error('Invalid Login')
  return { username }
}

export default { login }
