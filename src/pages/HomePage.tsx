import Layout from '../components/Layout';
import mainbg from "../assets/mainbg2.gif";
import { useEffect } from 'react';

function HomePage() {
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
                            background-image: url(${mainbg});
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
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

            <h1 className="reveal pixel-font">Welcome to MomorioUHT's Website!</h1>
            <p className="lead reveal pixel-font">This is a self-hosted personal website.</p>

        </Layout>
    );
}

export default HomePage;
