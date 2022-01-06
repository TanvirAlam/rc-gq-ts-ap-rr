import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../../pages/about/about.pages';
import Home from '../../pages/home/home.pages';
import Header from '../header/header.comp';
import { Container } from './app.style';

const App: React.FC = () => {
    return (
        <Container>
            <Router>
                <Header />
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>
        </Container>
    )
}

export default App
