import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import NotFoundPage from "./pages/extras/NotFoundPage";

import HomePage from "./pages/HomePage";
import TributesPage from "./pages/TributesPage";
import ProjectPage from "./pages/ProjectPage";
import FanartsPage from "./pages/FanartsPage";
import UploadPage from "./pages/UploadPage";
import PostPage from "./pages/PostPage";

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
                    <Route path="/fanarts" element={<FanartsPage />}/>
                    <Route path="/upload" element={<UploadPage />}/>
                    <Route path="/post/:postId" element={<PostPage />}/>
                </Routes>
            </BrowserRouter>
        </GoogleOAuthProvider>
    )
}

export default App;