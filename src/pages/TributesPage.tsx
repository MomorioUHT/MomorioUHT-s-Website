import Layout from '../components/Layout';
import geometry from "../assets/geometry2.gif";
import { useEffect } from 'react';
import TributeCard from '../components/TributeCard';

//images
import image1 from '../assets/tributes/taalgo2025/TAAlgo2025.png';
import image2 from '../assets/tributes/python2024/PythonTutor2024.png';
import image3 from '../assets/tributes/jareejan26/Jaree2026.png'

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

            <h1 className="reveal mt-2 pixel-font">Tributes</h1>
            <p className="lead reveal mt-1 pixel-font">A collection of memories.</p>

            <div className="d-flex justify-content-center mt-4">
                <TributeCard
                    image={image3}
                    title="First meet @ Jaree Cafe 2026"
                    description={`Meeting the furries group and the protogens OwO, This place is nice tho`}
                    about="25 Jan 2026"
                />
            </div>

            <div className="d-flex justify-content-center mt-4">
                <TributeCard
                    image={image1}
                    title="Data Structures & Algorithms (01418321) Teacher Assistant @ Kasetsart University"
                    description={`Working as a Teacher Assistant for the Data Structures & Algorithms course at Kasetsart University.
                        This role allowed me to deepen my understanding of fundamental computer science concepts
                        while assisting with lab sessions, grading assignments, and many key responsibilities that enriched my experience.`}
                    about="July 2025 - December 2025"
                />
            </div>

            <div className="d-flex justify-content-center mt-4">
                <TributeCard
                    image={image2}
                    title="Python Fundamentals Course Tutor for new freshies @ Kasetsart University"
                    description={`Tutoring new freshmen in Python programming as part of the Python Fundamentals course at Kasetsart University.
                        This experience enhanced my communication skills and reinforced my own knowledge of Python, 
                        as I guided students through coding concepts and problem-solving techniques.`}
                    about="Jun 2024"
                />
            </div>
        </Layout>
    );
}

export default TributesPage;
