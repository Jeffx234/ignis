import styled from 'styled-components'

export const DashboardLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }
`

export const InputDashboard = styled.input`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  height: 48px;
  padding: 0 1rem;
  width: 100%;
  border-radius: 24px;
  border: none;
  outline: none;
`
export const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 1rem;
`
