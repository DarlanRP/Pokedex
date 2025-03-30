import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface PokemonList {
  id: number;
  name: string;
  url: string;
  types: { type: { name: string } };
  sprites: { other: { 
    dream_world?: { front_default?: string };  
    "official-artwork": { front_default: string }; //Nem todos os Pokemons tem esse sprite e sem isso da erro na imagem
    };
  }
  height: number;
  weight: number;
  stats: {base_stat: number, 
          stat:{name: string}};
  abilities: { ability: {name: string}};
}

interface PokemonContextData {
  allPokemons: { name: string; url: string }[]; // Apenas nome e URL para buscar
  visiblePokemons: PokemonList[]; // Pokemons visiveis na tela
  isLoading: boolean;
  loadMore: () => void;
  pokemonFilter: (name: string) => void;
  disabledButton: boolean; // Estado que determina se o botão deve estar desabilitado
  setDisabledButton: (value: boolean) => void; // Função para alterar o estado do botão
}

const PokemonContext = createContext<PokemonContextData>({} as PokemonContextData); //responsavel por armazenar e compartilhar os dados com toda a aplicação

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [allPokemons, setAllPokemons] = useState<{ name: string; url: string }[]>([]); //todos os pokemons nome e url
  const [visiblePokemons, setVisiblePokemons] = useState<PokemonList[]>([]); // pokemons detalhados
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(41);
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  // Busca apenas a lista de 1025 nomes e URLs
  useEffect(() => {
    async function fetchPokemonList() {
      try {
        setIsLoading(true);
        const response = await api.get("pokemon?limit=1025&offset=0");
        setAllPokemons(response.data.results); // Armazena apenas nomes e URLs

        // Busca detalhes dos primeiros 41 Pokémons
        const initialPokemons = await fetchPokemonDetails(response.data.results.slice(0, 41));
        setVisiblePokemons(initialPokemons);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPokemonList();
  }, []);

  // Função para buscar detalhes de um conjunto de Pokémons
  async function fetchPokemonDetails(pokemonArray: { name: string; url: string }[]) {
    const promises = pokemonArray.map(async (pokemon) => {
      const { data } = await api.get(pokemon.url);
      return data;
    });

    return await Promise.all(promises);
  }

  // Função para carregar mais 41 Pokémons na tela
  async function loadMore() {
    const currentOffset = visiblePokemons.length;
    const nextOffset = currentOffset + 41;

    if (nextOffset <= allPokemons.length) {
      const nextPokemons = await fetchPokemonDetails(allPokemons.slice(currentOffset, nextOffset));
      setVisiblePokemons((prevPokemons) => [...prevPokemons, ...nextPokemons]);
      setOffset(nextOffset);
    }
    if(nextOffset === allPokemons.length){
      setDisabledButton(true);
    }
  }

  // Pesquisa local (usando apenas nome e URL)
  const pokemonFilter = async (name: string) => {
    if (name.trim() === "") {
      const initialPokemons = await fetchPokemonDetails(allPokemons.slice(0, offset));
      setVisiblePokemons(initialPokemons);
      setDisabledButton(false);
      return;
    }

    // Filtra os nomes da lista sem detalhes completos
    const filteredList = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );

    // Busca detalhes apenas dos filtrados
    const filteredPokemons = await fetchPokemonDetails(filteredList.slice(0, offset));
    setVisiblePokemons(filteredPokemons);
    setDisabledButton(true);
  };

  return (
    <PokemonContext.Provider value={{ allPokemons, visiblePokemons, isLoading, loadMore, pokemonFilter, disabledButton, setDisabledButton  }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() { //assim posso usar usePokemon na minha home e não useContext, fica mais legivel
  return useContext(PokemonContext);
}