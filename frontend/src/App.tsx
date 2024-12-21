import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardsPage from './pages/CardsPage';
import PacksPage from './pages/PacksPage';
import YourDeckPage from './pages/YourDeckPage';
import AddCardPage from './pages/AddCardPage';
import Menu from './components/Menu';

const App: React.FC = () => {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<CardsPage />} />
                <Route path="/packs" element={<PacksPage />} />
                <Route path="/your-deck" element={<YourDeckPage />} />
                <Route path="/add-card" element={<AddCardPage />} />
            </Routes>
        </Router>
    );
};

export default App;
