import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookDetailsByISBN } from '../utils/api';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { ArrowLeft, BookOpen } from 'lucide-react';

const BookDetails = () => {
  const { id } = useParams(); // Grabs the ISBN/ID from the URL
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const data = await getBookDetailsByISBN(id);
        setBook(data);
      } catch (err) {
        console.error("Error loading details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!book) return <div className="text-center py-20">Book details not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-purple-600 mb-8 hover:underline"
      >
        <ArrowLeft size={20} /> Back to Results
      </button>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Book Cover */}
        <div className="shadow-2xl rounded-2xl overflow-hidden">
          <img 
            src={book.cover?.large || book.cover?.medium || "https://via.placeholder.com/400x600"} 
            alt={book.title}
            className="w-full h-auto"
          />
        </div>

        {/* Book Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{book.title}</h1>
          <p className="text-xl text-purple-600 mb-6">By {book.authors?.map(a => a.name).join(', ')}</p>
          
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <h3 className="font-bold text-gray-900 text-lg">Description</h3>
            <p>{book.notes || "No detailed description available for this edition."}</p>
            
            <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="block font-bold text-gray-900">Publish Date</span>
                <span>{book.publish_date || "N/A"}</span>
              </div>
              <div>
                <span className="block font-bold text-gray-900">Pages</span>
                <span>{book.number_of_pages || "N/A"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;