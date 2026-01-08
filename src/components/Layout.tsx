import Navbar from "./Navbar";

function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Navbar />

            <div className="container text-center text-white" style={{ marginTop: '20vh' }}>
                {children}
            </div>
        </>
    )
}

export default Layout;