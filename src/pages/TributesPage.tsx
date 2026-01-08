import Layout from '../components/Layout';
import geometry from "../assets/geometry2.gif";
import { useEffect } from 'react';

function TributesPage() {
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
                    `}
            </style>
            <h1 className="reveal">Tributes</h1>
            <p className="lead reveal">A collection of memories and dedications.</p>
        </Layout>
    );
}

export default TributesPage;
