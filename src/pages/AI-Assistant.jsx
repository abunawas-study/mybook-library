import { useState } from "react";
const AI_Assistant = () => {
  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState(null); // To store librarianNote and recs
  const [isAiProcessing, setIsAiProcessing] = useState(false);

  const handleAiConsult = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setIsAiProcessing(true);
    setAiResponse(null); // Clear old results
    
    const result = await getAIRecommendation(userInput);
    setAiResponse(result);
    setIsAiProcessing(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

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
                  
                  <button 
                    onClick={() => navigate(`/search?query=${rec.title}`)}
                    className="self-center bg-purple-600 text-white px-6 py-3 rounded-xl font-bold whitespace-nowrap"
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
  );
};
export default AI_Assistant;