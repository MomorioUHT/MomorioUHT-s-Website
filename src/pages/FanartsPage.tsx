import { GoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import api from '../components/api/axios-api';
import FanartCard from '../components/FanartCard';

import Layout from '../components/Layout';
import geometry from '../assets/geometry.gif';

import { Fanart, FanartApiResponse } from '../components/hook/hook';
function FanartsPage() {
    const navigate = useNavigate();

    const [user, setUser] = useState<any>(null);
    const [fanart, setFanart] = useState<Fanart[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleLoginSuccess = (credentialResponse: any) => {
        try {
            const decoded = jwtDecode<any>(credentialResponse.credential);
            console.log("Decoded user:", decoded);
            navigate("/upload", { state: { user: decoded }});
        } catch {
            console.log("Login failed");
            alert("Login failed. Please try again.");
        }
    }

    const fetchFanart = async () => {
        setIsLoading(true);
        try {
            const response = await api.get<FanartApiResponse>('/api/posts', {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.data.success) {
                return;
            }
            setFanart(response.data.data);
        } catch (error: any) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };

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

        fetchFanart();
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

            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status"></div>
                </div>
            ) : (
                <div className="w-100 mt-4"> 
                    {fanart.length === 0 ? (
                        <p className="lead pixel-font">No fanarts found...</p>
                    ) : (
                        <div className="row g-4 justify-content-center">
                            {fanart.map((art) => (
                                <div
                                    key={art.id}
                                    className="col-12 col-md-6 col-lg-3 d-flex justify-content-center reveal"
                                >
                                    <div style={{ width: '100%', maxWidth: '350px' }}>
                                        <FanartCard
                                            title={art.title}
                                            artist={art.artist}
                                            uploader={art.uploader}
                                            image={art.image_path}
                                            creationDate={art.creation_date}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

        </Layout>
    );
}

export default FanartsPage;