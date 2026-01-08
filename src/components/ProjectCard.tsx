type ProjectCardProps = {
    image: string;
    title: string;
    description: string;
    state: string;
    tech?: string[];
    link?: string;
};

function ProjectCard({ image, title, description, state, tech, link }: ProjectCardProps) {
    return (
        <>
            <style>
                {`
                    .project-card {
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                    }

                    .project-card:hover {
                        transform: translateY(-6px);
                        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
                    }

                    .project-image {
                        max-width: 220px;
                        object-fit: contain;
                    }

                    .tech-badge {
                        font-size: 0.75rem;
                    }
                `}
            </style>

            <div className="card bg-dark text-white border-secondary project-card reveal">
                <div className="row g-0 align-items-center">

                    {/* Image */}
                    <div className="col-md-4 text-center p-3">
                        <div className="border border-secondary rounded p-2 bg-dark">
                            <img
                                src={image}
                                alt={title}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '220px',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>

                            {/* State */}
                            <p className="card-text">
                                <span className="badge bg-primary me-1 tech-badge">
                                    {state}
                                </span>
                            </p>

                            <p className="card-text text-secondary" style={{ whiteSpace: 'pre-line' }}>
                                {description}
                            </p>

                            {/* Tech stack */}
                            {tech && (
                                <div className="mb-2">
                                    {tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="badge bg-secondary me-1 tech-badge"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Action */}
                            {link && (
                                <a
                                    href={link}
                                    className="btn btn-outline-light btn-sm"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Project →
                                </a>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ProjectCard;
