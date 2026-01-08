import { useState } from "react";
import { SearchBooks } from "../utils/api";

export const useFetchBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBooks = async (query, type = 'title') => {
        try {
            setLoading(true);
            setError(null);
            

            const result = await SearchBooks(query, type);

            if (!result || result.length === 0) {
                setError('No books found for your search');
                setBooks([]);
            } else {
                setBooks(result); 
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