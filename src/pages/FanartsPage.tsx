import Layout from '../components/Layout';
import geometry from '../assets/geometry.gif';
import { GoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import FanartCard from '../components/FanartCard';

function FanartsPage() {
    const [user, setUser] = useState<any>(null);

    const handleLoginSuccess = (credentialResponse: any) => {
        console.log(credentialResponse);
    }

    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    // if the element is on screen
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.1 } // < 10% of the element is visible
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
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={() => console.log("Login Failed")}/>
            </div>

            {/* Fanart upload form and gallery would go here */}

            <div className="d-flex justify-content-center mt-4">
                <FanartCard
                    title="Protogen Version 1"
                    artist="Testing Artist"
                    uploader='Testing Artist'
                    image="https://i.pinimg.com/736x/15/15/2c/15152c0a4e3e4b50868fdc2b212dea6c.jpg"
                    creationDate="2024-01-01"
                />
                <FanartCard
                    title="Protogen Version 1"
                    artist="Testing Artist"
                    uploader='Testing Artist'
                    image="https://i.pinimg.com/736x/15/15/2c/15152c0a4e3e4b50868fdc2b212dea6c.jpg"
                    creationDate="2024-01-01"
                />
                <FanartCard
                    title="Protogen Version 1"
                    artist="Testing Artist"
                    uploader='Testing Artist'
                    image="https://i.pinimg.com/736x/15/15/2c/15152c0a4e3e4b50868fdc2b212dea6c.jpg"
                    creationDate="2024-01-01"
                />
            </div>

        </Layout>
    );
}

export default FanartsPage;
