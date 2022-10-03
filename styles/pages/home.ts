import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 1rem;

  text-align: center;
  width: 100%;
  @media (min-width: 720px) {
    max-width: 500px;
    margin: 0 auto;
    border: 1px solid blue;
  }
`

export const HomeTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.Title};
  color: ${({ theme }) => theme.colors.white};
  h1 {
    margin-bottom: 1rem;
  }

  img {
    margin-top: -5rem;
    width: 100%;
    max-width: 300px;
    max-height: 400px;
  }
`

export const HomeDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.TextRegular};
  color: ${({ theme }) => theme.colors.gray};
`

export const ImagePerson = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 400px;
  }
`

export const HomeLogo = styled.div``
export const HomeButton = styled.button`
  border: 2px solid red;
  width: 100%;
  height: 3rem;
  background: transparent;
  margin: 1rem 0;
  border: 0;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.Input};
  font-weight: 600;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`
