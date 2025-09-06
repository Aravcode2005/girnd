import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
import {ReactComponent as Logo } from '../components/Imagegallery/logo.svg';

const navbarStyle={

    backgroundColor:'orange'
};
const Header=(props)=>{
    return(
     <Navbar style={navbarStyle} variant ="light">
      <Container>

      <Logo style ={{maxWidth:'10rem'}}/>

      </Container>

      </Navbar>

    )
};
export default Header;