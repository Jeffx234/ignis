import { ContainerMain } from '../../styles/global'
import Image from 'next/image'
import { Button } from '../components/Button'

import {
  HomeContainer,
  HomeDescription,
  HomeTitle,
  HomeLogo,
  ImagePerson,
  HomeButton,
} from '../../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <HomeLogo>
        <Image src="/Logo.svg" alt="Logo" width={100} height={100} />
      </HomeLogo>
      <HomeTitle>
        <h1>Do sofá pro seu celular</h1>
        <HomeDescription>A Revolução do cinema na sua casa</HomeDescription>
        <img src="/Persona.svg" alt="Person" width={400} height={400} />
      </HomeTitle>
      <HomeButton>
        <Button type="submit" onClick={() => {}}>
          <a href="/signin">Começar a ver filmes</a>
        </Button>
      </HomeButton>
    </HomeContainer>
  )
}
