import styled from "styled-components";

export const CartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 10px;
    background-color: transparent;
    outline: none;
    border: none;
    color:${({theme})=>theme.colors.primary};
`