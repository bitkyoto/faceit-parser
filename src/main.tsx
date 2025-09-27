import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { StartPage } from "./pages/StartPage/StartPage.tsx";
import { MainPage } from "./pages/MainPage/MainPage.tsx";
import { CompPage } from "./pages/ComparisonPage/CompPage.tsx";
import { MapsPage } from "./pages/MapsPage/MapsPage.tsx";
import { LeaderboardPage } from "./pages/LeaderboardPage/LeaderboardPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    {/* <StrictMode> */}
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/maps" element={<MapsPage />} />
      <Route path="/comp" element={<CompPage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
    </Routes>
    {/* </StrictMode> */}
  </BrowserRouter>
);
