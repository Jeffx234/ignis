import { ContainerMain, FormDiv } from '../../styles/global'
import { Button } from '../components/Button'
import { Input, InputPassword } from '../components/Input'
import { useState, FormEvent } from 'react'
import { Logo } from '../components/Logo'
import { Loading } from '../components/Loading'
import { ToastContainer } from 'react-toastify'
import { Form } from '../../styles/pages/signin'
import { useAuth } from '../hooks/useAuth'

export default function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, loading } = useAuth()

  async function handleSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    signIn({ email, password })
  }

  return (
    <ContainerMain>
      <Form>
        <FormDiv>
          <Logo />
          <Input
            placeholder="Email"
            type="email"
            label="Email / username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputPassword
            placeholder="Password"
            type="password"
            label="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormDiv>
        <Button type="submit" onClick={handleSignIn} disabled={loading}>
          {loading ? <Loading /> : 'Entrar'}
        </Button>
      </Form>
      <ToastContainer />
    </ContainerMain>
  )
}
