import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import NotFoundPage from "./pages/extras/NotFoundPage";

import HomePage from "./pages/HomePage";
import TributesPage from "./pages/TributesPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "undefined";
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <BrowserRouter>
                <Routes>
                    {/* Helper Routes */}
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="*" element={<NotFoundPage />} />

                    <Route path="/home" element={<HomePage />}/>
                    <Route path="/tributes" element={<TributesPage />}/>
                    <Route path="/projects" element={<ProjectPage />}/>
                </Routes>
            </BrowserRouter>
        </GoogleOAuthProvider>
    )
}

export default App;