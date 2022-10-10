import { useState } from 'react'
import { useSelector } from 'react-redux'
import { IoChevronBackSharp } from 'react-icons/io5'
import { Heading } from '../../styles/global'
import {
  DashboardLogo,
  DivGrid,
  InputDashboard,
  LogoHome,
  Input,
  ContainerDashboard,
} from '../../styles/pages/dashboard'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { useSwr } from '../hooks/useSwr'
import { Cards } from '../components/Cards'
import Link from 'next/link'

function Page({ index, search }) {
  const { data, isError } = useSwr(`/movies?page=${index}`)

  if (!data) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error</p>
  }

  const filteredMovies = data?.data?.results?.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase())
  })

  return filteredMovies.map((movie) => (
    <div key={movie.id}>
      <Cards
        title={movie.title}
        description={movie.overview}
        image={movie.poster_path}
        onClick={() => {}}
        index={movie.id}
        key={movie.id}
      />
    </div>
  ))
}

export function Dashboard() {
  const [cnt, setCnt] = useState(1)
  const [search, setSearch] = useState('')

  const { user } = useSelector((state: any) => state.user)

  const pages = []
  for (let i = 1; i <= cnt; i++) {
    pages.push(<Page index={i} key={i} search={search} />)
  }

  return (
    <ContainerDashboard>
      <DashboardLogo>
        <LogoHome>
          <Link href="/">
            <a>
              <IoChevronBackSharp size={30} color="#fff" />
            </a>
          </Link>
          <Logo />
        </LogoHome>
        <Heading>
          {' '}
          Seja bem vindo, <span>{user.name}</span>{' '}
        </Heading>
        <InputDashboard>
          <Input
            placeholder="Buscar filme"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
          <img src="/search.svg" alt="search" />
        </InputDashboard>
      </DashboardLogo>
      <div>
        <DivGrid>{pages}</DivGrid>
        <Button type="button" onClick={() => setCnt(cnt + 1)}>
          Ver mais
        </Button>
      </div>
    </ContainerDashboard>
  )
}

export default Dashboard
