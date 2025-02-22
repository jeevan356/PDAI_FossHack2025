import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DocumentUploader from './components/DocumentUploader';

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <h1>Personal Document Assistant AI</h1>
        <DocumentUploader />
      </main>
      <Footer />
    </div>
  );
};

export default App;
