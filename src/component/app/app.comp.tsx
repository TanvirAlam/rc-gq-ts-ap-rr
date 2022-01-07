import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import client from '../../common/apollo-client';
import About from '../../pages/about/about.pages';
import Home from '../../pages/home/home.pages';
import Header from '../header/header.comp';
import { Container } from './app.style';

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Container>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </Router>
            </Container>
        </ApolloProvider>
    )
}

export default App
