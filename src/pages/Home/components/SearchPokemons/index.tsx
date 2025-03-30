import { SearchContainer } from "./styles";

interface PokemonsSearch {
    pokemonsLength: number;
    pokemonFilter: (name: string) => void;
}

export function SearchPokemons({ pokemonsLength, pokemonFilter }: PokemonsSearch) {
    return (
        <SearchContainer>
            <div>
                <h1>Pokémons</h1>
                <span>{pokemonsLength} pokémons</span>
            </div>
            <input 
                type="text"
                placeholder="Buscar pokémons"
                onChange={(e) => pokemonFilter(e.target.value)}
            />
        </SearchContainer>
    );
}
