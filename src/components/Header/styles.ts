import styled from "styled-components";


export const HeaderContainer = styled.header`
    background: ${(props) => props.theme.colors['base-header']};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 16.5rem;

    img{
        width: 20rem;
        height: auto;
    }

    /* Estilos para telas menores */

    @media (max-width: 760px) {
        height: 13rem;
        img{
            width: 15rem;
            
        }
  }

    @media (max-width: 450px) {
        height: 10rem;
        img{
            width: 10rem;
            
        }
  }
`;


export const ImgBackground = styled.div`
    >img{
        width: 100%;
        height: auto;
        pointer-events: none;
    }

    @media screen {
        
    }

`;
