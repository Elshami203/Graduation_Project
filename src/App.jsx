import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import TranslatePage from "./components/TranslatePage";
import AboutUsPage from "./components/AboutUsPage.jsx";
import BrowseBooks from './components/BrowseBooks'


const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/translate" element={<TranslatePage />} />
                        <Route path="/about" element={<AboutUsPage />} />
                        <Route path="/browse" element={<BrowseBooks />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
