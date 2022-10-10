import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}
 
html { 
  @media (max-width: 1080px) {
    font-size: 93.75%; //15px;
  }
  @media (max-width: 720px) { 
    font-size: 87.5%; //14px;
  }
}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

body {
  font-family: 'Poppins', sans-serif;
  background: black;
}

`

export const ContainerMain = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.black};
  max-width: 500px;

  @media (min-width: 720px) {
    margin: 0 auto;
    padding: 0 1rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`

export const FormDiv = styled.div`
  width: 100%;
`
export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.Title};
  color: ${({ theme }) => theme.colors.gray};

  span {
    color: ${({ theme }) => theme.colors.white};
  }
`
