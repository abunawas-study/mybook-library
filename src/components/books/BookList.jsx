import BookCard from './BookCard';

const BookList = ({ books }) => {
  if (!books || books.length === 0) return null;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {books.map((book) => (
        <BookCard 
          key={book.key}
          book={book} />
      ))}
    </div>
  );
};

export default BookList;