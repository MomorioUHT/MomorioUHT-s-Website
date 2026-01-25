type ContactCardProps = {
    title: string,
    link: string,
    href?: string,
    icon?: string
}

function ContactCard({title, link, href, icon = "🔗"}: ContactCardProps) {
    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

                    .custom-font {
                        font-family: 'Montserrat', sans-serif;
                    }

                    .contact-card {
                        transition: transform 0.2s ease, box-shadow 0.2s ease;
                        backdrop-filter: blur(6px);
                    }

                    .contact-card:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 8px 24px rgba(0,0,0,0.3);
                    }

                    .contact-link {
                        color: #ddd;
                        text-decoration: none;
                        border-bottom: 1px dashed transparent;
                        transition: color 0.2s, border-color 0.2s;
                    }

                    .contact-link:hover {
                        color: #fff;
                        border-color: #aaa;
                    }
                `}
            </style>

            <div
                className="card h-100 bg-transparent text-white border-secondary contact-card reveal"
                style={{ width: 'fit-content', maxWidth: '100%' }}
            >
                <div className="card-body">
                    <h5 className="card-title custom-font d-flex align-items-center gap-2">
                        <span>{icon}</span>
                        {title}
                    </h5>

                    {href ? (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="custom-font contact-link"
                        >
                            ⬩➤ {link}
                        </a>
                    ) : (
                        <p className="card-text custom-font mb-0">
                            .✦ ݁˖ {link}
                        </p>
                    )}
                </div>
            </div>
        </>
    )
}

export default ContactCard;