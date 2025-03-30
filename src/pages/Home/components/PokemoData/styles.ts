//import { Link } from "react-router-dom";
import styled from "styled-components";

export const PokemonModal = styled.div`
    width: 17.8rem;
    height: 23.4rem;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors["base-post"]};
    border: 2px solid ${({ theme }) => theme.colors["base-post"]};
    padding: 1rem;
    transition: 0.4s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
    border-color: ${({ theme }) => theme.colors["base-label"]};
    }
    
    
`;

export const PokemonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PokemonImg = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: ${(props) => props.theme.colors['base-background']};
    border-radius: 100%;
    width: 230px;
    height: 230px;

    >img{
       max-width: 240px;
       max-height: 240px;
    }

    
`;

export const PokemonInfo = styled.div`
    margin-top: 1rem;
    span{
        color: ${(props) => props.theme.colors['base-text']};
        font-size: ${(props) => props.theme.textSizes['text-text-m']};
        
    }
    h1{
        color: ${(props) => props.theme.colors['base-subtitle']};
        font-size: ${(props) => props.theme.textSizes['title-title-s']};
        margin-top: 10px;
    }
    
`;

export const DivTypes = styled.div`
    margin-top: 1rem;    
`;


export const SpanTypes = styled.span`
        color: ${(props) => props.theme.colors['base-subtitle']};
        font-size: ${(props) => props.theme.textSizes['text-text-m']};
        border-radius: 8px;
        margin-right: 1rem;
        padding: 5px 15px;
        min-height: 1.6rem;
        

        &.water {
	        background: ${(props) => props.theme.colors['water']};
        }

        &.grass {
	        background: ${(props) => props.theme.colors['grass']};
        }

        &.poison {
	        background-color: ${(props) => props.theme.colors['poison']};
        }

        &.fire {
	        background-color: ${(props) => props.theme.colors['fire']};
        }

        &.bug {
	        background-color: ${(props) => props.theme.colors['bug']};
        }

        &.dragon {
	        background: ${(props) => props.theme.colors['dragon']};
        }

        &.flying {
	        background-color: ${(props) => props.theme.colors['flying']};
        }

        &.ground {
	        background-color: ${(props) => props.theme.colors['ground']};
        }

        &.steel {
	        background-color: ${(props) => props.theme.colors['steel']};
        }

        &.psychic {
	        background-color: ${(props) => props.theme.colors['psychic']};
        }

        &.ice {
	        background-color: ${(props) => props.theme.colors['ice']};
        }

        &.ghost {
	        background-color: ${(props) => props.theme.colors['ghost']};
        }

        &.normal {
	        background-color: ${(props) => props.theme.colors['normal']};
        }

        &.rock {
	        background-color: ${(props) => props.theme.colors['rock']};
        }

        &.electric {
	        background-color: ${(props) => props.theme.colors['electric']};
        }

        &.fighting {
	        background-color: ${(props) => props.theme.colors['fighting']};
        }

        &.fairy {
	        background-color: ${(props) => props.theme.colors['fairy']};
        }

        &.dark {
	        background-color: ${(props) => props.theme.colors['dark']};
        }
`;