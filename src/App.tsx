import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CrewPage } from "./pages/CrewPage";
import { DestinationPage } from "./pages/DestinationPage";
import { MainPage } from "./pages/MainPage";
import { TechnologyPage } from "./pages/TechnologyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="crew">
          <Route path=":crewId" element={<CrewPage />} />
        </Route>
        <Route path="destination" element={<DestinationPage />} />
        <Route path="technology">
          <Route path=":technologyId" element={<TechnologyPage />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
