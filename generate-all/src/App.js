import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pdf from './components/pdf/pdf';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pdf />} />
       
      </Routes>
    </Router>
  );
}

export default App;
