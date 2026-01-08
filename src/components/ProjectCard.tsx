import { useState } from "react";

type ProjectCardProps = {
    images: string[];
    title: string;
    description: string;
    state: string;
    tech?: string[];
    link?: string;
};

function ProjectCard({ images, title, description, state, tech, link }: ProjectCardProps) {
    const [current, setCurrent] = useState(0);

    const prevImage = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1: prev - 1));
    }

    const nextImage = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0: prev + 1));
    }

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

                    .custom-font {
                        font-family: 'Montserrat', sans-serif;
                    }

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

            <div className="card bg-transparent text-white border-secondary project-card reveal">
                <div className="row g-0 align-items-center">

                    {/* Image */}
                    <div className="col-md-12 text-center p-3">
                        <div className="border border-secondary rounded p-2 bg-transparent position-relative">
                            <img
                                src={images[current]}
                                alt={title}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '220px',
                                    objectFit: 'contain'
                                }}
                            />
                            <div className="text-secondary small mt-1">
                                {current + 1} / {images.length}
                            </div>

                            {/* Controls */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        className="btn btn-sm btn-dark position-absolute top-50 start-0 translate-middle-y"
                                        onClick={prevImage}
                                    >
                                        ‹
                                    </button>

                                    <button
                                        className="btn btn-sm btn-dark position-absolute top-50 end-0 translate-middle-y"
                                        onClick={nextImage}
                                    >
                                        ›
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="col-md-12">
                        <div className="card-body">
                            <h5 className="card-title custom-font">{title}</h5>

                            {/* State */}
                            <p className="card-text">
                                <span className="badge bg-primary me-1 tech-badge custom-font">
                                    {state}
                                </span>
                            </p>

                            <p className="card-text text-secondary custom-font" style={{ whiteSpace: 'pre-line' }}>
                                {description}
                            </p>

                            {/* Tech stack */}
                            {tech && (
                                <div className="mb-2">
                                    {tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="badge bg-secondary me-1 tech-badge custom-font" 
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
