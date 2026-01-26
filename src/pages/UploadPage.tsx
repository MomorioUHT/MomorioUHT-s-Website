import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Layout from '../components/Layout';
import moon1 from '../assets/moon1.gif';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../components/redux/store';
import { uploadFanart } from '../components/redux/slice/fanartSlice';

function UploadPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const user = location.state?.user || null;

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

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

        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    const handleUpload = async () => {
        if (!title || !artist || !image) {
            alert("Please fill all fields");
            return;
        }
        if (title.length > 50 || title.length === 0) {
            alert("Title text is 1-50 characters limit (English)");
            return;
        }
        if (artist.length > 50 || artist.length === 0) {
            alert("Artist name is 1-50 characters limit (English)");
            return;
        }

        try {
            setLoading(true);
            const res = await dispatch(uploadFanart({
                title,
                artist,
                image,
                uploaderId: user.sub
            })).unwrap() // for catch error like try / catch

            alert("Upload Complete! Your art is now displayed in the fanarts hall!")

            navigate('/fanarts')
        } catch (error: any) {
            alert("Upload failed! " + error)
        } finally {
            setLoading(false);
        }
    }

    return (
        <Layout>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

                    body {
                        margin: 0;
                        min-height: 100vh;
                        background-image: url(${moon1});
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
                    .custom-font {
                        font-family: 'Montserrat', sans-serif;
                    }

                    .upload-card {
                        max-width: 520px;
                        width: 100%;
                        background: rgba(0, 0, 0, 0.65);
                        border: 1px solid rgba(255, 255, 255, 0.15);
                        border-radius: 12px;
                        padding: 24px;
                        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
                    }

                    .upload-card input {
                        width: 100%;
                        background: #0f0f0f;
                        border: 1px solid #333;
                        color: #fff;
                        padding: 10px 12px;
                        margin-bottom: 14px;
                        border-radius: 6px;
                    }

                    .upload-card input[type="file"] {
                        padding: 8px;
                    }

                    .upload-card button {
                        width: 100%;
                        padding: 12px;
                        background: #6c63ff;
                        border: none;
                        border-radius: 6px;
                        color: #fff;
                        font-weight: bold;
                        cursor: pointer;
                        transition: background 0.2s ease;
                    }

                    .upload-card button:disabled {
                        background: #444;
                        cursor: not-allowed;
                    }

                    .upload-card button:hover:not(:disabled) {
                        background: #7b74ff;
                    }

                    .preview {
                        width: 100%;
                        height: 100%;
                        border: 1px dashed #555;
                        border-radius: 8px;
                        margin-bottom: 16px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                        background: #0a0a0a;
                        color: #777;
                        font-size: 12px;
                    }

                    .preview img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                `}
            </style>

            <div className="container d-flex flex-column align-items-center">
                <h1 className="reveal pixel-font mt-4">Upload Fanart</h1>
                <p className="blockquote-footer reveal pixel-font">
                    you can now upload the fanart
                </p>

                <div className="upload-card reveal custom-font mt-4">
                    <div className="mb-3 text-center">
                        <strong>Welcome, {user.name}</strong>
                    </div>

                    {/* Preview */}
                    <div className="preview">
                        {image ? (
                            <img src={URL.createObjectURL(image)} alt="Preview"/>
                        ) : (
                            <span>No image selected</span>
                        )}
                    </div>

                    <input
                        type="text"
                        placeholder="Fanart title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Artist name"
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                    />

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            if (e.target.files) {
                                setImage(e.target.files[0]);
                            }
                        }}
                    />

                    <button onClick={handleUpload} disabled={loading}>
                        {loading ? 'Uploading...' : 'Upload Fanart'}
                    </button>

                    <button
                        className="mt-3"
                        style={{
                            background: 'transparent',
                            border: '1px solid #444'
                        }}
                        onClick={() => navigate('/')}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </Layout>
    );

}

export default UploadPage;