import styled from "styled-components";

export const HamburgerButton = styled.div`
    color:${({theme})=>theme.colors.primary};
    font-size: 1rem;
    display: none;
    @media screen and (max-width: 992px) {
        display: block;
    }

`