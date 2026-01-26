interface FanartCardProps {
    id: string;
    title: string;
    artist: string;
    uploader: string;
    image: string;
    creationDate: string;
}

function FanartCard ({title, artist, uploader, image, creationDate, id}: FanartCardProps) {
    const backendURL = process.env.REACT_APP_BACKEND_LOCATION || "undefined";

    function formatDateTime(creationDate: string) {
        const date = new Date(creationDate);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // เดือนเริ่มที่ 0
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

                    .custom-font {
                        font-family: 'Montserrat', sans-serif;
                    }

                    .fanart-card {
                        transition: transform 0.2s ease, box-shadow 0.2s ease;
                    }

                    .fanart-card:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 8px 24px rgba(0,0,0,0.3);
                    }
                `}
            </style>

            <div
                className="card h-100 bg-transparent text-white border-secondary fanart-card"
                style={{
                    width: '300px',
                    maxWidth: '100%',
                    borderRadius: '12px',
                    overflow: 'hidden'
                }}
            >
                {/* Title */}
                <div className="card-body pb-2">
                    <h5 className="card-title custom-font fw-semibold mb-0">
                        {title}
                    </h5>
                </div>

                {/* Image */}
                <div className="px-3">
                    <div
                        className="d-flex justify-content-center align-items-center rounded"
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            height: '220px'
                        }}
                    >
                        <img
                            src={backendURL + image}
                            alt={title}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '200px',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </div>

                {/* Meta info */}
                <div className="card-body pt-2">
                    <p
                        className="card-text custom-font text-secondary"
                        style={{
                            fontSize: '0.85rem',
                            lineHeight: '1.5',
                            whiteSpace: 'pre-line'
                        }}
                    >
                        {`Artist: ${artist}
                        Upload date: ${formatDateTime(creationDate)}
                        ID: #${id}`}
                    </p>
                </div>
            </div>
        </>
    );
}

export default FanartCard;