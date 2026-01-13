const GEMINI_API_KEY = "AIzaSyA6lB5I6OvFZmikTbzu9nHP8WS5t3BQ6TQ";
const MODEL = "gemini-1.5-flash"; 
const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

export const getAIRecommendation = async (userPrompt) => {
    console.log("Attempting to fetch from:", `${BASE_URL}?key=${GEMINI_API_KEY}`);
  try {
    const response = await fetch(`${BASE_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{ 
            text: `You are a friendly expert librarian. User says: "${userPrompt}". 
            Return ONLY a JSON object: 
            {
              "librarianNote": "greeting",
              "recommendations": [{"title": "...", "overview": "...", "reason": "..."}]
            }` 
          }]
        }]
      })
    });

    if (!response.ok) throw new Error(`API Status: ${response.status}`);

    const data = await response.json();

    // SAFETY CHECK: Use ?. to prevent "reading property 0 of undefined"
    const rawContent = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawContent) {
      console.error("Gemini returned an empty response");
      return null;
    }

    // Clean the string (sometimes AI wraps JSON in ```json ... ``` blocks)
    const cleanJson = rawContent.replace(/```json|```/g, "").trim();
    
    return JSON.parse(cleanJson);
    console.log("Full API Response:", data);

  } catch (error) {
    console.error("AI Service Error:", error);
  // Emergency Mock Response if API fails
   return {
     librarianNote: "Welcome! I've hand-picked a few titles that match your request.",
     recommendations: [
       { title: "The Great Gatsby", overview: "A story of wealth and love.", reason: "Matches your classic vibe." }
     ]
   };
  }

};