import { useState} from 'react';
import { useCallback } from 'react';
import NavBar from '../components/layout/NavBar';
import SearchBar from '../components/layout/SearchBar';
import BookList from '../components/books/BookList';
import useFetchBooks from '../hooks/useFetchBooks';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Home = () => {
  const [query, setQuery] = useState("");
  const { books, loading, error, fetchBooks } = useFetchBooks();

  const handleSearch = useCallback((searchTerm) => {
    const searchVal = searchTerm || query;
    if (searchVal.trim().length > 2) { //
      fetchBooks(searchVal);
    }
  }, [query, fetchBooks]); 

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Navigation Bar Component */}
      <NavBar />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Discover Your Next Great Read</h1>
          <p className="text-gray-500 text-lg">Explore thousands of books from our curated collection</p>
        </div>

        {/* 2. Search Bar Component */}
    <SearchBar value={query} onChange={setQuery} onSearch={handleSearch} />
       

        {/* 3. Conditional Rendering: Handing the API states */}
      {loading && books.length === 0 && (
  <div className="flex justify-center py-12">
    <LoadingSpinner />
  </div>
)}

{error && (
  <div className="text-center py-12">
    <p className="text-red-500 font-medium">{error}</p>
  </div>
)}

{/* 4. Book Grid: Show books if we have them, regardless of loading state */}
{books.length > 0 && (
  <div className={loading ? "opacity-50 transition-opacity" : "opacity-100"}>
    <BookList books={books} />
  </div>
)}

{/* Helper: Show welcome message only if not loading and no books found yet */}
{!loading && books.length === 0 && !error && (
  <div className="text-center py-12 text-gray-400">
    Enter a title or author above to start your search.
  </div>
)}
      </main>
    </div>
  );
};

export default Home;