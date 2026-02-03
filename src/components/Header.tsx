import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !darkMode ? 'dark' : 'light';
        setDarkMode(!darkMode);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="header-container">
                <div className="logo">
                    <span className="logo-icon">👨‍💻</span>
                    Portfolio
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a onClick={() => scrollToSection('home')}>Inicio</a></li>
                        <li><a onClick={() => scrollToSection('about')}>Sobre Mí</a></li>
                        <li><a onClick={() => scrollToSection('skills')}>Habilidades</a></li>
                        <li><a onClick={() => scrollToSection('projects')}>Proyectos</a></li>
                        <li><a onClick={() => scrollToSection('contact')}>Contacto</a></li>
                    </ul>
                </nav>
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
                    {darkMode ? '☀️' : '🌙'}
                </button>
            </div>
        </header>
    );
};

export default Header;