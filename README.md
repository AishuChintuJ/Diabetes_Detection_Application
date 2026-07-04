# Diabetes Detection Application 🩺

A Full Stack Machine Learning web application that predicts whether a person is likely to have diabetes based on health parameters.

This project uses a trained Machine Learning model with a Flask backend API and a React frontend designed using Tailwind CSS and Material UI.

---

## 🚀 Features

- Diabetes prediction using Machine Learning
- Interactive and responsive user interface
- Real-time prediction results
- Flask REST API integration
- Material UI components
- Tailwind CSS styling
- Random Forest Classification model

---

## 🛠️ Technologies Used

### Frontend
- React JS
- Vite
- JavaScript
- Tailwind CSS
- Material UI

### Backend
- Python
- Flask
- Flask-CORS

### Machine Learning
- Scikit-Learn
- Pandas
- NumPy
- Random Forest Classifier

---

## 📁 Project Structure

```text
Diabetes_Detection_Application/

│
├── backend/
│   ├── app.py
│   ├── train_model.py
│   ├── diabetes.csv
│   ├── model.pkl
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Diabetes_Detection_Application.git
```

Go to project folder:

```bash
cd Diabetes_Detection_Application
```

---

# Backend Setup

Go to backend:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

```bash
venv\Scripts\activate
```

Install requirements:

```bash
pip install -r requirements.txt
```

Run Flask server:

```bash
python app.py
```

Backend runs at:

```text
http://127.0.0.1:5000
```

---

# Frontend Setup

Open another terminal.

Go to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start application:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 📊 Model Inputs

The prediction model uses:

- Pregnancies
- Glucose
- Blood Pressure
- Skin Thickness
- Insulin
- BMI
- Diabetes Pedigree Function
- Age

---

## 🧠 Machine Learning Workflow

1. Load diabetes dataset
2. Preprocess data
3. Split training and testing data
4. Train Random Forest Classifier
5. Save model using Pickle
6. Connect model with Flask API
7. Display prediction in React UI

---

## 📌 Output

Prediction result:

```text
Diabetes Detected
```

or

```text
No Diabetes
```

---

## 🔮 Future Improvements

- User Authentication
- Store Prediction History
- Dashboard with Charts
- Download Health Report
- AI Health Recommendation System
- Deployment

---

## 👩‍💻 Author

**Aishwarya J**

Computer Science and Engineering Student

---

⭐ If you like this project, give it a star!
