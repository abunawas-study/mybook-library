const API_BASE_URL = 'https://openlibrary.org';

export const SearchBooks = async (query, type = 'title') => {
    try{
        const response = await fetch(`${API_BASE_URL}/search.json?${type}=${encodeURIComponent(query)}`);
        if(!response.ok){
            throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        return data.docs;
    }
    catch(error){
        console.error('Error searching books:', error);
        return [];
    }
};

export const getBookDetailsByISBN = async (isbn) => {
    const response = await fetch(`${BASE_URL}/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
    const data = await response.json();
    return data[`ISBN:${isbn}`];
};

export const coverURL = (coverId, size = 'L') =>{
    return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
};
