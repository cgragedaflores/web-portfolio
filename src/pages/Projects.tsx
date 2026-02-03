import React, { useState } from 'react';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        category: 'web',
        image: '🛒'
    },
    {
        id: 2,
        title: 'Social Media Dashboard',
        description: 'Analytics dashboard for social media management with data visualization and automated reporting.',
        tech: ['React', 'TypeScript', 'Chart.js', 'Express'],
        category: 'web',
        image: '📊'
    },
    {
        id: 3,
        title: 'Task Management App',
        description: 'Collaborative task management tool with real-time updates, team collaboration features.',
        tech: ['React', 'Firebase', 'Material-UI'],
        category: 'app',
        image: '✅'
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description: 'Modern portfolio website with smooth animations, dark theme, and responsive design.',
        tech: ['React', 'TypeScript', 'CSS3'],
        category: 'design',
        image: '🎨'
    },
    {
        id: 5,
        title: 'Weather App',
        description: 'Real-time weather application with location-based forecasts and interactive maps.',
        tech: ['React', 'API Integration', 'Geolocation'],
        category: 'app',
        image: '🌤️'
    },
    {
        id: 6,
        title: 'Blog Platform',
        description: 'Content management system with markdown support, SEO optimization, and user authentication.',
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