import React from 'react';

const Footer: React.FC = () => {
    return (
        <>
            <section id="contact" className="contact-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Hablemos</span>
                        <h2 className="section-title">Contáctame</h2>
                    </div>
                    
                    <div className="contact-content">
                        <div className="contact-info">
                            <div className="contact-card">
                                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                                <h3>Email</h3>
                                <p>cgragedaflores@gmail.com</p>
                                <a href="mailto:cgragedaflores@gmail.com">Enviar mensaje →</a>
                            </div>
                            <div className="contact-card">
                                <div className="contact-icon"><i className="fab fa-linkedin"></i></div>
                                <h3>LinkedIn</h3>
                                <p>Conecta conmigo</p>
                                <a href="https://www.linkedin.com/in/carlos-eduardo-grageda-flores-8227b5107/" target="_blank" rel="noopener noreferrer">Ver perfil →</a>
                            </div>
                            <div className="contact-card">
                                <div className="contact-icon"><i className="fab fa-github"></i></div>
                                <h3>GitHub</h3>
                                <p>Revisa mi código</p>
                                <a href="https://github.com/cgragedaflores" target="_blank" rel="noopener noreferrer">Ver repositorios →</a>
                            </div>
                        </div>

                        <form className="contact-form">
                            <div className="form-group">
                                <input type="text" placeholder="Tu Nombre" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Tu Email" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Tu Mensaje" rows={6} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <h3>👨‍💻 Portfolio</h3>
                            <p>Building digital experiences that matter</p>
                        </div>
                        <div className="footer-social">
                            <a href="https://github.com/cgragedaflores" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-github"></i>
                                <span>GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/carlos-eduardo-grageda-flores-8227b5107/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-twitter"></i>
                                <span>Twitter</span>
                            </a>
                            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-behance"></i>
                                <span>Behance</span>
                            </a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Carlos Eduardo Grageda Flores. Todos los derechos reservados.</p>
                        <p>Diseñado y Desarrollado con ❤️</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;