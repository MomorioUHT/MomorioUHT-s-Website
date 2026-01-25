import Layout from "../components/Layout";
import geometry from "../assets/geometry5.gif";

import { useEffect } from "react";
import ContactCard from "../components/ContactCard";

function ContactPage() {
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

            <h1 className="reveal mt-2 pixel-font">⋆˚꩜｡ My Contact</h1>
            <p className="lead reveal mt-1 pixel-font">MomorioUHT's social media</p>

            <div className="d-flex justify-content-center mt-4">
                <ContactCard
                    title="Discord"
                    link="momoriouht"
                    icon="💻"
                />                
            </div>

            <div className="d-flex justify-content-center mt-4">
                <ContactCard
                    title="Instagram"
                    link="instagram.com/momoriouht"
                    href="https://instagram.com/momoriouht"
                    icon="📸"
                />
            </div>

            <div className="d-flex justify-content-center mt-4">
                <ContactCard
                    title="Facebook"
                    link="facebook.com/momoriouht"
                    href="https://web.facebook.com/MomorioUHT"
                    icon="👥"
                />
            </div>

            <div className="d-flex justify-content-center mt-4">
                <ContactCard
                    title="GitHub"
                    link="github.com/momoriouht"
                    href="https://github.com/momoriouht"
                    icon="🌐"
                />
            </div>

            <div className="d-flex justify-content-center mt-4">
                <ContactCard
                    title="Work Email"
                    link="tontawan.janth@gmail.com"
                    icon="📩"
                />
            </div>
        </Layout>
    )
}

export default ContactPage;