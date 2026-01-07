import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Favourites from './pages/Favourites';
import AI_Assistant from './pages/AI_Assistant';
import Navbar from './components/layout/NavBar';
import { FavoritesProvider } from './context/FavouriteContext';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:isbn" element={<BookDetails />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/ai-assistant" element={<AI_Assistant />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};
export default App;
