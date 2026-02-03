import React from 'react';

const Home: React.FC = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <span className="greeting">Hola, soy</span>
                    <h1 className="hero-title">
                        <span className="name">Carlos Grageda</span>
                        <span className="cursor">|</span>
                    </h1>
                    <p className="hero-subtitle">Desarrollador de Aplicaciones Web</p>
                    <p className="hero-description">
                        Técnico Superior en Desarrollo de Aplicaciones Web con experiencia en 
                        JavaScript, Java, PHP, HTML, CSS, Android, SQL, JSON y manejo de APIs REST. 
                        Creo aplicaciones funcionales y soluciones tecnológicas innovadoras.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contáctame
                        </button>
                        <button className="btn btn-secondary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            Ver Proyectos
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="profile-card">
                        <div className="profile-image">
                            <img src={require('../../public/images/profile.png')} alt="Carlos Grageda" />
                        </div>
                        <div className="profile-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <span>↓</span>
            </div>
        </section>
    );
};

export default Home;