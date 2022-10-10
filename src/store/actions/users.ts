export const SET_USER = 'SET_USER'
export const USER_LOGOUT = 'USER_LOGOUT'


export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
})

export const userLogout = () => ({
  type: USER_LOGOUT,
  payload: null,
})
