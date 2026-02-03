import React from 'react';

const About: React.FC = () => {
    return (
        <>
            <section id="about" className="about-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Conóceme</span>
                        <h2 className="section-title">Sobre Mí</h2>
                    </div>
                    <div className="about-content">
                        <div className="about-image">
                            <img 
                                src={require('../../public/images/profile.png')} 
                                alt="Carlos Grageda" 
                                loading="lazy"
                            />
                        </div>
                        <div className="about-text">
                            <p>
                                Soy Carlos Eduardo Grageda Flores, un joven apasionado de la tecnología con 
                                formación como Técnico Superior en Desarrollo de Aplicaciones Web. Me encanta crear 
                                soluciones digitales innovadoras y explorar constantemente nuevas tecnologías.
                            </p>
                            <p>
                                Con conocimientos en JavaScript, Java, PHP, HTML, CSS, desarrollo Android, bases de datos SQL, 
                                manejo de JSON y consumo de APIs REST, estoy siempre en búsqueda de nuevos desafíos y oportunidades para aprender. 
                                Mi motivación es seguir creciendo profesionalmente y contribuir en proyectos que generen impacto real.
                            </p>
                            <div className="about-stats">
                                <div className="stat-card">
                                    <h3>20+</h3>
                                    <p>Proyectos Realizados</p>
                                </div>
                                <div className="stat-card">
                                    <h3>10</h3>
                                    <p>Tecnologías</p>
                                </div>
                                <div className="stat-card">
                                    <h3>100%</h3>
                                    <p>Dedicación</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" className="skills-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Lo que domino</span>
                        <h2 className="section-title">Mis Habilidades</h2>
                    </div>
                    <div className="skills-grid">
                        <div className="skill-card">
                            <div className="skill-icon" style={{background: 'linear-gradient(135deg, #f0db4f 0%, #f7df1e 100%)'}}>
                                <i className="devicon-javascript-plain"></i>
                            </div>
                            <h3>JavaScript</h3>
                            <p>Desarrollo interactivo</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon" style={{background: 'linear-gradient(135deg, #f89820 0%, #ED1D25 100%)'}}>
                                <i className="devicon-java-plain"></i>
                            </div>
                            <h3>Java</h3>
                            <p>Aplicaciones robustas</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon" style={{background: 'linear-gradient(135deg, #8993be 0%, #6181b6 100%)'}}>
                                <i className="devicon-php-plain"></i>
                            </div>
                            <h3>PHP</h3>
                            <p>Backend dinámico</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon" style={{background: 'linear-gradient(135deg, #e34c26 0%, #f06529 100%)'}}>
                                <i className="devicon-html5-plain"></i>
                            </div>
                            <h3>HTML5</h3>
                            <p>Estructura web</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon" style={{background: 'linear-gradient(135deg, #264de4 0%, #2965f1 100%)'}}>
                                <i className="devicon-css3-plain"></i>
                            </div>
                            <h3>CSS3</h3>
                            <p>Diseño responsive</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon" style={{background: 'linear-gradient(135deg, #3ddc84 0%, #07c160 100%)'}}>
                                <i className="devicon-android-plain"></i>
                            </div>
                            <h3>Android</h3>
                            <p>Apps móviles</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon" style={{background: 'linear-gradient(135deg, #336791 0%, #3b7ba2 100%)'}}>
                                <i className="fas fa-database"></i>
                            </div>
                            <h3>SQL</h3>
                            <p>Bases de datos</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon" style={{background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)'}}>
                                <i className="fas fa-code"></i>
                            </div>
                            <h3>JSON</h3>
                            <p>Manejo de datos</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon" style={{background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'}}>
                                <i className="fas fa-plug"></i>
                            </div>
                            <h3>API REST</h3>
                            <p>Integración de servicios</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon" style={{background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'}}>
                                <i className="devicon-git-plain"></i>
                            </div>
                            <h3>Git</h3>
                            <p>Control de versiones</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience" className="experience-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Mi Trayectoria</span>
                        <h2 className="section-title">Experiencia</h2>
                    </div>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">2024 - Presente</span>
                                <h3>Desarrollo Continuo</h3>
                                <h4>Proyectos Personales y Freelance</h4>
                                <p>
                                    Desarrollando aplicaciones web y móviles, aplicando las tecnologías aprendidas y 
                                    explorando nuevas herramientas. Enfocado en crear soluciones funcionales y mejorar 
                                    constantemente mis habilidades técnicas.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">2022 - 2024</span>
                                <h3>Desarrollo de Aplicaciones</h3>
                                <h4>Práctica y Aprendizaje</h4>
                                <p>
                                    Trabajando con diversas tecnologías como JavaScript, Java, PHP, Android y bases de datos. 
                                    Implementando proyectos que abarcan tanto frontend como backend, y desarrollo móvil.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">2020 - 2022</span>
                                <h3>Técnico Superior - DAW</h3>
                                <h4>Formación Profesional</h4>
                                <p>
                                    Titulación en Desarrollo de Aplicaciones Web. Formación completa en tecnologías 
                                    web, programación orientada a objetos, bases de datos y metodologías de desarrollo ágil.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;