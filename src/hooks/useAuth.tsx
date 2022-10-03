import { api } from '../services/api'
import Cookies from 'js-cookie'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type User = {
  id: string
  name: string
  email: string
  avatar_url: string
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  user: User
  signIn: (credentials: SignInCredentials) => Promise<void>
  signOut: () => void
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const storagedUser = localStorage.getItem('@ignis')

    if (storagedUser) {
      setUser(JSON.parse(storagedUser))
    }
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    const response = await api.post('login', {
      email,
      password,
    })

    console.log(response.data)

    const { token, user } = response.data
    Cookies.set('@ignis', token, { expires: 1 })
    api.defaults.headers.common.authorization = `Bearer ${token}`
    setUser(user)
  }

  function signOut() {
    setUser(undefined)
    Cookies.remove('@ignis')
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
