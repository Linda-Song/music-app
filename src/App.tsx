import React, { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const AppLayout = lazy(() => import("./layout/AppLayout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const SearchKeywordPage = lazy(
  () => import("./pages/SearchKeywordPage/SearchKeywordPage"),
);
const PlaylistDetailPage = lazy(
  () => import("./pages/PlaylistDetailPage/PlaylistDetailPage"),
);
const PlaylistPage = lazy(() => import("./pages/PlaylistPage/PlaylistPage")); // 필요시 경로 수정

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="search/:keyword" element={<SearchKeywordPage />} />
          <Route path="playlist/:id" element={<PlaylistDetailPage />} />
          <Route path="playlist" element={<PlaylistPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
