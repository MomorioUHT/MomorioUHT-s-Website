import Layout from '../components/Layout';
import geometry from '../assets/geometry.gif';
import { GoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import FanartCard from '../components/FanartCard';

function FanartsPage() {
    const [user, setUser] = useState<any>(null);

    const fanart = [
        {
            id: 1,
            title: "Protogen Version 1",
            artist: "Testing Artist",
            uploader: "Testing Artist",
            image: "https://i.pinimg.com/736x/60/bb/ed/60bbed799cc137612afa742cc64d2501.jpg",
            creationDate: "2024-01-01"
        },
        {
            id: 2,
            title: "Protogen Version 2",
            artist: "Testing Artist",
            uploader: "Testing Artist",
            image: "https://i.pinimg.com/736x/60/bb/ed/60bbed799cc137612afa742cc64d2501.jpg",
            creationDate: "2024-01-01"
        },
        {
            id: 3,
            title: "Protogen Version 3",
            artist: "Testing Artist",
            uploader: "Testing Artist",
            image: "https://i.pinimg.com/736x/60/bb/ed/60bbed799cc137612afa742cc64d2501.jpg",
            creationDate: "2024-01-01"
        },
        {
            id: 4,
            title: "Protogen Version 4",
            artist: "Testing Artist",
            uploader: "Testing Artist",
            image: "https://i.pinimg.com/736x/60/bb/ed/60bbed799cc137612afa742cc64d2501.jpg",
            creationDate: "2024-01-01"
        },
        {
            id: 5,
            title: "Protogen Version 5",
            artist: "Testing Artist",
            uploader: "Testing Artist",
            image: "https://i.pinimg.com/736x/60/bb/ed/60bbed799cc137612afa742cc64d2501.jpg",
            creationDate: "2024-01-01"
        },
        {
            id: 6,
            title: "Protogen Version 6",
            artist: "Testing Artist",
            uploader: "Testing Artist",
            image: "https://i.pinimg.com/736x/60/bb/ed/60bbed799cc137612afa742cc64d2501.jpg",
            creationDate: "2024-01-01"
        },
        {
            id: 7,
            title: "Protogen Version 7",
            artist: "Testing Artist",
            uploader: "Testing Artist",
            image: "https://i.pinimg.com/736x/60/bb/ed/60bbed799cc137612afa742cc64d2501.jpg",
            creationDate: "2024-01-01"
        },
        {
            id: 8,
            title: "Protogen Version 8",
            artist: "Testing Artist",
            uploader: "Testing Artist",
            image: "https://i.pinimg.com/736x/60/bb/ed/60bbed799cc137612afa742cc64d2501.jpg",
            creationDate: "2024-01-01"
        },
        {
            id: 9,
            title: "Protogen Version 9",
            artist: "Testing Artist",
            uploader: "Testing Artist",
            image: "https://i.pinimg.com/736x/60/bb/ed/60bbed799cc137612afa742cc64d2501.jpg",
            creationDate: "2024-01-01"
        }
    ];

    const handleLoginSuccess = (credentialResponse: any) => {
        console.log(credentialResponse);
    }

    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.1 }
        );

        reveals.forEach(el => observer.observe(el));
    }, []);

    return (
        <Layout>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap');

                    body {
                        margin: 0;
                        min-height: 100vh;
                        background-image: url(${geometry});
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                    body::before {
                        content: "";
                        position: fixed;
                        inset: 0;
                        background: rgba(0, 0, 0, 0.85);
                        pointer-events: none;
                        z-index: -1;
                    }

                    .reveal {
                        opacity: 0;
                        transform: translateY(40px);
                        transition: all 0.6s ease;
                    }
                    .reveal.active {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    .pixel-font {
                        font-family: "Silkscreen", sans-serif;
                    }
                `}
            </style>

            <h1 className="reveal pixel-font">Fanarts Hall</h1>
            <p className="lead reveal pixel-font">fanarts from everyone :D</p>

            <p className="lead reveal pixel-font">Login to start uploading your fanarts!</p>
            <p className="blockquote-footer reveal pixel-font">Your password will not be saved in the database</p>
            
            <div className="reveal d-flex flex-column align-items-center mt-5 mb-5">
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={() => console.log("Login Failed")} 
                />
            </div>

            {/* Fanart Grid */}
            <div className="w-100 mt-4"> 
                <div className="row g-4 justify-content-center">
                    {fanart.map((art) => (
                        <div
                            key={art.id}
                            className="col-12 col-md-6 col-lg-4 d-flex justify-content-center reveal"
                        >
                            <div style={{ width: '100%', maxWidth: '350px' }}>
                                <FanartCard
                                    title={art.title}
                                    artist={art.artist}
                                    uploader={art.uploader}
                                    image={art.image}
                                    creationDate={art.creationDate}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </Layout>
    );
}

export default FanartsPage;