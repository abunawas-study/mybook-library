const GEMINI_API_KEY = "AIzaSyA6lB5I6OvFZmikTbzu9nHP8WS5t3BQ6TQ";
const BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

export const getAIRecommendation = async (userPrompt) => {
  try {
    const response = await fetch(`${BASE_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{ 
           text: `You are a friendly, expert librarian. The user is looking for a book and says: "${userPrompt}".
            
            Provide a warm librarian-style greeting (max 2 sentences) and suggest 3 specific real books.
            For each book, provide: 
            1. The Title
            2. A brief overview
            3. The specific reason you are recommending it based on their vibe.

            Return the response ONLY as a JSON object in this format:
            {
              "librarianNote": "Your warm greeting here...",
              "recommendations": [
                {"title": "Book Title 1", "overview": "...", "reason": "..."},
                {"title": "Book Title 2", "overview": "...", "reason": "..."},
                {"title": "Book Title 3", "overview": "...", "reason": "..."}
              ]
            }`
          }]
        }]
      })
    });

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("AI Service Error:", error);
    return null;
  }
};