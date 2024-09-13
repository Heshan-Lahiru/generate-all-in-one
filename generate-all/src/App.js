import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Pdf from './components/pdf/pdf';
import Video from './components/video/video';
import Audio from './components/Audio/audio';
import Image from './components/image/image';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdf" element={<Pdf />} />
        <Route path="/video" element={<Video />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/image" element={<Image />} />
       
      </Routes>
    </Router>
  );
}

export default App;
