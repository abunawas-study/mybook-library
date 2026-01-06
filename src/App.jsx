import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Favorites from './pages/Favorites';
import AI_Assistant from './pages/AI_Assistant';
import Navbar from './components/layout/NavBar';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:isbn" element={<BookDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/ai-assistant" element={<AI_Assistant />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};
export default App;
