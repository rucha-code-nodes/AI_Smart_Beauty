// import React, { useState, useRef, useEffect } from 'react';
// import './ChatSection.css';

// const ChatSection = () => {
//    useEffect(() => { console.log('ChatSection mounted'); }, []);
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: "Hello! I'm your AI stylist. Send your recommended suggestions and I'll help you discover your perfect style!",
//       isUser: false,
//       timestamp: new Date()
//     }
//   ]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

// const handleSendMessage = async (e) => {
//   e.preventDefault();
//   if (!inputMessage.trim()) return;

//   const userMessage = {
//     id: messages.length + 1,
//     text: inputMessage,
//     isUser: true,
//     timestamp: new Date()
//   };
//   setMessages(prev => [...prev, userMessage]);
//   setInputMessage('');
//   setIsTyping(true);

//   try {
//     const res = await fetch('http://localhost:5000/api/ai/ask', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ message: userMessage.text })
//     });
//     const data = await res.json();

//     const aiMessage = {
//       id: messages.length + 2,
//       text: data.answer,
//       isUser: false,
//       timestamp: new Date()
//     };
//     setMessages(prev => [...prev, aiMessage]);

//   } catch (err) {
//     console.error(err);
//     setMessages(prev => [...prev, {
//       id: messages.length + 2,
//       text: "Sorry, I couldn't get a response.",
//       isUser: false,
//       timestamp: new Date()
//     }]);
//   } finally {
//     setIsTyping(false);
//   }
// };


//   const handleQuickQuestion = (question) => {
//     setInputMessage(question);
//   };

//   const formatTime = (date) => {
//     return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   };

//   return (
//     <section id="chat" className="section chat-section">
//       <div className="container">
//         <h2 className="section-heading">Chat with Your AI Stylist</h2>
//         <p className="section-subheading">Get personalized style advice and recommendations in real-time</p>
        
//         <div className="chat-container">
//           <div className="chat-header">
//             <div className="chat-bot-avatar">
//               <i className="fas fa-robot"></i>
//             </div>
//             <div className="chat-bot-info">
//               <h3>AI Stylist</h3>
//               <span className="status online">Online</span>
//             </div>
//           </div>
          
//           <div className="chat-messages">
//             {messages.map((message) => (
//               <div
//                 key={message.id}
//                 className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
//               >
//                 <div className="message-content">
//                   <p>{message.text}</p>
//                   <span className="message-time">
//                     {formatTime(message.timestamp)}
//                   </span>
//                 </div>
//               </div>
//             ))}
            
//             {isTyping && (
//               <div className="message bot-message">
//                 <div className="message-content">
//                   <div className="typing-indicator">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                   </div>
//                 </div>
//               </div>
//             )}
            
//             <div ref={messagesEndRef} />
//           </div>
          
//           <div className="quick-questions">
//             <p>Quick questions:</p>
//             <div className="question-buttons">
//               {[
//                 "What makeup suits my skin tone?",
//                 "Best hairstyle for my face shape?",
//                 "Color clothing recommendations?",
//                 "How to do my eyebrows?"
//               ].map((question, index) => (
//                 <button
//                   key={index}
//                   className="question-btn"
//                   onClick={() => handleQuickQuestion(question)}
//                 >
//                   {question}
//                 </button>
//               ))}
//             </div>
//           </div>
          
//           <form className="chat-input-form" onSubmit={handleSendMessage}>
//             <div className="input-container">
//               <input
//                 type="text"
//                 value={inputMessage}
//                 onChange={(e) => setInputMessage(e.target.value)}
//                 placeholder="Ask about makeup, hair, fashion..."
//                 className="chat-input"
//               />
//               <button type="submit" className="send-btn">
//                 <i className="fas fa-paper-plane"></i>
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ChatSection;




import React, { useState, useRef, useEffect } from 'react';
import './ChatSection.css';

const ChatSection = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI stylist. Send your recommended suggestions and I'll help you discover your perfect style! 💄✨",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false); // New State for Mic
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // --- NEW MICROPHONE FUNCTION ---
  const handleVoiceInput = () => {
    // Check if browser supports speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support voice input. Please use Chrome or Edge.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputMessage(transcript); // Puts the spoken text into the input box
    };

    recognition.start();
  };
  // -------------------------------

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      // Ensure this URL matches your Server + Route config
      const res = await fetch('http://localhost:5000/api/ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text })
      });
      const data = await res.json();

      const aiMessage = {
        id: messages.length + 2,
        text: data.answer,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);

    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, {
        id: messages.length + 2,
        text: "Sorry, I couldn't get a response.",
        isUser: false,
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section id="chat" className="section chat-section">
      <div className="container">
        <h2 className="section-heading">Chat with Your AI Stylist</h2>
        <p className="section-subheading">Get personalized style advice in real-time</p>
        
        <div className="chat-container">
          <div className="chat-header">
            <div className="chat-bot-avatar">
              <i className="fas fa-robot"></i>
            </div>
            <div className="chat-bot-info">
              <h3>AI Stylist</h3>
              <span className="status online">Online</span>
            </div>
          </div>
          
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
              >
                <div className="message-content">
                  {/* Note: To render bullet points correctly, we just display the text. 
                      If you want strict HTML formatting, you'd need a markdown parser, 
                      but text works fine for simple bullets. */}
                  <p style={{ whiteSpace: 'pre-wrap' }}>{message.text}</p>
                  <span className="message-time">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot-message">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="quick-questions">
            <p>Quick questions:</p>
            <div className="question-buttons">
              {["What makeup suits my skin tone?", "Best hairstyle for my face shape?", "Color clothing recommendations?", "How to do my eyebrows?"].map((question, index) => (
                <button key={index} className="question-btn" onClick={() => handleQuickQuestion(question)}>
                  {question}
                </button>
              ))}
            </div>
          </div>
          
          <form className="chat-input-form" onSubmit={handleSendMessage}>
            <div className="input-container">
              
              {/* --- MICROPHONE BUTTON ADDED HERE --- */}
              <button 
                type="button" 
                className={`mic-btn ${isListening ? 'listening' : ''}`} 
                onClick={handleVoiceInput}
                title="Speak"
              >
                <i className={`fas ${isListening ? 'fa-spinner fa-spin' : 'fa-microphone'}`}></i>
              </button>
              {/* ------------------------------------ */}

              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={isListening ? "Listening..." : "Ask about makeup, hair, fashion..."}
                className="chat-input"
              />
              <button type="submit" className="send-btn">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;