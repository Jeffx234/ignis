import { ContainerMain, Form } from '../../styles/global'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { useAuth } from '../hooks/useAuth'
import { useState, FormEvent } from 'react'
import { Message } from '../components/Message'
import { useRouter } from 'next/router'
import Logo from '../components/Logo'
import { ToastContainer } from 'react-toastify'
import { Loading } from '../components/Loading'

export default function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { signIn } = useAuth()
  const router = useRouter()

  const credentials = {
    email: 'jefersonluisx@hotmail.com',
    password: '123456',
  }

  async function handleSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (email === credentials.email && password === credentials.password) {
      setIsLoading(true)
      Message.success()
      router.push('/dashboard')
    } else {
      setIsLoading(true)
      Message.errors()
      setIsLoading(false)
    }
  }

  return (
    <ContainerMain>
      <Form>
        <Logo />
        <Input
          placeholder="Email"
          type="email"
          label="Email / username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          label="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form>
      <Button type="submit" onClick={handleSignIn} disabled={isLoading}>
        {isLoading ? <Loading /> : 'Entrar'}
      </Button>
      <ToastContainer />
    </ContainerMain>
  )
}
