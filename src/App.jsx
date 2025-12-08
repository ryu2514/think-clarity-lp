import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Program from './components/Program';
import MonitorDetails from './components/MonitorDetails';
import Requirements from './components/Requirements';
import Instructor from './components/Instructor';
import FAQ from './components/FAQ';
import Offer from './components/Offer';

function App() {
  return (
    <div className="app">
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Program />
        <Instructor />
        <MonitorDetails />
        <Requirements />
        <FAQ />
        <Offer />
      </main>

      <footer className="py-8 bg-white border-t border-gray-100 text-center text-sm text-gray-400">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Think Clarity</p>
          <p className="mt-2">小林リュージュ</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
