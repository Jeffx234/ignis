import { Message } from '../components/Message'
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { api } from '../services/api'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

interface User {
  id: number
  name: string
  email: string
  created_at: string
  updated_at: string
  remember_me_token: string
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()

  const signIn = useCallback(async ({ email, password }) => {
    try {
      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      const response = await api.post('login', {
        email,
        password,
      })
      Message.success()
      const { token } = response.data.accessToken
      const { user } = response.data
      Cookies.set('ignis_v', token)
      dispatch({ type: 'SET_USER', payload: user })
      router.push('/dashboard')
    } catch (err) {
      Message.errors()
    } finally {
      setLoading(false)
    }
  }, [])

  return { user, signIn, loading }
}
