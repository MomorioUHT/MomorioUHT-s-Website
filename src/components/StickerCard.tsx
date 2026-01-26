type StickerCardProps = {
    id: string;
    name: string;
    image: string;
    total_minted: string;
    lots: string[];
    description?: string;
    version: string;
}

function StickerCard({ id, name, image, total_minted, lots, description, version }: StickerCardProps) {
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
                    width: '400px',
                    maxWidth: '100%'
                }}
            >
                <div className="card-body">
                    <h5 className="custom-font">#{id} {name}</h5>
                </div>

                <div className="p-1 d-flex justify-content-center">
                    <div className="border border-secondary rounded p-2 bg-primary">
                        <img
                            src={image}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '200px',
                                objectFit: 'contain'
                            }}
                            alt="Sticker"
                        />
                    </div>
                </div>

                <div className="card-body">
                    <p className="card-text custom-font">
                        Minted lots
                    </p>
                    <p className="card-text custom-font" style={{ whiteSpace: 'pre-line' }}>
                        {
                            lots.map((item, index) => (
                                <div key={index}>
                                    Lot #{index + 1} : {item} Stickers
                                </div>
                            ))
                        }
                    </p>
                    {
                        description && (
                            <p className="card-text custom-font">
                                {description}
                            </p>
                        )
                    }
                </div>
        
                <div className="card-footer text-secondary small">
                    Total minted {total_minted}
                </div>
                <div className="card-footer text-secondary small">
                    Shane Revision used: {version}
                </div>

            </div>
        </>
    );
}

export default StickerCard;