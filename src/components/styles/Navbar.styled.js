import styled from "styled-components";

export const StyledNavbar = styled.nav`
    display: flex;
    flex-direction: row;
    grid-gap: 20px;
    @media screen and (max-width: 992px) {
        display: none;
    }
`