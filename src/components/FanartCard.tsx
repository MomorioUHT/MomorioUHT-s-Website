interface FanartCardProps {
    title: string;
    artist: string;
    uploader: string;
    image: string;
    creationDate: string;
}

function FanartCard ({title, artist, uploader, image, creationDate}: FanartCardProps) {
    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap');

                    .custom-font {
                        font-family: 'Montserrat', sans-serif;
                    }
                    .pixel-font {
                        font-family: "Silkscreen", sans-serif;
                    }
                `}
            </style>
            
            <div className="card h-100 bg-transparent text-white border-secondary reveal"
                style={{
                    width: '300px',
                    maxWidth: '100%'
                }}
            >
                <div className="card-body">
                    <h5 className="card-title pixel-font">{title}</h5>
                </div>

                <div className="p-1 d-flex justify-content-center">
                    <div className="border border-secondary rounded p-2 bg-primary">
                        <img
                            src={image}
                            alt={title}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '220px',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </div>

                 <div className="card-body">
                    <p className="card-text custom-font" style={{ whiteSpace: 'pre-line' }}>
                        {`Artist: ${artist}\nCreated on: ${creationDate}`}
                    </p>
                </div>
            </div>
        </>
    );
}

export default FanartCard;