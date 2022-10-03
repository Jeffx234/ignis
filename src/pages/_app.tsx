import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from '../../styles/global'
import { theme } from '../../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
