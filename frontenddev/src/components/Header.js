import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
import 
const navbarStyle={

    backgroundColor:'orange'
};
const Header=(props)=>{
    return(
     <Navbar style={navbarStyle} variant ="light">
      
     <Navbar.Brand href="/">{props.title}</Navbar.Brand>
      </Navbar>

    )
};
export default Header;