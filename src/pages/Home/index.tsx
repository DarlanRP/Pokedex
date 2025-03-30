import { PokemonData } from "./components/PokemoData";
import { SearchPokemons } from "./components/SearchPokemons";
import { HomeContainer, Pokemons, ButtonMore } from "./styles";
import { PokemonList, usePokemon } from "../../context/pokemonContext";
import   pikachuGif from '../../assets/pikachuCorrendo.gif';
import { ButtonScroll } from "../../components/ButtonScroll";
import { ModalPokemons } from "./components/ModalPokemons";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

export function Home() {
  const { visiblePokemons, isLoading, loadMore, pokemonFilter, disabledButton  } = usePokemon();
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonList | null>(null);

  return (
    <HomeContainer>
      <SearchPokemons pokemonFilter={pokemonFilter} pokemonsLength={visiblePokemons.length} />
      {isLoading && <img src={pikachuGif} alt="Carregando..." />}
      <Pokemons>
        {visiblePokemons.map((pokemon) => (
          <Dialog.Root key={pokemon.id}>
            <Dialog.Trigger asChild>
              <div onClick={() => setSelectedPokemon(pokemon)}>
                <PokemonData pokemon={pokemon} />
              </div>
            </Dialog.Trigger>

            {selectedPokemon && <ModalPokemons pokemon={selectedPokemon} />}
          </Dialog.Root>
        ))}
      </Pokemons>

      <ButtonScroll />
      <ButtonMore onClick={loadMore} disabled={disabledButton}>
        Mostrar Mais
      </ButtonMore>
    </HomeContainer>
  );
}
