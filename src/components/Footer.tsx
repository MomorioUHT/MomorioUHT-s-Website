import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <>
            <footer className="bg-transparent text-secondary mt-5 py-4">
                <div className="container text-center">
                    <p className="mb-1">
                        © 2026 MomorioUHT
                    </p>

                    <div className="d-flex justify-content-center gap-3">
                        <a href="/home" className="text-secondary text-decoration-none">
                            Home
                        </a>
                        <a href="/tributes" className="text-secondary text-decoration-none">
                            Tributes
                        </a>
                        <a href="/contact" className="text-secondary text-decoration-none">
                            Contact
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;