



// import express from 'express';
// import fetch from 'node-fetch';
// import dotenv from 'dotenv'; // Ensure you have dotenv installed to read the .env file

// dotenv.config();

// const router = express.Router();

// // Configuration using the details you provided
// const API_KEY = process.env.REACT_APP_OPENROUTER_KEY;
// const BASE_URL = "https://openrouter.ai/api/v1";
// const MODEL = "mistralai/mistral-7b-instruct:free";

// router.post('/ask', async (req, res) => {
//   const { message } = req.body;

//   if (!message) {
//     return res.status(400).json({ answer: "Message is required." });
//   }

//   try {
//     const response = await fetch(`${BASE_URL}/chat/completions`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${API_KEY}`,
//         // OpenRouter recommends these for their rankings/statistics (optional)
//         'HTTP-Referer': process.env.YOUR_SITE_URL || 'http://localhost:3000', 
//         'X-Title': 'My AI App', 
//       },
//       body: JSON.stringify({
//         model: MODEL,
//         messages: [
//           { role: "user", content: message }
//         ],
//         // You can add parameters like temperature, max_tokens, etc.
//         // max_tokens: 200, 
//       }),
//     });

//     const data = await response.json();

//     // Check if the external API returned an error
//     if (!response.ok) {
//         console.error("OpenRouter API Error:", data);
//         return res.status(500).json({ answer: "Error from AI provider." });
//     }

//     // Extract the answer based on OpenRouter/OpenAI response structure
//     const aiResponse = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";
    
//     res.json({ answer: aiResponse });

//   } catch (err) {
//     console.error("Server Error:", err);
//     res.status(500).json({ answer: "Internal server error." });
//   }
// });

// export default router;





import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const API_KEY = process.env.REACT_APP_OPENROUTER_KEY; // Make sure your .env uses this name
const BASE_URL = "https://openrouter.ai/api/v1";
const MODEL = "mistralai/mistral-7b-instruct:free";

// This is the "brain" of your AI Persona
const SYSTEM_PROMPT = `
You are a professional, friendly, and expert makeup artist and stylist for a platform called "Smart Beauty."
Your goal is to help users with skin tone, foundation shades, lipstick colors, face shapes, and hairstyles.

Guidelines for your responses:
1. FORMATTING: Use **Bullet Points** for steps. Use **Emojis** 💄✨ frequently to keep it fun!
2. TONE: Be warm, human-like, and professional. Avoid robotic language.
3. LENGTH: Keep answers short, concise, and to the point. No long essays.
4. GREETING: Always start with a brief, friendly greeting (e.g., "Hey gorgeous!", "Hello there!", "Hi!").
5. CONTEXT: You know about color theory, undertones, and face symmetry. 
6. SCENARIOS: If a user asks about night vs. day looks, give specific advice based on lighting.

Example interaction:
User: "What lipstick works for night?"
You: "Hey there! For a night out, go for bold, deep shades like ruby red or plum. They pop beautifully in dim lighting!"
Example Output:
"Hey gorgeous! 💖 Here is how to fix that:
• First, prep your skin 🧴
• Use a peach corrector for dark circles 🧡
• Set with powder ✨"
`;

router.post('/ask', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ answer: "Message is required." });
  }

  try {
    const response = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'HTTP-Referer': process.env.YOUR_SITE_URL || 'http://localhost:3000', 
        'X-Title': 'Smart Beauty App', 
      },
      body: JSON.stringify({
        model: MODEL,
        // HERE is where we inject the personality
        messages: [
          { role: "system", content: SYSTEM_PROMPT }, // The "Brain" instructions
          { role: "user", content: message }          // The user's actual question
        ],
        temperature: 0.7, // Adds a little creativity (0.0 is robotic, 1.0 is random)
        max_tokens: 150,  // Forces short answers
      }),
    });

    // ... inside router.post('/ask', ...)

    const data = await response.json();

    if (!response.ok) {
        console.error("OpenRouter API Error:", data);
        return res.status(500).json({ answer: "Error from AI provider." });
    }

    let aiResponse = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";

    // ✅ NEW & IMPROVED CLEANUP STEP
    // This removes <s>, </s>, [INST], [/INST], and standardizes newlines
    aiResponse = aiResponse
        .replace(/<\/?s>/g, "")          // Remove <s> and </s>
        .replace(/\[\/?INST\]/g, "")     // Remove [INST] and [/INST]
        .replace(/\[\/?s\]/g, "")        // Remove [s] and [/s] just in case
        .trim();                         // Remove extra whitespace at start/end

    res.json({ answer: aiResponse });

// ... rest of code

  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ answer: "Internal server error." });
  }
});

export default router;