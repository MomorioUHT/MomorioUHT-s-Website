import Layout from '../components/Layout';
import geometry from "../assets/geometry3.gif";
import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

import image from '../assets/TAAlgo2025.png'
//images

function ProjectPage() {
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

            <h1 className="reveal mt-2 pixel-font">Projects</h1>
            <p className="lead reveal mt-1 pixel-font">Things I do in my free time :D</p>

            <div className="d-flex justify-content-center mt-4">
                <ProjectCard
                    image={image}
                    title="SiamMC Minecraft Server"
                    description={`
                        A minigame minecraft server (1.8 based)
                        With custom plugins and features.
                    `}
                    state='In Development'
                    tech={['Java']}
                    link="https://github.com/yourrepo"
                />
            </div>
        </Layout>
    );
}

export default ProjectPage;
