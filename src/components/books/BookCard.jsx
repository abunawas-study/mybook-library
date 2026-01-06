import { useFavorites } from '../../context/FavoritesContext';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
  const title = book.title || "Unknown Title";
  const author = book.author_name ? book.author_name[0] : "Unknown Author";
  const description = book.first_sentence ? book.first_sentence[0] : "No description available.";
  const coverUrl = book.cover_i 
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` 
    : "/assets/placeholder.png";

  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = isFavorite(book.key);
  
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
      
      {/* Cover Image Container */}
      <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
        <img 
          src={coverUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />

        
        <button 
          onClick={() => toggleFavorite(book)}
          className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors z-10"
        >
          <Heart 
            size={20} 
            fill={favorited ? "#ef4444" : "none"} 
            className={favorited ? "text-red-500" : "text-gray-400 hover:text-red-500"} 
          />
        </button>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">{title}</h3>
        <p className="text-purple-600 font-medium text-sm mb-3">{author}</p>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6 flex-grow">
          {description}
        </p>
        
        <button 
          onClick={() => navigate(`/book/${book.isbn ? book.isbn[0] : book.edition_key?.[0]}`)}
          className="w-full py-3.5 border-2 border-purple-600 text-purple-600 font-bold rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-200"
        >
          More Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;