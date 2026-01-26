import { GoogleLogin } from '@react-oauth/google';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import { useDispatch, useSelector } from 'react-redux';
import { fetchFanarts } from '../components/redux/slice/fanartSlice';

import FanartCard from '../components/FanartCard';

import Layout from '../components/Layout';
import geometry from '../assets/geometry.gif';

import { RootState, AppDispatch } from '../components/redux/store';

function FanartsPage() {
    const navigate = useNavigate();

    const dispatch = useDispatch<AppDispatch>();
    const {items, loading, error} = useSelector((state: RootState) => state.fanart);

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

    useEffect(() => {
        dispatch(fetchFanarts());
    }, [dispatch]);

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

        return () => observer.disconnect();
    }, [items]); // Item list change, using this useEffect function

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

            {loading ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status"></div>
                </div>                
            ) : error ? (
                <div className="d-flex justify-content-center">
                    <p className="lead pixel-font text-danger">Error: {error}</p>
                </div>    
            ) : (
                <div className="w-100 mt-4"> 
                    {items.length === 0 ? (
                        <p className="lead pixel-font">No fanarts found...</p>
                    ) : (
                        <div className="row g-4 justify-content-center">
                            {items.map((art) => (
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
                                            id={art.id}
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