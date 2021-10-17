const tokenKey = '@3213-full'
export function getToken(): string | null {
  return localStorage.getItem(tokenKey)
}
export function isAuth(): boolean {
  return getToken() !== null
}

export function setToken(token: string) {
  localStorage.setItem(tokenKey, token)
}
