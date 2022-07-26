import React, { Component } from 'react';
import { Navbar } from 'react-bulma-components'
import icon from '../img/icon.png';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';


export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            burgerActive: true,
            navActive: false
        }

    }

    navItems() { 
        return (<>
                    <Link className='navbar-item' to="/">
                        <img style={{
                            margin: 'auto',
                            maxHeight: '3em'
                        }} 
                        src={icon} 
                        alt="Logo"/>
                    </Link>
                    <Link className='navbar-item' to="/">Portfolio</Link>
                    <Link className='navbar-item' to="/about">About Me</Link>
        </>);
    }

// export default function Nav(props) {
    render() {

        return(
            <Navbar 
            size='large' 
            transparent={true}
            style={{textAlign: 'center', justifyContent: 'space-around'}}
            >
                    {this.navItems()}
            </Navbar>
        );
    }

}