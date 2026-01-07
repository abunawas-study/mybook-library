import React from "react";
const BookDetails = () => {
    // Fetch book data based on some identifier (e.g., ISBN or ID)
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Back Button */}
      <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 mb-8 transition-colors">
        ← Back to Search
      </button>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left: Large Cover */}
        <div className="md:col-span-4">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={coverUrl} alt={title} className="w-full h-auto" />
          </div>
        </div>

        {/* Right: Detailed Info */}
        <div className="md:col-span-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{book.title}</h1>
          <p className="text-xl text-purple-600 font-medium mb-6">{book.authors?.map(a => a.name).join(", ")}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {/* Map through book.subjects to show genre tags */}
            {book.subjects?.slice(0, 5).map(subject => (
              <span key={subject.name} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                {subject.name}
              </span>
            ))}
          </div>

          <div className="prose prose-purple max-w-none mb-8">
            <h3 className="text-lg font-bold">About this book</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Technical Metadata Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-gray-100 mb-8">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Pages</p>
              <p className="font-bold">{book.number_of_pages || "N/A"}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Published</p>
              <p className="font-bold">{book.publish_date || "N/A"}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider">ISBN-10</p>
              <p className="font-bold">{isbn}</p>
            </div>
          </div>

          <button className="bg-purple-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-purple-700 shadow-lg shadow-purple-200 transition-all">
            Add to Favourites
          </button>
        </div>
      </div>
    </div>
  );
};
export default BookDetails;