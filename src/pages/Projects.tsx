import React, { useState } from 'react';

const projects = [
    {
        id: 1,
        title: 'Plataforma E-Commerce',
        description: 'Solución e-commerce completa con integración de pagos, gestión de inventario y analíticas en tiempo real.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        category: 'web',
        image: '🛒'
    },
    {
        id: 2,
        title: 'Dashboard de Redes Sociales',
        description: 'Panel de analíticas para gestión de redes sociales con visualización de datos y reportes automatizados.',
        tech: ['React', 'TypeScript', 'Chart.js', 'Express'],
        category: 'web',
        image: '📊'
    },
    {
        id: 3,
        title: 'App de Gestión de Tareas',
        description: 'Herramienta colaborativa para gestión de tareas con actualizaciones en tiempo real y funciones de equipo.',
        tech: ['React', 'Firebase', 'Material-UI'],
        category: 'app',
        image: '✅'
    },
    {
        id: 4,
        title: 'Sitio Web Portfolio',
        description: 'Portafolio web moderno con animaciones suaves, tema oscuro y diseño completamente responsive.',
        tech: ['React', 'TypeScript', 'CSS3'],
        category: 'design',
        image: '🎨'
    },
    {
        id: 5,
        title: 'App del Clima',
        description: 'Aplicación del clima en tiempo real con pronósticos basados en ubicación y mapas interactivos.',
        tech: ['React', 'API Integration', 'Geolocation'],
        category: 'app',
        image: '🌤️'
    },
    {
        id: 6,
        title: 'Plataforma de Blog',
        description: 'Sistema de gestión de contenido con soporte markdown, optimización SEO y autenticación de usuarios.',
        tech: ['Next.js', 'MongoDB', 'Auth0'],
        category: 'web',
        image: '📝'
    }
];

const Projects: React.FC = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Mi Trabajo</span>
                    <h2 className="section-title">Proyectos</h2>
                </div>
                
                <div className="project-filters">
                    <button 
                        className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
                        onClick={() => setFilter('all')}
                    >
                        Todos los Proyectos
                    </button>
                    <button 
                        className={filter === 'web' ? 'filter-btn active' : 'filter-btn'}
                        onClick={() => setFilter('web')}
                    >
                        Aplicaciones Web
                    </button>
                    <button 
                        className={filter === 'app' ? 'filter-btn active' : 'filter-btn'}
                        onClick={() => setFilter('app')}
                    >
                        Apps Móviles
                    </button>
                    <button 
                        className={filter === 'design' ? 'filter-btn active' : 'filter-btn'}
                        onClick={() => setFilter('design')}
                    >
                        Diseño
                    </button>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-card-modern">
                            <div className="project-image-placeholder">
                                <span className="project-emoji">{project.image}</span>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href="#" className="project-link">Ver Proyecto →</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;