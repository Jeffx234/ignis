import {
  HomeContainer,
  HomeDescription,
  HomeTitle,
  HomeLink,
} from '../../styles/pages/home'
import { Logo } from '../components/Logo'
import Image from 'next/image'
import { Button } from '../components/Button'

export default function Home() {
  return (
    <HomeContainer>
      <HomeTitle>
        <Logo />
        <h1>Do sofá pro seu celular</h1>
        <HomeDescription>A Revolução do cinema na sua casa</HomeDescription>
      </HomeTitle>
      <HomeLink> 
        <Image src="/Persona.svg" alt="Person" width={400} height={400} />
        <Button type="button">
          <a href="/signin">Entrar</a>
        </Button>
      </HomeLink>
    </HomeContainer>
  )
}
