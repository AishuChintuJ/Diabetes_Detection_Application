from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np


app = Flask(__name__)

CORS(app)


# Load ML model
model = pickle.load(
    open("model.pkl", "rb")
)


# Home route
@app.route("/")
def home():
    return "Diabetes Detection API is Running"


# Prediction route
@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    values = [
        float(data["pregnancies"]),
        float(data["glucose"]),
        float(data["bloodPressure"]),
        float(data["skinThickness"]),
        float(data["insulin"]),
        float(data["bmi"]),
        float(data["dpf"]),
        float(data["age"])
    ]


    values = np.array(values).reshape(1, -1)


    result = model.predict(values)


    if result[0] == 1:
        output = "Diabetes Detected"
    else:
        output = "No Diabetes"


    return jsonify(
        {
            "result": output
        }
    )


# Run Flask app
if __name__ == "__main__":
    app.run(debug=True)