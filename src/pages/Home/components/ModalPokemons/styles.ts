import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";


export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0,0.75);
`;

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 8px;
    padding: 2.5rem 3rem;
    background: ${(props) => props.theme.colors['base-post']};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 560px) {
        min-width: 25rem;
        padding: 1.5rem 2rem;
        
    }

    @media (max-width: 415px) {
        min-width: 20rem;
        padding: 1.5rem 2rem;
        
    }
`;

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${(props) => props.theme.colors['base-text']};
`;

export const HeaderInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;

    div>img{
       max-width: 240px;
       max-height: 240px;

       @media (max-width: 560px) {
        max-width: 140px;
        max-height: 140px; 
        }
    }

    div{
        display: flex;
        text-align: center;
        align-items: center;
        background: ${(props) => props.theme.colors['base-background']};
        justify-content: center;
        width: 230px;
        border-radius: 100%;
        height: 230px;

        @media (max-width: 560px) {
            width: 130px;
            height: 130px;
        }
    }
`;

export const Title = styled(Dialog.Title)`
    margin-top: 1rem;
`;

export const TypesPokemon = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1.5rem;

`;

export const HeightAndWeight = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1.5rem;
`;

export const StatsDiv = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        margin-top: 1rem;
        justify-content: center; /* Centraliza horizontalmente */
        align-items: center;

        @media (max-width: 415px) {
            grid-template-columns: repeat(1, 1fr);
        
        }

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            background: ${(props) => props.theme.colors['base-background']};
            font-size: ${(props) => props.theme.textSizes['text-text-m']};
            padding: 10px;
            border-radius: 10px;
            
            @media (max-width: 560px) {
                font-size: ${(props) => props.theme.textSizes['text-text-s']};
                padding: 3px;    
            }
        }        
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