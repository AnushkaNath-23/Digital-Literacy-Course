import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AccessibilityProvider } from './context/AccessibilityContext.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Tutorials from './components/Tutorials.jsx';
import AIChat from './components/AIChat.jsx';
import Feedback from './components/Feedback.jsx';
import AccessibilityControls from './components/AccessibilityControls.jsx';

function App() {
  return (
    <AccessibilityProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <Header />
          <AccessibilityControls />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/chat" element={<AIChat />} />
              <Route path="/feedback" element={<Feedback />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AccessibilityProvider>
  );
}

export default App;