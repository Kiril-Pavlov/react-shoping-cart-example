import React, { useState } from 'react'

//styled components
import { StyledHeader } from './styles/Header.styled'
import { HamburgerButton } from './styles/HamburgerButton.styled'
import { Logo } from './styles/Logo.styled'
import { StyledNavbar } from './styles/Navbar.styled'
import { CartButton } from './styles/CartButton.styled'

import {GiShoppingCart,GiHamburgerMenu} from "react-icons/gi"


const Header = () => {
  const [isHamOpen,setIsHamOpen]= useState(false);


  return (
    <StyledHeader>
        <HamburgerButton><GiHamburgerMenu/></HamburgerButton>
        <Logo>Cart Example Page</Logo>
        <StyledNavbar>links</StyledNavbar>
        <CartButton><GiShoppingCart/></CartButton>
    </StyledHeader>
  )
}

export default Header