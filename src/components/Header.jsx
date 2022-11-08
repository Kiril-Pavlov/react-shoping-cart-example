import React from 'react'

//styled components
import { StyledHeader } from './styles/Header.styled'
import { HamburgerButton } from './styles/HamburgerButton.styled'
import { Logo } from './styles/Logo.styled'
import { StyledNavbar } from './styles/Navbar.styled'
import { CartButton } from './styles/CartButton.styled'

import cartIcon from "../assets/cart.svg"


const Header = () => {
  return (
    <StyledHeader>
        <HamburgerButton>HAM</HamburgerButton>
        <Logo>Cart Example Page</Logo>
        <StyledNavbar>links</StyledNavbar>
        <CartButton><img src={cartIcon} alt="cart" fill="red"/></CartButton>
    </StyledHeader>
  )
}

export default Header