import React from 'react';
import './Lang.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Language Learning App</h1>
        <p>Start your language learning journey with us!</p>
        <button>Get Started</button>
      </header>
      <section className="Features">
        <h2>Key Features</h2>
        <ul>
          <li>Interactive Lessons</li>
          <li>Personalized Learning Paths</li>
          <li>Progress Tracking</li>
        </ul>
      </section>
      <section className="Testimonials">
        <h2>What Our Users Say</h2>
        <div className="Testimonial">
          <p>"I love how easy it is to learn with this app. The lessons are fun and engaging!"</p>
          <span>- John Doe</span>
        </div>
        <div className="Testimonial">
          <p>"This app helped me improve my language skills significantly. Highly recommended!"</p>
          <span>- Jane Smith</span>
        </div>
      </section>
      <footer className="Footer">
        <p>&copy; 2024 Language Learning App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
