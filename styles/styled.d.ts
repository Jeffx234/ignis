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
      background: string
    }
    fontSizes: {
      default: string
      Title: string
      Input: string
      TitleCard: string
      TitleCardDesktop: string
      TextRegular: string
      TextSmall: string
    }
  }
}
