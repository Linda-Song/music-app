import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SearchKeywordPage from "./pages/SearchKeywordPage";
import PlaylistDetailPage from "./pages/PlaylistDetailPage/PlaylistDetailPage";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="search/:keyword" element={<SearchKeywordPage />} />
        <Route path="playlist/:id" element={<PlaylistDetailPage />} />
        <Route path="playlist" element={<PlaylistPage />} />
      </Route>
    </Routes>
  );
}

export default App;
