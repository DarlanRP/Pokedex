import styled from "styled-components";

export const SearchContainer = styled.form`
    width: 100%;
    gap: 1rem;
    margin-top: 4.5rem;

    @media (max-width: 980px) {
        width: 66.5%;
        
    }

    @media (max-width: 768px) {
        width: 76.5%;
        
    }

    >div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1{
            color: ${(props) => props.theme.colors['base-subtitle']};
            font-size: ${(props) => props.theme.textSizes['title-title-s']};
        }
        span{
            color: ${(props) => props.theme.colors['base-subtitle']};
            font-size: ${(props) => props.theme.textSizes['text-text-s']}; 
        }
    }

    >input{
        margin-top: 0.75rem;
        width: 100%;
        flex: 1;
        border-radius: 6px;
        border: 0;
        background: ${(props) => props.theme.colors['base-input']};
        color: ${(props) => props.theme.colors['base-text']};
        font-size: ${(props) => props.theme.textSizes['text-text-m']};
        padding: 1rem;

        &::placeholder {
            color: ${(props) => props.theme.colors['base-label']};
        } 
    }

`;