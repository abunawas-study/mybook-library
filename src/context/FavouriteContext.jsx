import React, { createContext, useState, useEffect, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('my_book_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('my_book_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (book) => {
    setFavorites((prev) => {
      const isExist = prev.find((item) => item.key === book.key);
      if (isExist) {
        return prev.filter((item) => item.key !== book.key); // Remove
      }
      return [...prev, book]; 
    });
  };

  const isFavorite = (bookKey) => favorites.some((item) => item.key === bookKey);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);