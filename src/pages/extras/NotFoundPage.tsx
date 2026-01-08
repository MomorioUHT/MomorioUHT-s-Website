import matrix from '../../assets/darkmatrix.gif';

function NotFoundPage() {
    return (
        <>
            <style>
                {`
                    body {
                        margin: 0;
                        min-height: 100vh;
                        background-image: url(${matrix});
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    }

                    body::before {
                        content: "";
                        position: fixed;
                        inset: 0;
                        background: rgba(0, 0, 0, 0.75);
                        pointer-events: none;
                        z-index: -1;
                    }

                    .error-wrapper {
                        min-height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .error-card {
                        background: rgba(0, 0, 0, 0.6);
                        backdrop-filter: blur(6px);
                        border-radius: 16px;
                        padding: 2.5rem;
                        max-width: 420px;
                        width: 100%;
                        box-shadow: 0 0 30px rgba(0, 255, 0, 0.2);
                    }

                    .error-code {
                        font-size: 4rem;
                        font-weight: bold;
                        letter-spacing: 4px;
                        color: #00ff88;
                    }

                    .error-text {
                        opacity: 0.85;
                    }

                    .home-btn {
                        display: inline-block;
                        margin-top: 1.5rem;
                        padding: 0.6rem 1.5rem;
                        border-radius: 30px;
                        text-decoration: none;
                        color: #00ff88;
                        border: 1px solid #00ff88;
                        transition: all 0.25s ease;
                    }

                    .home-btn:hover {
                        background: #00ff88;
                        color: #000;
                    }
                `}
            </style>

            <div className="error-wrapper">
                <div className="error-card text-center text-white">
                    <div className="error-code">404</div>
                    <p className="error-text mb-3">Page not found</p>
                    <p className="error-text mb-3">And I also hate bootstrap</p>

                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ChtWaY7Sa1_pTmb1IZI7bGmoiWOiMszFnQ&s"
                        alt="Proto Error"
                        style={{ height: 180 }}
                        className="mb-3"
                    />

                    <div>
                        <a href="/home" className="home-btn">
                            Go Back Home
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotFoundPage;
