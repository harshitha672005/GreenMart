import React from 'react';
import './Exmfrom.css';

function App() {
  return (
    <div className="App">
        
      <header className="header">
        <h1>Welcome to Our Language Learning App!</h1>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Learn at your own pace</h2>
          <p>Our language learning app allows you to learn at your own pace. Study when it's convenient for you.</p>
        </div>
        <div className="feature">
          <h2>Interactive lessons</h2>
          <p>Our interactive lessons make learning a new language fun and engaging.</p>
        </div>
        <div className="feature">
          <h2>Speak with native speakers</h2>
          <p>Practice speaking with native speakers to improve your pronunciation and fluency.</p>
        </div>
      </section>
      <section className="call-to-action">
        <h2>Ready to start learning?</h2>
        <button>Sign up now</button>
      </section>
    </div>
  );
}

export default App;