import { useState } from "react";
import { SearchBooks } from "../utils/api";

// Changed name to 'useFetchBooks' (standard React naming)
export const useFetchBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false); // Lowercase 'l' for consistency
    const [error, setError] = useState(null);

    const fetchBooks = async (query, type = 'title') => {
        try {
            setLoading(true);
            setError(null);
            
            const data = await SearchBooks(query, type);
            
            // FIX: Check 'data' (the variable you actually created)
            // Open Library returns results in a 'docs' array
            const resultsArray = data.docs || data; 

            if (!resultsArray || resultsArray.length === 0) {
                setError('No books found for your search');
                setBooks([]);
            } else {
                setBooks(resultsArray);
            }
        } 
        catch (error) {
            console.error("Fetch error:", error);
            setError('Something went wrong with your network');
        }
        finally {
            setLoading(false);
        }
    };

    return { books, loading, error, fetchBooks };
};

export default useFetchBooks;