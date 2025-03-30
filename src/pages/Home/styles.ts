import styled from "styled-components";


export const HomeContainer = styled.main`
    width: 100%;
    max-width: 55.87rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5rem;
`;


export const Pokemons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin-top: 3rem;

    @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
}

    @media (max-width: 640px) {
    grid-template-columns: 1fr;
}

`;

export const ButtonMore = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 0;
    cursor: pointer;
    width: 7rem;
    height: 3rem;
    margin-top: 2rem;
    background: ${(props) => props.theme.colors['blue']};
    font-weight: 450;

    &:hover{
        transition: all ease 0.4s;
        background: ${(props) => props.theme.colors['blue-hover']};;
    }

    &:disabled{
        cursor: not-allowed;
    }

`;