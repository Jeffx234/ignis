import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      gray: string
      white: string
      primaryRed: string
      blue: string
      linearGradient: string
    }
    fontSizes: {
      default: string
      Title: string
      Input: string
      TitleCard: string
      TextRegular: string
      TextSmall: string
    }
  }
}
