export function usernameValidator(username) {
  const re = /^[a-z0-9_-]{3,16}$/igm;
  if (!username || username.length <= 0) return "Username can't be empty."
  if (!re.test(username)) return 'Ooops! We need a valid username.'
  return ''
}
