import { PokemonList } from "../../../../context/pokemonContext";
import { PokemonModal, PokemonContainer, PokemonImg, PokemonInfo, DivTypes, SpanTypes } from "./styles";

export interface PokemonProps{
    pokemon: PokemonList;   
}

const typeMapping: { [key: string]: string } = {
    electric: 'elétrico',
    fire: 'fogo',
    grass: 'grama',
    steel: 'aço',
    water: 'água',
    psychic: 'psíquico',
    ground: 'terra',
    ice: 'gelo',
    flying: 'voador',
    ghost: 'fantasma',
    normal: 'normal',
    poison: 'veneno',
    rock: 'rocha',
    fighting: 'luta',
    dark: 'sombrio',
    bug: 'inseto',
    dragon: 'dragão',
    fairy: 'fada',
    shadow: 'sombra',
    unknow: 'desconhecido',
  };

export function PokemonData({pokemon}: PokemonProps){
    return(
        <PokemonModal>
           <PokemonContainer>
                <PokemonImg>
                    <img src={pokemon.sprites.other.dream_world?.front_default || 
                              pokemon.sprites.other["official-artwork"].front_default} alt={`Pokemon ${pokemon.name}`}
                              />
                </PokemonImg>
            </PokemonContainer> 
                <PokemonInfo>
                    <div>
                        <span>N° {pokemon.id}</span>
                        <h1>{pokemon.name}</h1>
                    </div>
                </PokemonInfo>

                <DivTypes>
                    {pokemon.types && Array.isArray(pokemon.types) ? (
                        pokemon.types.map((typeInfo) => {
                            const translatedType = typeMapping[typeInfo.type.name as keyof typeof typeMapping];
                            return <SpanTypes key={typeInfo.type.name} className={typeInfo.type.name}> {translatedType} </SpanTypes>
                        })
                    ) : (
                        <p>Carregando tipos...</p>
                    )}
                </DivTypes>
        </PokemonModal>
        
        
    )
}