import styled from 'styled-components'

export const DashboardLogo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InputDashboard = styled.div`
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0 1rem;
  margin-top: 1rem;
  height: 3rem;
  width: 50%;
  border-radius: 24px;
  width: 100%;
  background: ${({ theme }) => theme.colors.gray};

  img {
    background: ${({ theme }) => theme.colors.gray};
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`

export const Input = styled.input`
  border: 0;
  flex: 1;
  outline: none;
  height: 100%;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.Input};
  padding: 0 1rem;
  border-radius: 24px;
`

export const DivGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`
export const LogoHome = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const ContainerDashboard = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 720px) {
    margin: 0 auto;
    padding: 0 1rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`
