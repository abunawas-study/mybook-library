import React, { useState } from 'react';
import { Sparkles, Send, Library } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Added this import
import { getAIRecommendation } from '../utils/aiService';
import BookList from '../components/books/BookList'; // Kept for safety
import NavBar from '../components/layout/NavBar';

const AI_Assistant = () => {
  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState(null); 
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const navigate = useNavigate(); // Define the hook here

  const handleKeyDown = (e) => {
  // Check if Enter was pressed WITHOUT the Shift key
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault(); // Prevents a new line from being added
    handleAiConsult(e); // Triggers your submit function
  }
};

  const handleAiConsult = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setIsAiProcessing(true);
    setAiResponse(null); 
    
    // Call the AI Service
    const result = await getAIRecommendation(userInput);
    
    // Safety check: if AI fails, result might be null
    if (result) {
      setAiResponse(result);
    }
    
    setIsAiProcessing(false);
  };

  return (
    <>
      <NavBar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 1. Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-2xl mb-4">
            <h1 className='text-4xl font-bold text-black-900 mb-4'>COMING SOON</h1>
            <Sparkles className="text-purple-600" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Book Librarian</h1>
          
          <p className="text-gray-600 max-w-xl mx-auto">
            Tell me what you're in the mood for, and I'll explain exactly why you should read these books.
          </p>
        </div>

        {/* 2. Input Form (The missing piece!) */}
        <form onSubmit={handleAiConsult} className="max-w-2xl mx-auto mb-16">
          <div className="relative group">
           <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown} // <--- Add this line here
              placeholder="e.g., 'I want a sci-fi book about space politics...'"
              className="w-full p-6 bg-white border-2 border-purple-100 rounded-3xl shadow-sm focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all h-40 text-lg resize-none"
            />
            <button
              type="submit"
              disabled={isAiProcessing || !userInput}
              className="absolute bottom-4 right-4 bg-purple-600 text-white p-4 rounded-2xl hover:bg-purple-700 disabled:bg-gray-300 transition-all shadow-lg active:scale-95"
            >
              {isAiProcessing ? (
                <div className="animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                <Send size={24} />
              )}
            </button>
          </div>
        </form>

        {/* 3. AI Results Section */}
        {aiResponse && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Librarian's Voice */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-2xl mb-10">
              <p className="text-purple-900 italic text-lg font-medium">
                "{aiResponse.librarianNote}"
              </p>
            </div>

            {/* Recommended Books Grid */}
            <div className="grid gap-8">
              {aiResponse.recommendations.map((rec, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{rec.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{rec.overview}</p>
                      
                      <div className="bg-green-50 text-green-800 p-4 rounded-xl text-sm">
                        <strong>Why I chose this for you:</strong> {rec.reason}
                      </div>
                    </div>
                    
                    {/* Corrected Navigation Logic */}
                    <button 
                      onClick={() => {
                          // This assumes you want to search for the title on your home page
                          // Or you can navigate to a specific book page if you had an ID
                           navigate(`/?search=${encodeURIComponent(rec.title)}`) 
                      }}
                      className="self-center bg-purple-600 text-white px-6 py-3 rounded-xl font-bold whitespace-nowrap hover:bg-purple-700 transition-colors"
                    >
                      Find in Library
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AI_Assistant;