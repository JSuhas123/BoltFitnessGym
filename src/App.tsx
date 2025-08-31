import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';
import Trainers from './pages/Trainers';

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin-nutrition-data-management';

  return (
    <div className="min-h-screen bg-black text-white">
      {!isAdminRoute && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/admin-nutrition-data-management" element={<AdminPanel />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;