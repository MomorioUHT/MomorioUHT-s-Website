type TributeCardProps = {
    image: string;
    title: string;
    description: string;
    about?: string;
}

function TributeCard({ image, title, description, about }: TributeCardProps) {
    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

                    .custom-font {
                        font-family: 'Montserrat', sans-serif;
                    }
                `}
            </style>
            
            <div className="card h-100 bg-transparent text-white border-secondary reveal"
                style={{
                    width: '1000px',
                    maxWidth: '100%'
                }}
            >
                <div className="card-body">
                    <h5 className="card-title custom-font">{title}</h5>
                </div>

                <div className="p-1 d-flex justify-content-center">
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

                <div className="card-body">
                    <p className="card-text custom-font" style={{ whiteSpace: 'pre-line' }}>
                        {description}
                    </p>
                </div>

                {about && (
                    <div className="card-footer text-secondary small">
                        {about}
                    </div>
                )}
            </div>
        </>
    );
}

export default TributeCard;