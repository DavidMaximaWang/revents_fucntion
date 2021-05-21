import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';
import SignedInMenu from './SignInMenu';
import SignedOutMenu from './SignOutMenu';

export default function NavBar({setFormOpen}) {
    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);
    function handleSignout(){
        setAuthenticated(false);
        history.push('/');
    };
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to="/" header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}}/>
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} to="/events/" name='Events' />

                {authenticated? < SignedInMenu signOut={handleSignout}/> :
                < SignedOutMenu setAuthenticated={setAuthenticated}/> 
                }

            </Container>
        </Menu>
    )
}