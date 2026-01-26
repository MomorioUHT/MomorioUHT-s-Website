import { useEffect } from 'react';

import Layout from '../components/Layout';
import geometry from '../assets/geometry6.gif';
import StickerCard from '../components/StickerCard';

import sticker1img from '../assets/stickers/sticker1.png'

function StickersPage() {
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
            { threshold: 0.5 } // < 10% of the element is visible
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

            <h1 className="reveal mt-2 pixel-font">Stickers</h1>
            <p className="lead reveal mt-1 pixel-font">All of the stickers produced</p>

            <div className="d-flex justify-content-center mt-4">
                <StickerCard
                    id='1'
                    name='Dont leave your ram unattened!'
                    image={sticker1img}
                    total_minted='36'
                    lots={[
                        '25 Jan 2026 - 12', 
                        '26 Jan 2026 - 24'
                    ]}
                    description='2 were keep as private, 1 has a signature located @ Jaree Cafe'
                    version='0.1a'
                />
            </div>
        </Layout>
    );
}

export default StickersPage;