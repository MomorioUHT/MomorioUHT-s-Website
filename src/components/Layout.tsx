import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Navbar />

            <div className="container text-center text-white" style={{ marginTop: '10vh' }}>
                {children}
            </div>

            <Footer />
        </>
    )
}

export default Layout;