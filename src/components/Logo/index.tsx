import Image from 'next/image'
import { ContainerLogo } from './styles'

export function Logo() {
  return (
    <ContainerLogo>
      <Image src="/Logo.svg" alt="Logo" width={100} height={100} />
    </ContainerLogo>
  )
}
