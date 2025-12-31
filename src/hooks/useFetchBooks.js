import { useState } from "react";
import {SearchBooks} from "../utils/api";

export const userFetchBooks = () =>{
    const [books, setBooks] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBooks = async (query, type = 'title') =>{
        // Reset state before new fetch
        setLoading(true);
        setError(null);

        try{
            const data = await SearchBooks(query, type);
            // Handle cases where no results are found
            if(!result || result.length === 0){
                setError('No books found for your search');
                setBooks([]);
            }
            else{
            setBooks(result);
           }
        } 
        catch (error){
        setError('Something went wrong with your network');
        }
        finally{
        setLoading(false);
       }
   };
    return {books, Loading, error, fetchBooks};
};
export default userFetchBooks;