import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color:${({theme})=>theme.colors.dark};
    color: ${({theme})=>theme.colors.primary};
    padding:40px 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`