import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './styles/main.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <Home />
                <About />
                <Projects />
            </main>
            <Footer />
        </div>
    );
};

export default App;