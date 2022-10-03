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
  background: #1E1E1E;
}

`

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  background: #1e1e1e;

  @media (min-width: 720px) {
    max-width: 500px;
    margin: 0 auto;
  }
`

export const Form = styled.form`
  width: 100%;
`
export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.Title};
  color: ${({ theme }) => theme.colors.white};
`
