import React from 'react'
import { IconLogo, MenuItem, MenuItemLink, Menu, NavbarContainer, NavbarWrapper, IconLogoMobile } from './Navbar.styled.js'
import { CiApple } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
const Navbar = () => {

  const [click, setClick] = useState (false);
  const ChangeClik = () => {
    setClick(!click);
    console.log(click);
  }
  return (
    <>
    <NavbarContainer>
      <NavbarWrapper>
          <IconLogo>
          <CiApple size={"2em"}/> Lorem Ipsum</IconLogo>

        <IconLogoMobile onClick={() => ChangeClik () }>
          <FaBars/>
        </IconLogoMobile>
  
       <Menu click={click}>
          <MenuItem>
            <MenuItemLink>HOME</MenuItemLink>
          </MenuItem>
  
          <MenuItem>
            <MenuItemLink>ABOUT</MenuItemLink>
          </MenuItem>
  
          <MenuItem>
            <MenuItemLink>SERVICE</MenuItemLink>
          </MenuItem>
  
          <MenuItem>
            <MenuItemLink>CONTACT</MenuItemLink>
          </MenuItem>
       </Menu>
       
      </NavbarWrapper>
    </NavbarContainer>
  </>
  )
}

export default Navbar
