import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardsPage from './pages/CardsPage';
import PacksPage from './pages/PacksPage';
import YourDeckPage from './pages/YourDeckPage';
import AddCardPage from './pages/AddCardPage';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="App-Content">
          <Menu />
          <Routes>
            <Route path="/" element={<CardsPage />} />
            <Route path="/packs" element={<PacksPage />} />
            <Route path="/your-deck" element={<YourDeckPage />} />
            <Route path="/add-card" element={<AddCardPage />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
