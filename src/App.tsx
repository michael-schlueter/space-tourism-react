import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { CrewPage } from "./pages/CrewPage";
import { DestinationPage } from "./pages/DestinationPage";
import { MainPage } from "./pages/MainPage";
import { TechnologyPage } from "./pages/TechnologyPage";

function App() {
  const [mainClass, setMainClass] = useState("wrapper home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setMainClass("wrapper home");
    } else if (location.pathname === "/destination") {
      setMainClass("wrapper destination");
    } else if (location.pathname === "/crew") {
      setMainClass("wrapper crew");
    } else if (location.pathname === "/technology") {
      setMainClass("wrapper technology");
    }
  }, [location.pathname]);

  return (
    <div className={mainClass}>
      {" "}
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="crew" element={<CrewPage />} />
        <Route path="destination" element={<DestinationPage />} />
        <Route path="technology" element={<TechnologyPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
