import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {books.map((book) => (
        <BookCard 
          key={book.key}
          title={book.title}
          author={book.author_name?.[0]}
          description={book.first_sentence?.[0] || book.public_scan_b ? "Preview available" : ""} 
          coverUrl={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null}
        />
      ))}
    </div>
  );
};

export default BookList;