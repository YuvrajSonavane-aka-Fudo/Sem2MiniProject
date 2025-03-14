from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
from sklearn.datasets import load_iris

app = Flask(__name__)
CORS(app)

# Load the trained model and scaler
model = joblib.load('../model/iris_model.joblib')
scaler = joblib.load('../model/scaler.joblib')

# Get iris class names
iris_data = load_iris()
class_names = iris_data.target_names

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        features = [
            float(data['sepal_length']),
            float(data['sepal_width']),
            float(data['petal_length']),
            float(data['petal_width'])
        ]
        
        # Scale the features
        features_scaled = scaler.transform([features])
        
        # Make prediction
        prediction = model.predict(features_scaled)
        probability = model.predict_proba(features_scaled)
        
        # Get the class name
        predicted_class = class_names[prediction[0]]
        
        return jsonify({
            'prediction': predicted_class,
            'probability': probability[0].tolist(),
            'class_names': class_names.tolist()
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    app.run(debug=True)