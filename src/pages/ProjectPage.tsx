import Layout from '../components/Layout';
import geometry from "../assets/geometry3.gif";
import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

// Images
import siammcimg1 from '../assets/projects/siammc/SiamMC-1.png'
import siammcimg2 from '../assets/projects/siammc/SiamMC-2.png'
import siammcimg3 from '../assets/projects/siammc/SiamMC-3.png'
import siammcimg4 from '../assets/projects/siammc/SiamMC-4.png'
import siammcimg5 from '../assets/projects/siammc/SiamMC-5.png'
import siammcimg6 from '../assets/projects/siammc/SiamMC-6.png'

import protoimg1 from '../assets/projects/protogen/Protogen-1.png'
import protoimg2 from '../assets/projects/protogen/Protogen-2.jpg'

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

            <h1 className="reveal mt-2 pixel-font">Projects & Hobbies</h1>
            <p className="lead reveal mt-1 pixel-font">Things I do in my free time :D</p>

            <div className="d-flex justify-content-center mt-4">
                <ProjectCard
                    images={[siammcimg1, siammcimg2, siammcimg3, siammcimg4, siammcimg5, siammcimg6]}
                    title="SiamMC Minecraft Server"
                    description={`A minigame minecraft server (1.8 based)
                        With custom plugins and features.`}
                    state='In Development'
                    tech={['Java']}
                />

                <ProjectCard
                    images={[protoimg1, protoimg2]}
                    title="Protogen"
                    description={`Being a Protogen & Eat RAM for DDR5 price increase.`}
                    state='Repairing'
                    tech={['C', 'Arduino']}
                />
            </div>
        </Layout>
    );
}

export default ProjectPage;
