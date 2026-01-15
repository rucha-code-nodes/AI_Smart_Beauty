

// import { useAuth } from '../../context/AuthContext';
// import './UploadSection.css';
// import React, { useState, useEffect } from 'react';

// const UploadSection = () => {
//   useEffect(() => { console.log('Upload mounted'); }, []);

//   const [analysisComplete, setAnalysisComplete] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const { saveLook } = useAuth();
//   const [faceShape, setFaceShape] = useState("");
//   const [skinTone, setSkinTone] = useState("");
//   const [recommendations, setRecommendations] = useState({});

//   const handleFileUpload = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       // Changed port to 5000 as per your previous context, ensure this matches your backend
//       const res = await fetch("http://127.0.0.1:5000/analyze/", {
//         method: "POST",
//         body: formData,
//       });

//       if (!res.ok) {
//         const text = await res.text();
//         console.error("Server error:", text);
//         return;
//       }

//       const data = await res.json();
//       console.log("AI Response:", data);

//       setFaceShape(data.face_shape || "Unknown");
//       setSkinTone(data.skin_tone || "Unknown");
//       setRecommendations(data.recommendations || {
//         foundation: "N/A",
//         clothing: [],
//         hairstyle: "Detecting...",
//         lipstick: "Detecting..."
//       });

//       setAnalysisComplete(true);
//     } catch (err) {
//       console.error("Fetch failed:", err);
//     }
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option === selectedOption ? null : option); // Toggle effect
//   };

//   const handleSaveLook = () => {
//     const look = {
//       title: "AI Recommended Look",
//       foundation: recommendations.foundation,
//       lipstick: "Coral pink with golden shimmer", // Example static or dynamic
//       hairstyle: recommendations.hairstyle,
//       colors: recommendations.clothing
//     };
//     saveLook(look);
//     alert('✨ Look saved to your profile!');
//   };

//   // const renderOptionResult = () => {
//   //   const options = {
//   //     hair: {
//   //       title: "Hairstyle & Partition",
//   //       content: (
//   //         <div className="detail-content">
//   //            <div className="gender-block">
//   //               <span className="gender-badge female">She</span>
//   //               <div dangerouslySetInnerHTML={{ __html: recommendations?.hairstyleFemale }} />
//   //            </div>
//   //            <div className="gender-block">
//   //               <span className="gender-badge male">He</span>
//   //               <div dangerouslySetInnerHTML={{ __html: recommendations?.hairstyleMale }} />
//   //            </div>
//   //         </div>
//   //       )
//   //     },
//   //     clothing: {
//   //       title: "Your Color Season",
//   //       content: (
//   //         <div className="detail-content">
//   //           <p>Based on your undertone, these colors will make you glow:</p>
//   //           <div className="palette-grid">
//   //             {(recommendations?.clothing || []).map((color, index) => (
//   //               <div key={index} className="palette-item">
//   //                 <div className="palette-circle" style={{ backgroundColor: color }}></div>
//   //                 <span>{color}</span>
//   //               </div>
//   //             ))}
//   //           </div>
//   //         </div>
//   //       )
//   //     },
//   //     foundation: {
//   //       title: "Perfect Match Foundation",
//   //       content: (
//   //         <div className="detail-content centered">
//   //            <div className="foundation-bottle">
//   //               <div className="liquid" style={{ background: '#e0ac69' }}></div> {/* Dynamic color if possible */}
//   //            </div>
//   //            <p className="highlight-text">{recommendations?.foundation || "N/A"}</p>
//   //         </div>
//   //       )
//   //     },
//   //     lipstick: {
//   //       title: "Lip Shade Suggestions",
//   //       content: (
//   //         <div className="detail-content">
//   //            <div className="gender-block">
//   //               <span className="gender-badge female">She</span>
//   //               <div dangerouslySetInnerHTML={{ __html: recommendations?.lipstickFemale }} />
//   //            </div>
//   //            <div className="gender-block">
//   //               <span className="gender-badge male">He</span>
//   //               <div dangerouslySetInnerHTML={{ __html: recommendations?.lipstickMale }} />
//   //            </div>
//   //         </div>
//   //       )
//   //     }
//   //   };

//   //   if (!selectedOption) return null;
//   //   const option = options[selectedOption];
    
//   //   return (
//   //     <div className="option-detail-card fade-in">
//   //       <div className="detail-header">
//   //          <h3>{option.title}</h3>
//   //          <button className="close-btn" onClick={() => setSelectedOption(null)}>×</button>
//   //       </div>
//   //       {option.content}
//   //     </div>
//   //   );
//   // };

// const getColorHex = (colorName) => {
//   if (!colorName) return '#ccc'; // Default grey
  
//   const name = colorName.toLowerCase();

//   // 🎨 Color Mapping Dictionary
//   const colors = {
//     // Foundation / Skin
//     'ivory': '#FFE5D9',
//     'porcelain': '#FFF0E5',
//     'warm beige': '#E3C6AA',
//     'honey': '#D2B48C',
//     'mocha': '#966F4F',
//     'cocoa': '#5D4037',
//     'natural beige': '#E8D4BE',

//     // Lipsticks
//     'soft pinks': '#FFB7B2',
//     'corals': '#FF7F50',
//     'rosy nudes': '#BC8F8F',
//     'berry': '#880044',
//     'mauve': '#E0B0FF',
//     'rosewood': '#A0522D',
//     'plum': '#DDA0DD',
//     'brick red': '#CB4154',
//     'burgundy': '#800020',
//     'deep brown': '#4B3621',
//     'light nude': '#F5F5DC',

//     // Clothing
//     'baby blue': '#89CFF0',
//     'pastel pink': '#FFD1DC',
//     'mint': '#98FF98',
//     'lavender': '#E6E6FA',
//     'olive green': '#808000',
//     'navy': '#000080',
//     'maroon': '#800000',
//     'mustard': '#FFDB58',
//     'royal blue': '#4169E1',
//     'gold': '#FFD700',
//     'white': '#FFFFFF',
//     'red': '#FF0000'
//   };

//   // 1. Check direct match
//   if (colors[name]) return colors[name];

//   // 2. Keyword matching (e.g. "Soft pink" -> matches "pink")
//   if (name.includes('pink')) return '#FFC0CB';
//   if (name.includes('blue')) return '#4169E1';
//   if (name.includes('green')) return '#008000';
//   if (name.includes('brown')) return '#A52A2A';
//   if (name.includes('red')) return '#FF0000';
//   if (name.includes('beige')) return '#F5F5DC';

//   // 3. Fallback: Return the name itself (CSS might recognize it)
//   return colorName;
// };

//   const renderOptionResult = () => {
//     const options = {
//       hair: {
//         title: "Hairstyle & Partition",
//         content: (
//           <div className="detail-content">
//              <div className="gender-block">
//                 <span className="gender-badge female">She</span>
//                 <div dangerouslySetInnerHTML={{ __html: recommendations?.hairstyleFemale }} />
//              </div>
//              <div className="gender-block">
//                 <span className="gender-badge male">He</span>
//                 <div dangerouslySetInnerHTML={{ __html: recommendations?.hairstyleMale }} />
//              </div>
//           </div>
//         )
//       },
//       clothing: {
//         title: "Your Color Season",
//         content: (
//           <div className="detail-content">
//             <p style={{textAlign: 'center', marginBottom: '15px'}}>Colors that make you glow:</p>
//             <div className="palette-grid">
//               {(recommendations?.clothing || []).map((color, index) => (
//                 <div key={index} className="palette-item">
//                   {/* The Circle */}
//                   <div className="color-circle" style={{ backgroundColor: color }}></div>
//                   <span>{color}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )
//       },
//       foundation: {
//         title: "Perfect Match Foundation",
//         content: (
//           <div className="detail-content centered">
//              {/* Large Circle for Foundation */}
//              <div className="color-circle large" style={{ backgroundColor: recommendations?.foundation }}></div>
//              <p className="highlight-text">{recommendations?.foundation || "N/A"}</p>
//           </div>
//         )
//       },
//       lipstick: {
//         title: "Lip Shade Suggestions",
//         content: (
//           <div className="detail-content">
//              <div className="gender-block">
//                 <span className="gender-badge female">She</span>
//                 <div className="palette-item centered">
//                     {/* Circle for Lipstick */}
//                     {/* Note: This assumes the API returns a color name/hex. If it returns a long sentence, the color won't show. */}
//                     <div className="color-circle" style={{ backgroundColor: recommendations?.lipstickFemale?.replace(/<[^>]*>?/gm, '') }}></div>
//                     <div dangerouslySetInnerHTML={{ __html: recommendations?.lipstickFemale }} />
//                 </div>
//              </div>
//           </div>
//         )
//       }
//     };

//     if (!selectedOption) return null;
//     const option = options[selectedOption];
    
//     return (
//       <div className="option-detail-card fade-in">
//         <div className="detail-header">
//            <h3>{option.title}</h3>
//            <button className="close-btn" onClick={() => setSelectedOption(null)}>×</button>
//         </div>
//         {option.content}
//       </div>
//     );
//   };

  
//   return (
//     <section id="upload" className="section modern-upload">
//       <div className="container">
//         <div className="header-center">
//           <h2 className="section-heading">Beauty AI Profile</h2>
//           <p className="section-subheading">Upload a selfie to unlock your personalized beauty passport.</p>
//         </div>

//         <div className="upload-wrapper">
//           {/* File Input */}
//           <input 
//             type="file" 
//             id="fileInput" 
//             style={{ display: 'none' }} 
//             accept="image/*"
//             onChange={handleFileUpload}
//           />

//           {!analysisComplete ? (
//             <div className="upload-glass-card" onClick={() => document.getElementById('fileInput').click()}>
//               <div className="upload-circle">
//                 <i className="fas fa-camera"></i>
//               </div>
//               <h3>Tap to Upload Photo</h3>
//               <p>For best results, use natural lighting and no filters.</p>
//             </div>
//           ) : (
//             // ANALYSIS RESULTS
//             <div className="results-container fade-in">
              
//               {/* Top Stats Bar */}
//               <div className="beauty-stats-bar">
//                 <div className="stat-item">
//                   <span className="stat-label">Face Shape</span>
//                   <span className="stat-value">{faceShape}</span>
//                 </div>
//                 <div className="divider"></div>
//                 <div className="stat-item">
//                   <span className="stat-label">Skin Undertone</span>
//                   <span className="stat-value">{skinTone}</span>
//                 </div>
//                 <div className="divider"></div>
//                 <div className="stat-item">
//                   <span className="stat-label">Lighting</span>
//                   <span className="stat-value">Natural Day</span>
//                 </div>
//               </div>

//               <div className="main-content-split">
                
//                 {/* Left: Quick Actions */}
//                 <div className="category-sidebar">
//                   {['foundation', 'clothing', 'hair', 'lipstick'].map(opt => (
//                     <div 
//                       key={opt}
//                       className={`cat-btn ${selectedOption === opt ? 'active' : ''}`}
//                       onClick={() => handleOptionClick(opt)}
//                     >
//                       <div className="cat-icon">
//                         {opt === 'foundation' && <i className="fas fa-magic"></i>}
//                         {opt === 'clothing' && <i className="fas fa-tshirt"></i>}
//                         {opt === 'hair' && <i className="fas fa-cut"></i>}
//                         {opt === 'lipstick' && <i className="fas fa-kiss-wink-heart"></i>}
//                       </div>
//                       <span>{opt.charAt(0).toUpperCase() + opt.slice(1)}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Right: Dynamic Content Area */}
//                 <div className="dynamic-display-area">
//                   {selectedOption ? (
//                     renderOptionResult()
//                   ) : (
//                     <div className="default-look-card">
//                        <h3 className="glam-title">✨ Your Signature Look</h3>
                       
//                        <div className="look-summary-list">
//                           <div className="summary-row">
//                              <span className="lbl">Foundation</span>
//                              <span className="val">{recommendations.foundation}</span>
//                           </div>
//                           <div className="summary-row">
//                              <span className="lbl">Best Colors</span>
//                              <div className="mini-palette">
//                                 {(recommendations.clothing || []).slice(0, 4).map((c, i) => (
//                                    <div key={i} className="dot" style={{backgroundColor: c}}></div>
//                                 ))}
//                              </div>
//                           </div>
//                        </div>

//                        <button className="btn btn-primary save-btn" onClick={handleSaveLook}>
//                          <i className="fas fa-heart"></i> Save to Profile
//                        </button>
//                     </div>
//                   )}
//                 </div>
//               </div>

//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UploadSection;





import { useAuth } from '../../context/AuthContext';
import './UploadSection.css';
import React, { useState, useEffect } from 'react';

// --- 1. HELPER: Get Hex Color (PROFESSIONAL EDITION) ---
const getColorHex = (colorName) => {
  if (!colorName) return '#ccc';
  const name = colorName.toLowerCase().trim();

  // 🎨 EXPANDED Color Mapping for Professional Terms
  const colors = {
    // --- FOUNDATION SHADES ---
    'porcelain': '#FDF6E3',
    'ivory': '#FFFFF0',
    'rose beige': '#E2C6B8',
    'natural beige': '#E8D4BE',
    'honey': '#D2B48C',
    'golden sand': '#E3C18B',
    'espresso': '#4B3621',
    'chestnut': '#954535',
    'mocha': '#966F4F',
    'cool beige': '#D9C6B6',
    'warm beige': '#E3C6AA',

    // --- LIPSTICK (FEMALE) ---
    'dusty rose': '#DCAE96',
    'peachy coral': '#F88379',
    'soft nude': '#E6CBA8',
    'nude pink': '#F2D3BC',
    'mulberry': '#C54B84',
    'terracotta': '#E2725B',
    'berry red': '#880044',
    'deep plum': '#3F022B',
    'burgundy': '#800020',
    'brick red': '#CB4154',
    'soft pink': '#FFB7B2',
    'coral': '#FF7F50',
    'rosy nude': '#BC8F8F',
    'baby pink': '#F4C2C2',
'classic red': '#C00000',
'rose nude': '#C08081',
'peach nude': '#E8B59B',
'chocolate brown': '#5A3A22',
'wine': '#722F37',
'berry': '#7A003C',
'rose gold': '#B76E79',
'chocolate':'#753e2e',
'burnt umber': '#8A3324',  
    // --- LIPSTICK (MALE / BALMS) ---
    'sheer rose balm': '#FFC0CB',   // Soft Pink (Natural flush for light skin)
    'clear hydration': '#FFF5EE',   // Seashell (Looks like natural glossy lips)

    // Medium Skin
    'peachy nude balm': '#E3C6AA',  // Warm Nude (Cancels darkness on medium lips)
    'natural moisture': '#F5F5DC',  // Beige (Neutral healthy look)

    // Dark Skin
    'sheer berry tint': '#DB7093',  // Pale Violet Red (Looks like natural pink on dark skin)
    'cocoa butter': '#D2691E',

    // --- CLOTHING COLORS ---
    'baby blue': '#89CFF0',
    'lavender': '#E6E6FA',
    'emerald green': '#50C878',
    'charcoal': '#36454F',
    'olive green': '#808000',
    'mustard': '#FFDB58',
    'rust orange': '#B7410E',
    'navy': '#000080',
    'cobalt blue': '#0047AB',
    'bright white': '#FFFFFF',
    'gold': '#FFD700',
    'fuchsia': '#FF00FF',
    'soft pastels': '#FFD1DC',
    'mint': '#98FF98',
    'maroon': '#800000',
    'black': '#000000',
    'royal blue': '#4169E1',
    'red': '#FF0000',
    'white': '#FFFFFF',
    'soft peach': '#FFDAB9',
'navy blue': '#000080',
'royal blue': '#4169E1',
'burgundy': '#800020',
'orange': '#FFA500',
'silver': '#C0C0C0'
  };

  // 1. Direct match
  if (colors[name]) return colors[name];

  // 2. Intelligent Keyword matching (Fallbacks)
  if (name.includes('porcelain')) return '#FDF6E3';
  if (name.includes('ivory')) return '#FFFFF0';
  if (name.includes('beige')) return '#E8D4BE';
  if (name.includes('honey')) return '#D2B48C';
  if (name.includes('mocha') || name.includes('espresso')) return '#4B3621';
  
  if (name.includes('rose')) return '#DCAE96';
  if (name.includes('coral')) return '#FF7F50';
  if (name.includes('berry')) return '#880044';
  if (name.includes('plum')) return '#3F022B';
  if (name.includes('red')) return '#CB4154';
  if (name.includes('pink')) return '#FFB7B2';
  if (name.includes('nude')) return '#E6CBA8';
  if (name.includes('cocoa')) return '#D2691E'; // <--- Add this keyword
  if (name.includes('butter')) return '#F5DEB3'; // <--- Add this keyword
  if (name.includes('balm')) return '#FFF5EE';   // <--- Add this keyword (Generic gloss)
  if (name.includes('tint')) return '#F08080';   //
  
  if (name.includes('blue')) return '#89CFF0';
  if (name.includes('green')) return '#50C878';
  if (name.includes('yellow') || name.includes('mustard')) return '#FFDB58';
  if (name.includes('orange') || name.includes('rust')) return '#B7410E';
  if (name.includes('purple') || name.includes('lavender')) return '#E6E6FA';
  if (name.includes('black') || name.includes('charcoal')) return '#36454F';
  if (name.includes('white')) return '#FFFFFF';
  if (name.includes('balm')) return '#F0F8FF';
  if (name.includes('wine')) return '#722F37';
if (name.includes('chocolate')) return '#5A3A22';
if (name.includes('burgundy')) return '#800020';
if (name.includes('royal')) return '#4169E1';
if (name.includes('silver')) return '#C0C0C0';
if (name.includes('orange')) return '#FFA500';
if (name.includes('chocolate')) return '#753e2e';
if (name.includes('burnt umber')) return '#8A3324';


  return colorName; // Final fallback
};

// --- 2. HELPER: Prevent Crash (String -> Array) ---
const ensureArray = (data) => {
  if (Array.isArray(data)) return data;
  if (typeof data === 'string') {
    return data.split(/,| or /).map(item => item.trim());
  }
  return []; 
};

const UploadSection = () => {
  useEffect(() => { console.log('Upload mounted'); }, []);

  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const { saveLook } = useAuth();
  const [faceShape, setFaceShape] = useState("");
  const [skinTone, setSkinTone] = useState("");
  const [recommendations, setRecommendations] = useState({});

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:5000/analyze/", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Server error:", text);
        return;
      }

      const data = await res.json();
      console.log("AI Response:", data);

      setFaceShape(data.face_shape || "Unknown");
      setSkinTone(data.skin_tone || "Unknown");
      setRecommendations(data.recommendations || {});
      setAnalysisComplete(true);
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  const handleSaveLook = () => {
    const look = {
      title: "AI Recommended Look",
      foundation: ensureArray(recommendations.foundation)[0],
      lipstick: "Signature Shade", 
      hairstyle: "Custom Fit",
      colors: ensureArray(recommendations.clothing)
    };
    saveLook(look);
    alert('✨ Look saved to your profile!');
  };

  const renderOptionResult = () => {
    const clothingList = ensureArray(recommendations?.clothing);
    const lipstickFemaleList = ensureArray(recommendations?.lipstickFemale);
    const lipstickMaleList = ensureArray(recommendations?.lipstickMale);
    const foundationList = ensureArray(recommendations?.foundation);

    const options = {
      hair: {
        title: "Hairstyle & Partition",
        content: (
          <div className="detail-content">
             <div className="gender-block">
                <span className="gender-badge female">She</span>
                <div dangerouslySetInnerHTML={{ __html: recommendations?.hairstyleFemale || "Detecting..." }} />
             </div>
             <div className="gender-block">
                <span className="gender-badge male">He</span>
                <div dangerouslySetInnerHTML={{ __html: recommendations?.hairstyleMale || "Detecting..." }} />
             </div>
          </div>
        )
      },
      clothing: {
        title: "Your Color Season",
        content: (
          <div className="detail-content">
            <p style={{textAlign: 'center', marginBottom: '15px'}}>Colors that make you glow:</p>
            <div className="palette-grid">
              {clothingList.map((colorName, index) => (
                <div key={index} className="palette-item">
                  <div className="color-circle" style={{ backgroundColor: getColorHex(colorName) }}></div>
                  <span>{colorName}</span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      foundation: {
        title: "Perfect Match Foundation",
        content: (
          <div className="detail-content centered">
             <div className="palette-grid" style={{justifyContent: 'center', gap: '20px'}}>
               {foundationList.map((shade, i) => (
                  <div key={i} className="palette-item">
                     <div className="color-circle large" style={{ backgroundColor: getColorHex(shade), width: '70px', height: '70px' }}></div>
                     <span style={{fontSize: '0.9rem'}}>{shade}</span>
                  </div>
               ))}
             </div>
          </div>
        )
      },
      lipstick: {
        title: "Lip Shade Suggestions",
        content: (
          <div className="detail-content">
             {/* FEMALE SECTION */}
             <div className="gender-block">
                <span className="gender-badge female">She</span>
                <div className="palette-grid" style={{justifyContent: 'center', marginTop: '10px'}}>
                    {lipstickFemaleList.map((shade, i) => (
                        <div key={i} className="palette-item">
                           <div className="color-circle" style={{ backgroundColor: getColorHex(shade) }}></div>
                           <span>{shade}</span>
                        </div>
                    ))}
                </div>
             </div>

             {/* MALE SECTION */}
             <div className="gender-block" style={{marginTop:'20px'}}>
                <span className="gender-badge male">He</span>
                <div className="palette-grid" style={{justifyContent: 'center', marginTop: '10px'}}>
                    {lipstickMaleList.map((shade, i) => (
                        <div key={i} className="palette-item">
                           <div className="color-circle" style={{ backgroundColor: getColorHex(shade) }}></div>
                           <span>{shade}</span>
                        </div>
                    ))}
                </div>
             </div>
          </div>
        )
      }
    };

    if (!selectedOption) return null;
    const option = options[selectedOption];
    
    return (
      <div className="option-detail-card fade-in">
        <div className="detail-header">
           <h3>{option.title}</h3>
           <button className="close-btn" onClick={() => setSelectedOption(null)}>×</button>
        </div>
        {option.content}
      </div>
    );
  };

  return (
    <section id="upload" className="section modern-upload">
      <div className="container">
        <div className="header-center">
          <h2 className="section-heading">Beauty AI Profile</h2>
          <p className="section-subheading">Upload a selfie to unlock your personalized beauty passport.</p>
        </div>

        <div className="upload-wrapper">
          <input 
            type="file" 
            id="fileInput" 
            style={{ display: 'none' }} 
            accept="image/*"
            onChange={handleFileUpload}
          />

          {!analysisComplete ? (
            <div className="upload-glass-card" onClick={() => document.getElementById('fileInput').click()}>
              <div className="upload-circle">
                <i className="fas fa-camera"></i>
              </div>
              <h3>Tap to Upload Photo</h3>
              <p>For best results, use natural lighting and no filters.</p>
            </div>
          ) : (
            <div className="results-container fade-in">
              <div className="beauty-stats-bar">
                <div className="stat-item">
                  <span className="stat-label">Face Shape</span>
                  <span className="stat-value">{faceShape}</span>
                </div>
                <div className="divider"></div>
                <div className="stat-item">
                  <span className="stat-label">Skin Undertone</span>
                  <span className="stat-value">{skinTone}</span>
                </div>
                <div className="divider"></div>
                <div className="stat-item">
                  <span className="stat-label">Lighting</span>
                  <span className="stat-value">Natural Day</span>
                </div>
              </div>

              <div className="main-content-split">
                <div className="category-sidebar">
                  {['foundation', 'clothing', 'hair', 'lipstick'].map(opt => (
                    <div 
                      key={opt}
                      className={`cat-btn ${selectedOption === opt ? 'active' : ''}`}
                      onClick={() => handleOptionClick(opt)}
                    >
                      <div className="cat-icon">
                        {opt === 'foundation' && <i className="fas fa-magic"></i>}
                        {opt === 'clothing' && <i className="fas fa-tshirt"></i>}
                        {opt === 'hair' && <i className="fas fa-cut"></i>}
                        {opt === 'lipstick' && <i className="fas fa-kiss-wink-heart"></i>}
                      </div>
                      <span>{opt.charAt(0).toUpperCase() + opt.slice(1)}</span>
                    </div>
                  ))}
                </div>

                <div className="dynamic-display-area">
                  {selectedOption ? (
                    renderOptionResult()
                  ) : (
                    <div className="default-look-card">
                       <h3 className="glam-title">✨ Your Signature Look</h3>
                       
                       <div className="look-summary-list">
                          <div className="summary-row">
                             <span className="lbl">Foundation</span>
                             <span className="val">{ensureArray(recommendations.foundation)[0] || "N/A"}</span>
                          </div>
                          <div className="summary-row">
                             <span className="lbl">Best Colors</span>
                             <div className="mini-palette">
                                {ensureArray(recommendations.clothing).slice(0, 4).map((c, i) => (
                                   <div key={i} className="dot" style={{backgroundColor: getColorHex(c)}}></div>
                                ))}
                             </div>
                          </div>
                       </div>

                       <button className="btn btn-primary save-btn" onClick={handleSaveLook}>
                         <i className="fas fa-heart"></i> Save to Profile
                       </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UploadSection;