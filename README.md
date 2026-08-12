# 💄✨ AI SMART BEAUTY

<p align="center">

<img src="https://img.shields.io/badge/AI-Smart%20Beauty-ff69b4?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Computer%20Vision-OpenCV-5C3EE8?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Machine%20Learning-XGBoost-orange?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Backend-Flask-black?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>

</p>

<p align="center">
  <b>✨ AI-powered beauty analysis with personalized recommendations ✨</b>
</p>

<p align="center">
  An intelligent beauty-tech application that uses Computer Vision,
  Machine Learning and REST APIs to analyze facial characteristics
  and provide personalized beauty recommendations.
</p>

<p align="center">

🌸 <b>Face Shape</b>
  •  
🎨 <b>Skin Tone</b>
  •  
💄 <b>Makeup</b>
  •  
👗 <b>Clothing</b>
  •  
💇 <b>Hairstyle</b>

</p>

---

## 🌐 PROJECT

🔗 **GitHub Repository:**
https://github.com/rucha-code-nodes/AI_Smart_Beauty

---

# 🌸 PROJECT OVERVIEW

**AI Smart Beauty** is an AI-powered beauty recommendation platform that combines **Computer Vision, Machine Learning and Full-Stack Web Development** to deliver personalized recommendations.

The system analyzes facial characteristics from an image, identifies the user's **skin tone and face shape**, and uses ML-driven personalization to recommend suitable:

* 💄 Makeup
* 👗 Clothing
* 💇 Hairstyles

Instead of depending entirely on manually defined rules, the application uses **XGBoost-based Machine Learning models** to improve recommendation personalization.

> 💖 **Beauty is personal. Your recommendations should be too.**

---

# 🚀 PROJECT HIGHLIGHTS

### 🧠 AI-POWERED ANALYSIS

Implemented a Computer Vision pipeline using **OpenCV** for facial feature extraction and real-time skin tone and face shape analysis.

### 🎯 PERSONALIZED RECOMMENDATIONS

Replaced traditional manual rule-based matching with **XGBoost-driven personalization**, achieving a reported **50% improvement in recommendation accuracy**.

### 🔌 REST API ARCHITECTURE

Engineered REST APIs that connect the frontend, backend, database and ML inference modules to deliver personalized recommendations.

### 🧪 QUALITY ASSURANCE

Created functional test cases for recommendation workflows and validated application behavior across multiple user scenarios.

### 🔄 API & REGRESSION TESTING

Validated API integrations and performed regression testing to verify reliable data flow between:

```text
React Frontend
      │
      ▼
REST APIs
      │
      ▼
Flask Backend
      │
      ├──────────────► MongoDB
      │
      ▼
ML Inference
      │
      ▼
Personalized Recommendations
```

---

# 💎 KEY FEATURES

| Feature                          | Description                                   |
| -------------------------------- | --------------------------------------------- |
| 📸 **Face Analysis**             | Detects and analyzes facial characteristics   |
| 👩 **Face Shape Detection**      | Classifies facial shape using ML              |
| 🎨 **Skin Tone Detection**       | Analyzes skin tone using Computer Vision      |
| 🤖 **XGBoost Personalization**   | Generates ML-driven recommendations           |
| 💄 **Makeup Recommendations**    | Personalized makeup suggestions               |
| 👗 **Clothing Recommendations**  | Suggestions based on user characteristics     |
| 💇 **Hairstyle Recommendations** | Personalized hairstyle suggestions            |
| 🔌 **REST APIs**                 | Connects frontend, backend and ML modules     |
| 🗄️ **MongoDB**                  | Stores application/user-related data          |
| 🧪 **Functional Testing**        | Validates core recommendation workflows       |
| 🔄 **Regression Testing**        | Ensures existing functionality remains stable |

---

# 🧠 AI / ML PIPELINE

```text
                         📸 USER IMAGE
                              │
                              ▼
                    ┌──────────────────┐
                    │   OpenCV         │
                    │ Face Detection   │
                    └────────┬─────────┘
                             │
                             ▼
                    🧬 FEATURE EXTRACTION
                             │
                    ┌────────┴────────┐
                    ▼                 ▼
             👩 FACE SHAPE       🎨 SKIN TONE
                    │                 │
                    └────────┬────────┘
                             ▼
                    ┌──────────────────┐
                    │    XGBoost       │
                    │   ML Models      │
                    └────────┬─────────┘
                             │
                             ▼
                  🤖 PERSONALIZATION
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
          💄 Makeup       👗 Clothing    💇 Hairstyle
       Recommendations  Recommendations Recommendations
```

---

# 🔬 COMPUTER VISION

The Computer Vision pipeline uses **OpenCV** to process facial images and extract relevant information.

### Processing Flow

```text
📸 Image Input
      │
      ▼
🔍 Face Detection
      │
      ▼
🧹 Image Processing
      │
      ▼
🧬 Facial Feature Extraction
      │
      ├───────────────┐
      ▼               ▼
👩 Face Shape      🎨 Skin Tone
      │               │
      └───────┬───────┘
              ▼
        🤖 ML Prediction
```

This allows the application to transform raw image information into structured features that can be used by the Machine Learning models.

---

# 🤖 MACHINE LEARNING

## XGBoost Personalization

The project uses **XGBoost** to improve recommendation personalization instead of depending solely on manually defined rules.

### Traditional Approach

```text
User Characteristics
        │
        ▼
Manual Rules
        │
        ▼
Fixed Recommendations
```

### AI Smart Beauty Approach

```text
User Image
    │
    ▼
Feature Extraction
    │
    ▼
ML Features
    │
    ▼
XGBoost Model
    │
    ▼
Personalized Recommendations
```

### 📈 Reported Improvement

The ML-driven recommendation approach achieved a reported:

# **50% Improvement in Recommendation Accuracy**

compared with the previous manual rule-based matching approach.

---

# 🔌 REST API ARCHITECTURE

The application uses REST APIs to enable communication between the frontend, backend, database and Machine Learning components.

```text
                 👤 USER
                    │
                    ▼
            ⚛️ REACT FRONTEND
                    │
                    │ HTTP / REST
                    ▼
             🌐 FLASK BACKEND
                    │
          ┌─────────┼─────────┐
          │         │         │
          ▼         ▼         ▼
       MongoDB   ML Model   Processing
          │         │
          │         ▼
          │      XGBoost
          │         │
          └────┬────┘
               ▼
       📋 Recommendation
               │
               ▼
        ⚛️ React Frontend
               │
               ▼
          👤 USER RESULT
```

---

# 🛠️ TECHNOLOGY STACK

## 💻 Frontend

<p align="center">

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>

</p>

**React**

Used to build the interactive user interface and consume backend REST APIs.

---

## ⚙️ Backend

<p align="center">

<img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>

</p>

* **Flask** — ML/backend services
* **Node.js** — server-side JavaScript environment
* **Express.js** — REST API/backend services

---

## 🤖 AI / Machine Learning

<p align="center">

<img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white"/>
<img src="https://img.shields.io/badge/XGBoost-FF6600?style=for-the-badge"/>

</p>

* **OpenCV** — Computer Vision and image processing
* **XGBoost** — Machine Learning classification/personalization

---

## 🗄️ Database

<p align="center">

<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>

</p>

**MongoDB** — Data storage and application data management.

---

# 🧩 SYSTEM ARCHITECTURE

```text
                       💄 AI SMART BEAUTY
                              │
                              ▼
                    ┌──────────────────┐
                    │  ⚛️ REACT UI     │
                    └────────┬─────────┘
                             │
                         REST API
                             │
                             ▼
                    ┌──────────────────┐
                    │  🌐 BACKEND      │
                    │ Flask / Node.js  │
                    │ Express.js       │
                    └────────┬─────────┘
                             │
               ┌─────────────┼─────────────┐
               │             │             │
               ▼             ▼             ▼
          🗄️ MongoDB     👁️ OpenCV     🤖 XGBoost
               │             │             │
               │             ▼             │
               │       Feature Data       │
               │             │             │
               └─────────────┼─────────────┘
                             ▼
                    💄 RECOMMENDATION
                             │
                             ▼
                       👤 USER RESULT
```

---

# 🖥️ APPLICATION FLOW

```text
                         👤 USER
                            │
                            ▼
                    📤 Upload Image
                            │
                            ▼
                    🔍 Analyze Face
                            │
                            ▼
                  🧬 Extract Features
                            │
                 ┌──────────┴──────────┐
                 ▼                     ▼
            👩 Face Shape          🎨 Skin Tone
                 │                     │
                 └──────────┬──────────┘
                            ▼
                       🤖 XGBoost
                            │
                            ▼
                    🧠 ML Inference
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
         💄 Makeup       👗 Clothing    💇 Hairstyle
             │              │              │
             └──────────────┼──────────────┘
                            ▼
                    ✨ PERSONALIZED
                     RECOMMENDATIONS
```

---

# 📊 MODEL EVALUATION

The project includes model evaluation and visualization components to understand Machine Learning performance.

### 📈 Confusion Matrix

```text
                 PREDICTED
              ┌─────┬─────┬─────┐
              │  A  │  B  │  C  │
          ┌───┼─────┼─────┼─────┤
ACTUAL A  │   │  ✓  │  ✗  │  ✗  │
          ├───┼─────┼─────┼─────┤
ACTUAL B  │   │  ✗  │  ✓  │  ✗  │
          ├───┼─────┼─────┼─────┤
ACTUAL C  │   │  ✗  │  ✗  │  ✓  │
          └───┴─────┴─────┴─────┘
```

### 🔎 Feature Importance

Feature importance analysis helps identify which extracted characteristics have greater influence on model predictions.

The project includes feature-importance visualizations for model analysis.

---

# 🧪 TESTING & QUALITY ASSURANCE

AI Smart Beauty also includes a dedicated **Software Testing / QA workflow**.

Testing was performed to validate the complete recommendation pipeline and ensure reliable communication between application modules.

## 🧪 Functional Testing

Test cases were created for:

```text
🧪 FUNCTIONAL TESTING
        │
        ├── 📤 Image Upload
        │
        ├── 🔍 Face Detection
        │
        ├── 🎨 Skin Tone Detection
        │
        ├── 👩 Face Shape Prediction
        │
        ├── 🤖 Recommendation Generation
        │
        ├── ❌ Invalid Input Handling
        │
        └── 📋 Result Validation
```

---

# 🔄 API & REGRESSION TESTING

API integrations were validated to ensure correct communication between:

```text
⚛️ React
   │
   ▼
🔌 REST API
   │
   ▼
🌐 Backend
   │
   ├──────► 🗄️ MongoDB
   │
   └──────► 🤖 ML Models
```

Regression testing was performed to verify that new changes did not break existing functionality.

### QA Focus Areas

* ✅ API response validation
* ✅ Data flow validation
* ✅ Recommendation workflow validation
* ✅ Invalid input testing
* ✅ Integration testing
* ✅ Regression testing
* ✅ Functional test-case execution

---

# 📁 PROJECT STRUCTURE

```text
AI_Smart_Beauty/
│
├── 📁 backend/
│   ├── 🌐 Flask services
│   ├── 🔌 REST APIs
│   └── 🤖 ML integration
│
├── 📁 frontend/
│   ├── ⚛️ React application
│   ├── 🎨 UI components
│   └── 🔌 API integration
│
├── 📁 data/
│   └── 📊 Dataset / processed data
│
├── 🐍 app.py
│
├── 🧠 train_model.py
├── 🧠 train_model_face.py
│
├── ⚙️ preprocess.py
├── ⚙️ preprocess_face.py
│
├── 👁️ face_see.py
├── 👁️ see.py
│
├── 🤖 face_shape_model.pkl
├── 🤖 face_shape_model_xgb.pkl
├── 🤖 skin_tone_model_xgb.pkl
│
├── 📦 face_scaler.pkl
├── 📦 skin_scaler.pkl
├── 📦 scaler.pkl
│
├── 📊 confusion_matrix_xgboost.png
├── 📊 feature_importance_xgboost.png
├── 📊 face_feature_importance.png
│
├── 🧪 AI_Smart_Beauty_Test_Cases.xlsx
│
└── 📄 README.md
```

---

# 📋 PROJECT MODULES

```text
┌────────────────────────────────────────────────────┐
│                  AI SMART BEAUTY                   │
├────────────────────────────────────────────────────┤
│                                                    │
│  📸 IMAGE PROCESSING                               │
│       │                                            │
│       ├── OpenCV                                   │
│       └── Feature Extraction                       │
│                                                    │
│  👩 FACE ANALYSIS                                  │
│       │                                            │
│       └── Face Shape Classification                │
│                                                    │
│  🎨 SKIN ANALYSIS                                  │
│       │                                            │
│       └── Skin Tone Detection                      │
│                                                    │
│  🤖 ML ENGINE                                      │
│       │                                            │
│       └── XGBoost                                  │
│                                                    │
│  🔌 API LAYER                                      │
│       │                                            │
│       ├── Flask                                    │
│       ├── Node.js                                  │
│       └── Express.js                               │
│                                                    │
│  🗄️ DATA LAYER                                    │
│       │                                            │
│       └── MongoDB                                  │
│                                                    │
│  ⚛️ FRONTEND                                      │
│       │                                            │
│       └── React                                    │
│                                                    │
│  🧪 QUALITY ASSURANCE                              │
│       │                                            │
│       ├── Functional Testing                       │
│       ├── API Testing                              │
│       └── Regression Testing                       │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

# 🎯 WHAT MAKES THIS PROJECT DIFFERENT?

### 1️⃣ AI + Full Stack

The project combines Machine Learning with a complete web application rather than being only an ML notebook.

### 2️⃣ Computer Vision

Facial characteristics are extracted from images using OpenCV.

### 3️⃣ ML-Based Personalization

XGBoost is used to move beyond static rule-based recommendations.

### 4️⃣ REST API Integration

The ML engine communicates with the application through REST APIs.

### 5️⃣ Quality Assurance

The project includes functional testing, API validation and regression testing.

This makes the project demonstrate skills across:

```text
AI/ML
  +
Computer Vision
  +
Backend Development
  +
REST APIs
  +
Database
  +
Frontend
  +
Software Testing
```

---

# 📈 FUTURE ENHANCEMENTS

AI Smart Beauty can be expanded into a complete AI-powered personal beauty assistant.

```text
                    💄 AI SMART BEAUTY
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
      👩 FACE            🎨 SKIN           💇 HAIR
      ANALYSIS           ANALYSIS          ANALYSIS
          │                 │                 │
          └─────────────────┼─────────────────┘
                            ▼
                       🤖 AI ENGINE
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
          💄 Makeup      🧴 Skincare     💇 Hair
        Recommendations Recommendations Recommendations
             │              │              │
             └──────────────┼──────────────┘
                            ▼
                    ⭐ PERSONALIZED
                       BEAUTY PLAN
```

### 🔮 Planned Improvements

* 📸 Real-time webcam analysis
* 💄 Advanced makeup recommendations
* 🧴 Personalized skincare recommendations
* 💇 Hairstyle recommendations
* 🎨 Foundation shade matching
* 👗 Advanced clothing recommendations
* 🤖 Deep Learning-based facial analysis
* 📊 User recommendation analytics
* ☁️ Cloud deployment
* 📱 Mobile application
* 🔐 Secure user authentication
* ⭐ Recommendation feedback system
* 🛍️ Beauty product integration

---

# ⚙️ INSTALLATION

### 1. Clone the repository

```bash
git clone https://github.com/rucha-code-nodes/AI_Smart_Beauty.git
```

### 2. Navigate to the project

```bash
cd AI_Smart_Beauty
```

### 3. Install Python dependencies

```bash
pip install -r requirements.txt
```

### 4. Start the backend

```bash
python app.py
```

### 5. Start the frontend

```bash
cd frontend
npm install
npm start
```

> ⚠️ Update these commands if your repository uses a different startup configuration.

---

# 👩‍💻 AUTHOR

## Rucha Ahire

**B.Tech Graduate | Software Testing | Java | Python | AI/ML**

### Technical Interests

```text
☕ Java
🐍 Python
🤖 AI / Machine Learning
👁️ Computer Vision
🧪 Software Testing
🔌 REST APIs
🌐 Web Development
🗄️ Databases
```

---

# ⭐ CONTRIBUTION

Contributions and suggestions are welcome!

```text
🍴 Fork
   ↓
🌱 Create Branch
   ↓
💻 Make Changes
   ↓
🧪 Test
   ↓
📤 Push
   ↓
🔀 Pull Request
```

---

# ⭐ SUPPORT THE PROJECT

If you find **AI Smart Beauty** interesting:

⭐ Star the repository
🍴 Fork the project
🐛 Report bugs
💡 Suggest improvements
🤝 Contribute

---

<p align="center">

# 💄✨ AI + BEAUTY + TECHNOLOGY ✨💄

### Making beauty analysis smarter, more personalized and more accessible.

<br>

**Built with ❤️ using React • Flask • OpenCV • XGBoost • MongoDB • Node.js • Express.js**

<br>

⭐ **AI Smart Beauty** ⭐

</p>
