import { useFavorites } from '../context/FavouriteContext';
import BookList from '../components/books/BookList';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavBar from '../components/layout/NavBar';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <>
      <NavBar />
    <main className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      <div className="flex items-center gap-3 mb-8">
        <Heart className="text-red-500 fill-red-500" size={32} />
        <h1 className="text-3xl font-bold text-gray-900">My Favorites</h1>
      </div>

      {favorites.length > 0 ? (
  
        <BookList books={favorites} />
      ) :
       (
        <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-gray-300">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-6">
            <Heart size={40} className="text-gray-300" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Your shelf is empty</h2>
          <p className="text-gray-500 mb-8">Start exploring and save books you love!</p>
          <Link 
            to="/" 
            className="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-700 transition-all"
          >
            Browse Books
          </Link>
        </div>
      )}
    </main>
    </>
  );
};

export default Favorites;