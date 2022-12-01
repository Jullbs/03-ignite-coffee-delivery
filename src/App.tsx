// LIBS, HOOKS, ETC
import { BrowserRouter } from 'react-router-dom'

// COMPONENT
import { Router } from './Router'

// STYLE
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

// IMG
import irish from "./assets/Irlandês.png"


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
