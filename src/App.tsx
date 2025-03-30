import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { PokemonProvider } from "./context/pokemonContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
        <Header/>
        <PokemonProvider>
          <Home />
        </PokemonProvider>
    </ThemeProvider>
  )
}

