import React, { useState } from 'react';
import './IrisForm.css';

const IrisForm = () => {
  const [sepalLength, setSepalLength] = useState('');
  const [sepalWidth, setSepalWidth] = useState('');
  const [petalLength, setPetalLength] = useState('');
  const [petalWidth, setPetalWidth] = useState('');
  const [result, setResult] = useState('');
  const [plot, setPlot] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sepal_length: parseFloat(sepalLength),
        sepal_width: parseFloat(sepalWidth),
        petal_length: parseFloat(petalLength),
        petal_width: parseFloat(petalWidth),
      }),
    });
    const data = await response.json();
    setResult(data.prediction);
    setPlot(data.plot);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Iris Flower Classification</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Sepal Length (cm)</label>
          <input
            type="number"
            value={sepalLength}
            onChange={(e) => setSepalLength(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Sepal Width (cm)</label>
          <input
            type="number"
            value={sepalWidth}
            onChange={(e) => setSepalWidth(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Petal Length (cm)</label>
          <input
            type="number"
            value={petalLength}
            onChange={(e) => setPetalLength(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Petal Width (cm)</label>
          <input
            type="number"
            value={petalWidth}
            onChange={(e) => setPetalWidth(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="form-button">Predict</button>
      </form>
      {result && (
        <div className="result">
          <p>Prediction: {result}</p>
          
        </div>
      )}
    </div>
  );
};

export default IrisForm;