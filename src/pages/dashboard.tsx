import { useSwr } from '../hooks/useSwr'
import { useAuth } from '../hooks/useAuth'
import { ContainerMain, Heading } from '../../styles/global'
import {
  DashboardLogo,
  DivGrid,
  InputDashboard,
} from '../../styles/pages/dashboard'
import Image from 'next/image'
import { Input } from '../components/Input'
const Dashboard = () => {
  // const { data, isError } = useSwr('/movies')
  // const { user } = useAuth()

  // if (isError) return <div>Falha no carregamento</div>
  // if (!data) return <div>Carregando.</div>

  // console.log(data)
  // console.log(user)

  return (
    <ContainerMain>
      <DashboardLogo>
        <p> - </p>
        <Image src="/Logo.svg" alt="Logo" width={100} height={100} />
      </DashboardLogo>
      <Heading> Seja bem vindo, Jeferson Luis </Heading>
      <InputDashboard type="text" placeholder="Pesquisar" />
      <div>
        <Heading>Filmes</Heading>
        <DivGrid></DivGrid>
      </div>
    </ContainerMain>
  )
}

export default Dashboard
