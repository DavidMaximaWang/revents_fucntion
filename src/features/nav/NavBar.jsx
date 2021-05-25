import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';
import SignedInMenu from './SignInMenu';
import SignedOutMenu from './SignOutMenu';

export default function NavBar() {
  const { authenticated } = useSelector((state) => {
    debugger;
    return state.auth});
  console.log("🚀 ~ file: NavBar.jsx ~ line 10 ~ NavBar ~ authenticated", authenticated)

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events/' name='Events' />

        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
}
