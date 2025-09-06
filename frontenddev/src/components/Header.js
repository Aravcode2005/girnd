import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
import {ReactComponent as Logo } from '../components/Imagegallery/logo.svg';

const navbarStyle={

    backgroundColor:'black',
};
const Header=({title})=>{
    return(
     <Navbar style={navbarStyle} variant ="light">
      <Container>

      <Logo alt={title} style={{maxWidth:'10rem',maxHeight:'2rem'}}/>

      </Container>

      </Navbar>

    )
};
export default Header;