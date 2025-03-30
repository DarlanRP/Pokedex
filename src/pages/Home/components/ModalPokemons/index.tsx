import { X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Title, Overlay, Content, HeaderInfos, TypesPokemon, SpanTypes, HeightAndWeight, StatsDiv } from "./styles";
import { PokemonList } from "../../../../context/pokemonContext";
import { useHeightPokemon } from '../../../../hooks/useHeightPokemon';

interface PokemonProps{
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

const typeAtributes: { [key: string]: string } = {
  hp: 'HP',
  attack: 'Ataque',
  defense: 'Defesa',
  "special-attack": 'Ataque Especial',
  "special-defense": 'Defesa Especial',
  speed: 'Velocidade',

}
export function ModalPokemons({pokemon}: PokemonProps){
  const formattedHeight = useHeightPokemon(pokemon?.height ?? 0);
  if (!pokemon) return null;
    return(
        <Dialog.Portal>
            <Overlay>
              <Content>
                <CloseButton>
                        <X size={24}/>
                </CloseButton>
                <HeaderInfos> 
                  <div>

                    <img src={pokemon.sprites.other.dream_world?.front_default || 
                          pokemon.sprites.other["official-artwork"].front_default} alt={`Pokemon ${pokemon.name}`}
                          />
                  </div>
                  <Title>{pokemon.name}</Title>
                </HeaderInfos>

                <TypesPokemon>
                  {pokemon.types && Array.isArray(pokemon.types) ? (
                    pokemon.types.map((typeInfo) => {
                    const translatedType = typeMapping[typeInfo.type.name as keyof typeof typeMapping];
                      return <SpanTypes key={typeInfo.type.name} className={typeInfo.type.name}> {translatedType} </SpanTypes>
                    })
                  ) : (
                    <p>Carregando tipos...</p>
                  )}
                </TypesPokemon>
                  
                {/*Aqui criei os dois jeitos possiveis, uma criando um hook e outra fazendo diretemente no código
                   Para a altura eu criei um hook e peso fiz aqui no código mesmo.*/}
                  <HeightAndWeight>
                    <h3>Altura: {formattedHeight}</h3>
                    <h3>Peso: {(pokemon.weight / 10).toFixed(0)}Kg</h3>
                  </HeightAndWeight>
                {/*----------------------------------------------------------------------------------------------*/}
                <StatsDiv>
                  {Array.isArray(pokemon.stats) &&
                    pokemon.stats.map((stat) => {
                    const translatedStat = typeAtributes[stat.stat.name as keyof typeof typeAtributes];

                    return (
                    <span key={stat.stat.name}>
                      <strong>{translatedStat || stat.stat.name}:&nbsp;</strong> {stat.base_stat}
                    </span>
                  );
                  })}
                </StatsDiv>
                
              </Content>
            </Overlay>
        </Dialog.Portal>
    )
}