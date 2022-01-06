import React from 'react'
import { NavLink } from 'react-router-dom';
import { Container } from './header.style';

const Header: React.FC = () => {
    return (
        <Container>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </nav>
            </header>
        </Container>
    )
}

export default Header
