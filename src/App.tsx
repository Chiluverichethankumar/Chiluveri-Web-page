import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-20">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Chiluveri Chethan Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;