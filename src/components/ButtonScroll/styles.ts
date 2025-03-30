import styled from "styled-components";

interface ShowProps{
    show: boolean;
}

export const ButtonReturnTop = styled.button<ShowProps>`
    display: flex;
    text-align: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0;
    position: fixed;
    bottom: 60px;
    right: 30px;
    display: ${({ show }) => (show ? "block" : "none")};
    cursor: pointer;
    
    background: ${(props) => props.theme.colors['blue']};

    &:hover{
        transition: all ease 0.4s;
        background: ${(props) => props.theme.colors['blue-hover']};;
    }

    @media (max-width: 1024px) {
    right: 6px;
    }

    @media (max-width: 820px) {
    right: 30px;
    }

    @media (max-width: 748px) {
    right: 10px;
    }

    @media (max-width: 411px) {
    right: 5px;
    width: 25px;
    height: 25px;

    svg{
        width: 25px;
        height: 25px;
    }
    }
`;