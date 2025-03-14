import React from 'react';
import './Home.css';
import IrisForm from './IrisForm';
const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <h1>
            Iris<span>Classify</span>
          </h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#demo">Demo</a>
            </li>
           
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Flower Classification</h1>
          <h2>Using the Iris Dataset</h2>
          <p>Discover the beauty of machine learning through floral classification</p>
          <div className="cta-buttons">
            <a href="#demo" className="btn primary">
              Try Demo
            </a>
            <a href="#about" className="btn secondary">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="flower-graphic"></div>
          <img
            src="/Iris2.jpg"
            alt="Iris flowers illustration"
            width={400}
            height={450}
            className="main-image"
          />
        </div>
      </section>

      <section id="about" className="about">
        <div className="section-header">
          <h2>About the Project</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              The Iris Flower Classification project uses machine learning to identify and classify different species of
              iris flowers based on their measurements. The famous Iris dataset contains measurements for 150 iris
              flowers from three different species.
            </p>
            <p>
              Our model analyzes sepal length, sepal width, petal length, and petal width to accurately predict the iris
              species with high precision.
            </p>
          </div>
          <div className="about-image">
            <img
              src="/Iris.jpg"
              alt="Iris dataset visualization"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="section-header">
          <h2>Features</h2>
          <div className="underline"></div>
        </div>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="accuracy-icon"></i>
            </div>
            <h3>High Accuracy</h3>
            <p>Our model achieves over 95% accuracy in classifying iris species.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="realtime-icon"></i>
            </div>
            <h3>Real-time Analysis</h3>
            <p>Get instant classification results with our optimized algorithms.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="visual-icon"></i>
            </div>
            <h3>Visual Insights</h3>
            <p>Beautiful visualizations help understand the classification process.</p>
          </div>
        </div>
      </section>

      <section id="demo" className="demo">
        <IrisForm/>
      </section>

      

      
    </div>
  );
};

export default Home;