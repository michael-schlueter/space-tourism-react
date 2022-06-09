import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CrewPage } from './pages/CrewPage';
import { DestinationPage } from './pages/DestinationPage';
import { MainPage } from './pages/MainPage';
import { TechnologyPage } from './pages/TechnologyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="crew" element={<CrewPage />} />
        <Route path="destination">
          <Route path=":destinationId" element={<DestinationPage />} />
        </Route>
        <Route path="technology" element={<TechnologyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
